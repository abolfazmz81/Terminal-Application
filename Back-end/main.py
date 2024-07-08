from fastapi.responses import JSONResponse
from fastapi import FastAPI, Depends, HTTPException,Path
from sqlalchemy.orm import Session
from Models import *
from sqlalchemy import desc
from database import SessionLocal, engine, Base, get_db
from fastapi.middleware.cors import CORSMiddleware
from typing import Annotated, ClassVar, List
from Schemes import *
from datetime import datetime

Base.metadata.create_all(bind=engine)
app = FastAPI()

origins = ["http://localhost:5173"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

db_dependency = Annotated[Session, Depends(get_db())]

def model_to_dict(model_instance):
    return {column.name: getattr(model_instance, column.name) for column in model_instance.__table__.columns}


@app.post("/Signup")
async def Signup(json:SignUp, db: Session = Depends(get_db)):
    check = db.query(Owner).filter(Owner.nationalId == json.nationalCode).first()
    check2 = db.query(Owner).filter(Owner.number == json.phoneNumber).first()
    if check or check2:
        return JSONResponse(content="the user with this national id or phone number already exists",status_code=400)
    nuser = Owner(Oname=json.name,Olname=json.lname,number=json.phoneNumber,password=json.password,nationalId=json.nationalCode)
    db.add(nuser)
    db.commit()
    db.refresh(nuser)
    return nuser



@app.post("/Login")
async def Login(json:Login,db: Session = Depends(get_db)):
    u1 = db.query(Owner).filter(Owner.number == json.phoneNumber).first()
    u2 = db.query(Driver).filter(Driver.number == json.phoneNumber and Driver.password == json.password).first()
    if not u1:
        if not u2:
            return JSONResponse(content="the user with this phone number doesnt exists",status_code=404)
        if u2.password == json.password:
            return JSONResponse(content=model_to_dict(u2), status_code=200)
        return JSONResponse(content="wrong password", status_code=400)
    if u1.password == json.password:
        return JSONResponse(content=model_to_dict(u1), status_code=201)
    if u2:
        if u2.password == json.password:
            return JSONResponse(content=model_to_dict(u2), status_code=200)
    return JSONResponse(content="wrong password",status_code=400)


@app.post("/Add_Driver")
async def Add_Driver(json:driver,db : Session = Depends(get_db)):
    check = db.query(Driver).filter(Driver.nationalId == json.nationalCode).first()
    check2 = db.query(Driver).filter(Driver.number == json.phoneNumber).first()
    if check:
        return JSONResponse(content="the user with this national id already exists",status_code=400)
    elif check2:
        return JSONResponse(content="the user with this phone number already exists",status_code=400)
    nuser = Driver(Dname=json.name,Dlname=json.lname,number=json.phoneNumber,password=json.password,nationalId=json.nationalCode)
    db.add(nuser)
    db.commit()
    db.refresh(nuser)
    return nuser

@app.post("/Add_Car")
async def Add_Car(json:add_car, db: Session = Depends(get_db)):
    check = db.query(Car).filter(Car.plate == json.plate).first()
    if check:
        return JSONResponse(content="the car with this plate already exists",status_code=400)
    check = db.query(Owner).filter(Owner.id == json.Oid)
    if not check:
        return JSONResponse(content="the owner id is not valid",status_code=404)

    ncar = Car(model=json.model,color=json.color,plate=json.plate,type=json.type)
    db.add(ncar)
    db.commit()
    db.refresh(ncar)
    cd = OwnerCars(Oid=json.Oid,Cid=ncar.id)
    db.add(cd)
    db.commit()
    db.refresh(cd)
    return JSONResponse(content=model_to_dict(ncar),status_code=200)

@app.post("/Add_Trip")
async def Add_Trip(json:add_trip,db : Session = Depends(get_db)):
    di = db.query(Driver).filter(Driver.id == json.Did).first()
    car = db.query(Car).filter(Car.id == json.Cid).first()
    if not di:
        return JSONResponse(content="the driver does not exist",status_code=404)
    if not car:
        return JSONResponse(content="the car does not exist",status_code=404)
    trip = Trip(Date=datetime.strptime(json.Date,"%Y/%m/%d"),Price=json.Price,Origin=json.Origin,Destination=json.Destination,IsCompleted=False)
    db.add(trip)
    db.commit()
    db.refresh(trip)
    tc = TripCar(Tid=trip.id,Cid=car.id)
    td = TripDriver(Tid=trip.id,Did=di.id)
    db.add(tc)
    db.commit()
    db.refresh(tc)
    db.add(td)
    db.commit()
    db.refresh(td)
    trip.Date = trip.Date.__str__()
    return JSONResponse(content=model_to_dict(trip),status_code=200)

@app.put("/Verify/{trip}")
async def Verify(trip: int = Path(...,title="the ID of the trip to verify"),db: Session = Depends(get_db)):
    tr = db.query(Trip).filter(Trip.id == trip).first()
    if not tr:
        return JSONResponse(content="the desired trip does not exist",status_code=404)
    tr.IsCompleted = True
    db.commit()
    return JSONResponse(content="trip Completed successfully",status_code=200)

@app.delete("/Delete_Car/{car_id}")
async def delete_car(car_id: int = Path(...,title="the ID of the car to delete"),db: Session = Depends(get_db)):
    cr = db.query(Car).filter(Car.id == car_id).first()
    if not cr:
        return JSONResponse(content="the car you chose does not exists",status_code=404)
    db.delete(cr)
    db.commit()
    return JSONResponse(content="the car successfully deleted", status_code=200)

@app.delete("/Delete_Trip/{trip_id}")
async def delete_car(trip_id: int = Path(...,title="the ID of the trip to delete"),db: Session = Depends(get_db)):
    tr = db.query(Trip).filter(Trip.id == trip_id).first()
    if not tr:
        return JSONResponse(content="the trip you chose does not exists",status_code=404)
    db.delete(tr)
    db.commit()
    return JSONResponse(content="the trip successfully deleted", status_code=200)

@app.delete("/Delete_Driver/{driver_id}")
async def delete_car(driver_id: int = Path(...,title="the ID of the trip to delete"),db: Session = Depends(get_db)):
    dr = db.query(Driver).filter(Driver.id == driver_id).first()
    if not dr:
        return JSONResponse(content="the driver you chose does not exists",status_code=404)
    db.delete(dr)
    db.commit()
    return JSONResponse(content="the driver successfully deleted", status_code=200)

@app.get("/DTrips/{driver_id}")
async def delete_car(driver_id: int = Path(...,title="the ID of the trip to delete"),db: Session = Depends(get_db)):
    dr = db.query(TripDriver).filter(TripDriver.Did == driver_id).all()
    if not dr:
        return JSONResponse(content="the driver you chose does not exists",status_code=404)
    all = []
    for element in dr:
        dr2 = db.query(Trip).filter(Trip.id == element.Tid).first()
        all.append(dr2)
    return all

