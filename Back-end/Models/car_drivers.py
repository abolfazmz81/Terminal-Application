from sqlalchemy import Column, Integer, ForeignKey, UniqueConstraint
from database import Base




class CarDrivers(Base):
    __tablename__ = 'Car_Drivers'

    Did = Column(Integer, ForeignKey('Driver.id'), primary_key=True)
    Cid = Column(Integer, ForeignKey('Cars.id'), primary_key=True)

    __table_args__ = (UniqueConstraint('Cid', 'Did'),)
