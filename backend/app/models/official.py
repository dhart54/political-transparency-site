# Example Pydantic model
from pydantic import BaseModel

class Official(BaseModel):
    name: str
    net_worth: float