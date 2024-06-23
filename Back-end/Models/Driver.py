from sqlalchemy import Column, Integer, String, BigInteger
from sqlalchemy.orm import relationship, declarative_base

base = declarative_base()


class Driver(base):
    __tablename__ = 'Driver'

    id = Column(Integer, primary_key=True, autoincrement=True)
    Dname = Column(String(60), nullable=False)
    number = Column(BigInteger, nullable=False)
    password = Column(String(100), nullable=False)
    nationalId = Column(BigInteger, nullable=False)

    cars = relationship("Car", secondary="Car_Drivers", back_populates="drivers")
    trips = relationship("Trip", secondary="Trip_Driver", back_populates="drivers")
