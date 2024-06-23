from sqlalchemy import Column, Integer, String, Date
from sqlalchemy.orm import relationship, declarative_base

base = declarative_base()


class Trip(base):
    __tablename__ = 'Trip'

    id = Column(Integer, primary_key=True, autoincrement=True)
    Date = Column(Date, nullable=False)
    Price = Column(Integer, nullable=False)
    Origin = Column(String(100), nullable=False)
    Destination = Column(String(100), nullable=False)
    code = Column(String(50), nullable=False)

    cars = relationship("Car", secondary="Trip_Car", back_populates="trips")
    drivers = relationship("Driver", secondary="Trip_Driver", back_populates="trips")
