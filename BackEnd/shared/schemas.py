from pydantic import BaseModel

class Employeebase(BaseModel):
    id:int
    name:str
    age:int 
    gender:str
    aadhar:int
    salary:int
    address:str
    

class Customerbase(BaseModel):
    id : int
    name : str
    phone : int
    aadhar : int
    number_of_guests : int
    room_number : int
    Bill : int

class Salarybase(BaseModel):
    id : int
    name : str
    aadhar : int
    salary : int
    paid : bool