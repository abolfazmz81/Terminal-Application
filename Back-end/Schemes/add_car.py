from pydantic import BaseModel

class add_car(BaseModel):
    model: str
    color: str
    plate: str
    type:str
