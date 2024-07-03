from sqlalchemy import Column, Integer, String, BigInteger
from sqlalchemy.orm import relationship
from database import Base

class Owner(Base):
    __tablename__ = "Owner"

    id = Column(Integer, primary_key=True, autoincrement=True)
    Oname = Column(String(60), nullable=False)
    number = Column(BigInteger, nullable=False)
    password = Column(String(100))
    nationalId = Column(BigInteger)

    # Relationship to Cars through owner_Cars
    cars = relationship("Car", secondary="owner_Cars", back_populates="owners")