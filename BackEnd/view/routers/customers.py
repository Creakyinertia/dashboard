from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session 
from shared.models import Customers
from shared.schemas import Customerbase
from shared.database import SessionLocal


router = APIRouter(
    prefix="/customer",
    tags=["customer"],
    responses={404: {"description": "Not found"}},
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
        
@router.get("/")
def get_all_customers(db: Session = Depends(get_db)):
    return db.query(Customers).all()

@router.get("/{customer_id}")
def get_customer_based_on_id(customer_id: int,db: Session = Depends(get_db)):
    db_customer = db.query(Customers).filter(Customers.id == customer_id).first()
    return db_customer

@router.post("/", response_model=Customerbase)
def create_new_customer(customer: Customerbase, db: Session = Depends(get_db)):
    CAPSname = customer.name.upper()
    new_customer = Customers(
        name=CAPSname,
        phone=customer.phone,
        number_of_guests=customer.number_of_guests,
        room_number=customer.room_number,
        Bill=customer.Bill,
        aadhar=customer.aadhar,
    )
    db.add(new_customer)
    db.commit()
    db.refresh(new_customer)
    return new_customer

@router.put("/{customer_id}")
def update_customer(customer_id: int, customer: Customerbase, db: Session = Depends(get_db)):
    db_customer = db.query(Customers).filter(Customers.id == customer_id).first()
    if db_customer:
        for attr, value in vars(customer).items():
            setattr(db_customer, attr, value) if value is not None else None
        db.commit()
        db.refresh(db_customer)
        return db_customer
    return None

@router.delete("/{customer_id}",response_model=Customerbase)
def delete_customer_record(customer_id: int, db: Session = Depends(get_db)):
    db_customer = db.query(Customers).filter(Customers.id == customer_id).first()
    if db_customer is None:
        raise HTTPException(status_code=404, detail="customer not found")
    db.delete(db_customer)
    db.commit()
    return db_customer

