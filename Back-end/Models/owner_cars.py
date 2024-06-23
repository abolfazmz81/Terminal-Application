from sqlalchemy import Column, Integer, ForeignKey, UniqueConstraint
from sqlalchemy.orm import declarative_base

base = declarative_base()


class OwnerCars(base):
    __tablename__ = 'owner_Cars'

    Oid = Column(Integer, ForeignKey('Owner.id'), primary_key=True)
    Cid = Column(Integer, ForeignKey('Cars.id'), primary_key=True)

    # Ensures each car is unique to one owner
    __table_args__ = (UniqueConstraint('Cid'),)
