from fastapi.responses import JSONResponse
from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from Models import *
from sqlalchemy import desc
from database import SessionLocal, engine, Base, get_db
from fastapi.middleware.cors import CORSMiddleware
from typing import Annotated, ClassVar, List
from Schemes import *

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

