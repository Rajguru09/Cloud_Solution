
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api_routes import api_router

app = FastAPI(
    title="Cloud Solution Backend",
    description="Handles AWS validation and logic",
    version="1.0.0"
)

# Allow CORS for local frontend (change "*" to frontend URL in production)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Health check route
@app.get("/")
def root():
    return {"message": "Cloud Solution Backend Running"}

# Register all API routes
app.include_router(api_router)
