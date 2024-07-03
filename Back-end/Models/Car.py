from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship, declarative_base
from database import Base



class Car(Base):
    __tablename__ = 'Cars'

    id = Column(Integer, primary_key=True, autoincrement=True)
    model = Column(String(60), nullable=False)
    color = Column(String(15), nullable=False)
    plate = Column(String(15), nullable=False)
    type = Column(String(20), nullable=False)

    owners = relationship("Owner", secondary="owner_Cars", back_populates="cars")
    drivers = relationship("Driver", secondary="Car_Drivers", back_populates="cars")
    trips = relationship("Trip", secondary="Trip_Car", back_populates="cars")
