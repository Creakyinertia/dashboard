from fastapi import  FastAPI
from shared.database import Base , engine
from .routers import employees,customers

Desc='''
    _________EMPLOYEES_________ \n
    1:Get_all_employee_details \n
    2:Get_individual_employee_details \n
    3:Add_employee_record_to_database \n
    4:Update_employee_record_in_database \n
    5:Delete_employee_record_from_database \n
    
    _________CUSTOMERS_________ \n
    1:Get_all_customer_details \n
    2:Get_individual_customer_details \n
    3:Add_customer_record_to_database \n
    4:Update_customer_record_in_database \n
    5:Delete_customer_record_from_database \n
'''

app = FastAPI(title='Dashboard',summary="Dashboard-details",version='0.0.1',description=Desc)
Base.metadata.create_all(bind=engine)

app.include_router(employees.router)
app.include_router(customers.router)

@app.get("/")
async def root():
    return {"message": "Hello Bigger Applications!"}
