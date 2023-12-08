from sqlalchemy.orm import Session

from . import models, schemas

def get_employee_based_on_id(db: Session, Employee_id: int):
    db_employee = db.query(models.Employees).filter(models.Employees.id == Employee_id).first()
    return db_employee

def get_all_employees(db: Session):
    return db.query(models.Employees).all()

def create_new_employee(db: Session, item: schemas.Employeebase):
    CAPSname=item.name.upper()
    new_item = models.Employees(
        name=CAPSname,
        age=item.age,
        gender=item.gender,
        address=item.address,
        salary=item.salary,
        aadhar=item.aadhar,
    )
    db.add(new_item)
    db.commit()
    db.refresh(new_item)
    return new_item

def update_employee(db: Session, Employee_id: int, item2: schemas.Employeebase):
    db_item = db.query(models.Employees).filter(models.Employees.id == Employee_id).first()
    if db_item:
        for attr, value in vars(item2).items():
            setattr(db_item, attr, value) if value is not None else None
        db.commit()
        db.refresh(db_item)
        return db_item
    return None

def delete_employee_record(db: Session, item_id: int):
    db_item = db.query(models.Employees).filter(models.Employees.id == item_id).first()
    db.delete(db_item)
    db.commit()
    return db_item
