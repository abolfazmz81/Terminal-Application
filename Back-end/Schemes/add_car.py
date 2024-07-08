from pydantic import BaseModel

class add_car(BaseModel):
    Oid:int
    model: str
    color: str
    plate: str
    type:str