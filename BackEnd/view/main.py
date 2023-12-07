from fastapi import FastAPI

from routers import employees

app = FastAPI()

app.include_router(employees.router)

@app.get("/")
async def root():
    return {"message": "Hello Bigger Applications!"}
