from sqlalchemy import Column, Integer, ForeignKey, UniqueConstraint
from sqlalchemy.orm import declarative_base

base = declarative_base()


class TripDriver(base):
    __tablename__ = 'Trip_Driver'

    Tid = Column(Integer, ForeignKey('Trip.id'), primary_key=True)
    Did = Column(Integer, ForeignKey('Driver.id'), primary_key=True)

    __table_args__ = (UniqueConstraint('Tid', 'Did'),)
