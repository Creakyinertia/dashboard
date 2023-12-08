from sqlalchemy import Boolean, Column, Integer, String

from .database import Base
class Employees(Base):
    __tablename__ = "employees"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    age = Column(Integer) 
    gender = Column(String)
    aadhar = Column(Integer)
    address = Column(String)
    salary = Column(Integer)
    
class Customers(Base):
    __tablename__ = "customers"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    phone = Column(Integer)
    aadhar = Column(Integer)
    number_of_guests = Column(Integer)
    room_number = Column(Integer)
    Bill = Column(Integer)
    
class Salary(Base):
    __tablename__ = "salary"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    aadhar = Column(Integer)
    salary = Column(Integer)
    paid = Column(Boolean)
    
    
    
    