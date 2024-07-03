from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from Models import *
from sqlalchemy import desc
from database import SessionLocal, engine, Base, get_db
from fastapi.middleware.cors import CORSMiddleware
from typing import Annotated, ClassVar, List
from Schemes.test import input

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


@app.post("/scores")
async def update_score(json:input, db: Session = Depends(get_db)):
    return input.name


@app.get("/top")
async def Get_tops(db: Session = Depends(get_db)):
    res = db.query(Owner).all()
    return res