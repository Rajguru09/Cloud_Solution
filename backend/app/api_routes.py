
from fastapi import APIRouter
from app.api import auth

api_router = APIRouter()

# Add all routers here
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
