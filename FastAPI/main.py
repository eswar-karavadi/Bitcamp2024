from typing import List, Optional
from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel
from sqlalchemy import Column, Integer, String, create_engine
from sqlalchemy.orm import sessionmaker, Session

# from firebase_admin import credentials, initialize_app, auth

# Initialize FastAPI app
app = FastAPI()

# Initialize Firebase app (for testing purposes, not used for authentication here)
#commented cred = credentials.Certificate('path/to/firebase/serviceAccountKey.json')
#commented firebase_app = initialize_app(cred)

# Dummy database for gym machines (for testing purposes)
machines_db = {}

# SQLAlchemy Database Setup
SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Dependency to get database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Models
class User(BaseModel):
    uid: str
    email: str
    name: Optional[str] = None

class MachineBase(BaseModel):
    name: str
    status: str

class MachineCreate(MachineBase):
    pass

class Machine(MachineBase):
    id: int
    waitlist: List[int] = []

    class Config:
        orm_mode = True


# Firebase Authentication Dependency (Modified for testing)
async def get_current_user(token: str = "dummy_token"):
    # Simulate authentication or return a hardcoded user for testing
    return User(uid="123", email="example@example.com", name="John Doe")

# Firebase Authentication Endpoints (for testing purposes, not real authentication)
@app.post("/register")
async def register_user(user: User):
    # Create user in Firebase Authentication (using Firebase Admin SDK)
    # Not implemented here, as this is for testing purposes only
    return {"message": "User registered successfully"}

@app.post("/login")
async def login_user(user: User):
    # Authenticate user using Firebase Authentication (handled by Firebase SDK in the frontend)
    # Not implemented here, as this is for testing purposes only
    return {"message": "User logged in successfully"}

# Machine Endpoints
@app.post("/machines/", response_model=Machine)
def create_machine(machine: MachineCreate, db: Session = Depends(get_db)):
    db_machine = Machine(**machine.model_dump())
    db.add(db_machine)
    db.commit()
    db.refresh(db_machine)
    return db_machine

@app.get("/machines/{machine_id}", response_model=Machine)
def get_machine(machine_id: int, db: Session = Depends(get_db)):
    db_machine = db.query(Machine).filter(Machine.id == machine_id).first()
    if db_machine is None:
        raise HTTPException(status_code=404, detail="Machine not found")
    return db_machine

# NFC Tag Integration (for testing purposes, not real NFC functionality)
@app.post("/machine/tap/{machine_id}")
async def tap_nfc(machine_id: str, current_user: User = Depends(get_current_user)):
    # Check if machine ID exists in the dummy database
    if machine_id not in machines_db:
        raise HTTPException(status_code=404, detail="Machine not found")
    
    # Add current user to the waitlist for the machine
    machines_db[machine_id]['waitlist'].append(current_user.uid)
    return {"message": f"{current_user.name} added to waitlist for machine {machine_id}"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
