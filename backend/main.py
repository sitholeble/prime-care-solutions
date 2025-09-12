from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import uvicorn

app = FastAPI(title="Prime Care Solutions API", version="1.0.0")

# CORS middleware for Angular frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:4200",  # Angular dev server
        "https://prime-care-solutions.vercel.app",  # Deployed frontend
        "https://prime-care-solutions.vercel.app/",  # Deployed frontend with trailing slash
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic models
class Service(BaseModel):
    id: int
    name: str
    description: str
    icon: str
    category: str

class ContactRequest(BaseModel):
    name: str
    email: str
    phone: str
    message: str
    service_interest: Optional[str] = None

class TeamMember(BaseModel):
    id: int
    name: str
    position: str
    bio: str
    image: str

# Sample data
services = [
    Service(
        id=1,
        name="Medication Administration",
        description="Professional administration of medications with proper documentation and monitoring",
        icon="medication",
        category="medical"
    ),
    Service(
        id=2,
        name="Bed Bath & Personal Care",
        description="Compassionate assistance with bathing, grooming, and personal hygiene",
        icon="bath",
        category="personal_care"
    ),
    Service(
        id=3,
        name="Physical Therapy & Exercises",
        description="Customized exercise programs and physical therapy to maintain mobility",
        icon="fitness",
        category="medical"
    ),
    Service(
        id=4,
        name="Grocery Shopping & Errands",
        description="Assistance with shopping, errands, and transportation needs",
        icon="shopping",
        category="daily_living"
    ),
    Service(
        id=5,
        name="Meal Preparation & Feeding",
        description="Nutritious meal planning, preparation, and feeding assistance",
        icon="meal",
        category="daily_living"
    ),
    Service(
        id=6,
        name="Emotional Support & Companionship",
        description="Compassionate companionship and emotional support for mental well-being",
        icon="support",
        category="emotional"
    )
]

team_members = [
    TeamMember(
        id=1,
        name="Dr. Sarah Johnson",
        position="Medical Director",
        bio="Board-certified geriatrician with 15 years of experience in elderly care",
        image="sarah-johnson.jpg"
    ),
    TeamMember(
        id=2,
        name="Michael Chen",
        position="Head of Nursing",
        bio="Registered nurse specializing in home care with extensive experience in medication management",
        image="michael-chen.jpg"
    ),
    TeamMember(
        id=3,
        name="Lisa Rodriguez",
        position="Physical Therapist",
        bio="Licensed physical therapist focused on mobility and rehabilitation for elderly patients",
        image="lisa-rodriguez.jpg"
    )
]

# API Routes
@app.get("/")
async def root():
    return {"message": "Prime Care Solutions API", "version": "1.0.0"}

@app.get("/services", response_model=List[Service])
async def get_services():
    return services

@app.get("/services/{service_id}", response_model=Service)
async def get_service(service_id: int):
    service = next((s for s in services if s.id == service_id), None)
    if not service:
        raise HTTPException(status_code=404, detail="Service not found")
    return service

@app.get("/services/category/{category}", response_model=List[Service])
async def get_services_by_category(category: str):
    filtered_services = [s for s in services if s.category == category]
    return filtered_services

@app.get("/team", response_model=List[TeamMember])
async def get_team():
    return team_members

@app.post("/contact")
async def submit_contact_request(request: ContactRequest):
    # In a real application, you would save this to a database
    # For now, we'll just return a success message
    return {
        "message": "Thank you for your inquiry! We'll get back to you within 24 hours.",
        "request_id": f"REQ-{hash(request.email) % 10000:04d}"
    }

@app.get("/about")
async def get_about_info():
    return {
        "company_name": "Prime Care Solutions",
        "mission": "Providing compassionate, professional home-based care for elderly individuals",
        "founded": "2015",
        "locations": ["Brooklyn, Cape Town", "Palm Springs", "Cape Town Area"],
        "certifications": ["Licensed Home Care Agency", "Medicare Certified", "Joint Commission Accredited"],
                "contact": {
                    "phone": "+27 81 002 9293",
                    "emergency": "+27 84 862 0584",
                    "email": "blessings154@gmail.com",
                    "address": "Palm Springs, 2A Wemyss St, Brooklyn, Cape Town, 7405"
                }
    }

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
