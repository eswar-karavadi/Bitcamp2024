from pydantic import BaseModel
from typing import List, Optional

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