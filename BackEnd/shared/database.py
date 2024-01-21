from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from urllib.parse import quote_plus

# encoded_password = quote_plus("Creaky@321")
# SQLALCHEMY_DATABASE_URL = f"postgresql://postgres:{encoded_password}@localhost:5432/Dashboard"
SQLALCHEMY_DATABASE_URL = f"postgresql://postgres:trust@localhost:5432/dashboard"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
