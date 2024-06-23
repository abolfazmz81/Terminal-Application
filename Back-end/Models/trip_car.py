from sqlalchemy import Column, Integer, ForeignKey, UniqueConstraint
from sqlalchemy.orm import declarative_base

base = declarative_base()


class TripCar(base):
    __tablename__ = 'Trip_Car'

    Tid = Column(Integer, ForeignKey('Trip.id'), primary_key=True)
    Cid = Column(Integer, ForeignKey('Cars.id'), primary_key=True)

    __table_args__ = (UniqueConstraint('Tid', 'Cid'),)
