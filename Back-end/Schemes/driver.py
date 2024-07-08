from pydantic import BaseModel


class driver(BaseModel):
    name: str
    lname: str
    nationalCode: int
    phoneNumber:int
    password:str
