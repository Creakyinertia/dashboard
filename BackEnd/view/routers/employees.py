from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from shared.models import Employees
from shared.schemas import Employeebase


router = APIRouter(
    prefix="/employee",
    tags=["employee"],
    responses={404: {"description": "Not found"}},
)

@router.get("/", response_model=None)
def get_all_employees(db: Session):
    return db.query(Employees).all()

@router.get("/{Employee_id}")
def get_employee_based_on_id(db: Session, Employee_id: int):
    db_employee = db.query(Employees).filter(Employees.id == Employee_id).first()
    return db_employee

@router.post("/")
def create_new_employee(db: Session, employee: Employeebase):
    CAPSname=employee.name.upper()
    new_employee = Employees(
        name=CAPSname,
        age=employee.age,
        gender=employee.gender,
        address=employee.address,
        salary=employee.salary,
        aadhar=employee.aadhar,
    )
    db.add(new_employee)
    db.commit()
    db.refresh(new_employee)
    return new_employee


@router.put("/{Employee_id}")
def update_employee(db: Session, Employee_id: int, employee: Employeebase):
    db_employee = db.query(Employees).filter(Employees.id == Employee_id).first()
    if db_employee:
        for attr, value in vars(employee).items():
            setattr(db_employee, attr, value) if value is not None else None
        db.commit()
        db.refresh(db_employee)
        return db_employee
    return None

@router.delete("/{employee_id}")
def delete_employee_record(db: Session, employee_id: int):
    db_employee = db.query(Employees).filter(Employees.id == employee_id).first()
    db.delete(db_employee)
    db.commit()
    return db_employee










