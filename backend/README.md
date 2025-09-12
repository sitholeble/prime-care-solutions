# Prime Care Solutions - Backend API

This is the FastAPI backend for the Prime Care Solutions elderly home care website.

## Setup

1. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Run the development server:
```bash
python main.py
```

The API will be available at `http://localhost:8000`

## API Documentation

Once the server is running, visit:
- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

## Endpoints

- `GET /` - API information
- `GET /services` - Get all services
- `GET /services/{id}` - Get specific service
- `GET /services/category/{category}` - Get services by category
- `GET /team` - Get team members
- `POST /contact` - Submit contact form
- `GET /about` - Get company information
