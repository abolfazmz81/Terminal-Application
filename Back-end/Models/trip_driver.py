from sqlalchemy import Column, Integer, ForeignKey, UniqueConstraint
from database import Base



class TripDriver(Base):
    __tablename__ = 'Trip_Driver'

    Tid = Column(Integer, ForeignKey('Trip.id'), primary_key=True)
    Did = Column(Integer, ForeignKey('Driver.id'), primary_key=True)

    __table_args__ = (UniqueConstraint('Tid', 'Did'),)
