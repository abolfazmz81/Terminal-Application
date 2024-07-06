from pydantic import BaseModel


class SignUp(BaseModel):
    name: str
    lname: str
    nationalCode: int
    phoneNumber:int
    password:str
