# Example API routes
from fastapi import APIRouter

router = APIRouter()

@router.get('/officials')
def get_officials():
    return ["Official 1", "Official 2"]