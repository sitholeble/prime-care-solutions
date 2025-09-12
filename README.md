# Prime Care Solutions - Elderly Home Care Website

A comprehensive web application for elderly home-based care services built with FastAPI (backend) and Angular (frontend).

## Features

### Services Offered
- **Medical Care**: Medication administration, physical therapy, and exercises
- **Personal Care**: Bed bath, grooming, and hygiene assistance
- **Daily Living**: Grocery shopping, meal preparation, and feeding
- **Emotional Support**: Companionship and mental health support

### Website Sections
- **Home**: Hero section with service overview and company highlights
- **Services**: Detailed service listings with categories and features
- **About Us**: Company information, team members, and mission
- **Contact**: Contact form and company information

## Technology Stack

### Backend (FastAPI)
- FastAPI for REST API
- Pydantic for data validation
- CORS middleware for frontend integration
- Sample data and endpoints for all services

### Frontend (Angular)
- Angular 17 with standalone components
- TypeScript for type safety
- SCSS for styling
- Responsive design with mobile-first approach
- Font Awesome icons
- Modern UI with gradients and animations

## Project Structure

```
prime-care-solutions/
├── backend/
│   ├── main.py              # FastAPI application
│   ├── requirements.txt     # Python dependencies
│   └── README.md           # Backend documentation
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/  # Angular components
│   │   │   ├── models/      # TypeScript interfaces
│   │   │   ├── services/    # API service
│   │   │   └── ...
│   │   ├── styles.scss      # Global styles
│   │   └── ...
│   ├── package.json         # Node.js dependencies
│   └── angular.json         # Angular configuration
└── README.md               # This file
```

## Getting Started

### Prerequisites
- Python 3.8+ (for backend)
- Node.js 18+ (for frontend)
- npm or yarn (for frontend dependencies)

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Run the FastAPI server:
```bash
python main.py
```

The API will be available at `http://localhost:8000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the Angular development server:
```bash
npm start
```

The application will be available at `http://localhost:4200`

## API Endpoints

- `GET /` - API information
- `GET /services` - Get all services
- `GET /services/{id}` - Get specific service
- `GET /services/category/{category}` - Get services by category
- `GET /team` - Get team members
- `POST /contact` - Submit contact form
- `GET /about` - Get company information

## Features Overview

### Responsive Design
- Mobile-first approach
- Responsive grid system
- Touch-friendly navigation
- Optimized for all screen sizes

### Modern UI/UX
- Clean, professional design
- Smooth animations and transitions
- Intuitive navigation
- Accessible color scheme

### Service Categories
- Medical Care
- Personal Care
- Daily Living Support
- Emotional Support

### Contact System
- Contact form with validation
- Service interest selection
- Real-time form feedback
- Emergency contact information

## Development

### Backend Development
- FastAPI with automatic API documentation
- Pydantic models for data validation
- CORS enabled for frontend integration
- Sample data for development

### Frontend Development
- Angular standalone components
- TypeScript for type safety
- SCSS for styling
- Reactive forms with validation
- HTTP client for API communication

## Deployment

### Backend Deployment
1. Install production dependencies
2. Configure environment variables
3. Use a production ASGI server like Gunicorn
4. Set up reverse proxy (nginx)

### Frontend Deployment
1. Build the production version: `npm run build`
2. Deploy the `dist/` folder to a web server
3. Configure API endpoints for production

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please contact:
- Email: info@primecaresolutions.com
- Phone: (555) 123-4567
