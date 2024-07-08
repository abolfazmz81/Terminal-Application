from pydantic import BaseModel

class add_trip(BaseModel):
    Cid:int
    Did:int
    Date: str
    Price: int
    Origin: str
    Destination:str
