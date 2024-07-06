from pydantic import BaseModel


class Login(BaseModel):
    phoneNumber:int
    password:str