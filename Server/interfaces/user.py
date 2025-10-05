from typing import Optional
from pydantic import BaseModel, EmailStr

class User(BaseModel):
    id: Optional[int]
    username: str
    email: EmailStr
    full_name: Optional[str]
    is_active: bool = True