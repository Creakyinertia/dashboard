from fastapi import  FastAPI
from shared.database import Base , engine
from .routers import employees,customers


app = FastAPI()
Base.metadata.create_all(bind=engine)

app.include_router(employees.router)
app.include_router(customers.router)

@app.get("/")
async def root():
    return {"message": "Hello Bigger Applications!"}
