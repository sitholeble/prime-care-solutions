import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Service } from '../../models/service.model';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <div class="text-center">
          <h1 class="page-title">Our Care Services</h1>
          <p class="page-description">
            Comprehensive home care services designed to meet all your loved one's needs
          </p>
        </div>
      </div>
    </section>

    <!-- Service Categories -->
    <section class="service-categories py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="section-title">Service Categories</h2>
          <p class="section-description">
            Our services are organized into specialized categories to ensure comprehensive care
          </p>
        </div>
        
        <div class="category-tabs">
          <button 
            *ngFor="let category of categories" 
            class="category-tab"
            [class.active]="selectedCategory === category.key"
            (click)="filterByCategory(category.key)">
            <i [class]="category.icon"></i>
            {{ category.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="services-grid py-5" style="background-color: #f8f9fa;">
      <div class="container">
        <div class="row" *ngIf="filteredServices.length > 0">
          <div class="col-md-6 col-lg-4" *ngFor="let service of filteredServices">
            <div class="service-card card">
              <div class="service-header">
                <div class="service-icon">
                  <i [class]="getServiceIcon(service.icon)"></i>
                </div>
                <div class="service-category-badge">
                  {{ getCategoryName(service.category) }}
                </div>
              </div>
              
              <div class="service-content">
                <h3 class="service-title">{{ service.name }}</h3>
                <p class="service-description">{{ service.description }}</p>
                
                <div class="service-features">
                  <div class="feature-item" *ngFor="let feature of getServiceFeatures(service.name)">
                    <i class="fas fa-check"></i>
                    <span>{{ feature }}</span>
                  </div>
                </div>
              </div>
              
              <div class="service-footer">
                <a routerLink="/contact" class="btn btn-primary">
                  <i class="fas fa-phone"></i> Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div class="no-services" *ngIf="filteredServices.length === 0">
          <div class="text-center">
            <i class="fas fa-search" style="font-size: 3rem; color: #6c757d; margin-bottom: 1rem;"></i>
            <h3>No services found</h3>
            <p>Try selecting a different category or contact us for more information.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta py-5" style="background-color: #2c5aa0; color: white;">
      <div class="container">
        <div class="text-center">
          <h2 class="cta-title">Need Help Choosing the Right Services?</h2>
          <p class="cta-description">
            Our care coordinators are here to help you create a personalized care plan
          </p>
          <div class="cta-buttons">
            <a routerLink="/contact" class="btn" style="background: white; color: #2c5aa0;">
              <i class="fas fa-phone"></i> Get Free Consultation
            </a>
            <a href="https://wa.me/27810029293" class="btn btn-outline" style="border-color: #25D366; color: #25D366;" target="_blank">
              <i class="fab fa-whatsapp"></i> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .page-header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 4rem 0;
    }

    .page-title {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    .page-description {
      font-size: 1.2rem;
      opacity: 0.9;
      max-width: 600px;
      margin: 0 auto;
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: #333;
    }

    .section-description {
      font-size: 1.1rem;
      color: #6c757d;
      max-width: 600px;
      margin: 0 auto;
    }

    .category-tabs {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1rem;
      margin-bottom: 3rem;
    }

    .category-tab {
      display: flex;
      align-items: center;
      padding: 1rem 2rem;
      background: white;
      border: 2px solid #e9ecef;
      border-radius: 50px;
      cursor: pointer;
      transition: all 0.3s ease;
      font-weight: 500;
      color: #6c757d;
    }

    .category-tab i {
      margin-right: 0.5rem;
      font-size: 1.2rem;
    }

    .category-tab:hover {
      border-color: #2c5aa0;
      color: #2c5aa0;
      transform: translateY(-2px);
    }

    .category-tab.active {
      background: #2c5aa0;
      border-color: #2c5aa0;
      color: white;
    }

    .service-card {
      height: 100%;
      display: flex;
      flex-direction: column;
      transition: all 0.3s ease;
    }

    .service-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 1.5rem;
    }

    .service-icon {
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .service-icon i {
      font-size: 1.5rem;
      color: white;
    }

    .service-category-badge {
      background: #e3f2fd;
      color: #1976d2;
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 500;
      text-transform: uppercase;
    }

    .service-content {
      flex: 1;
      margin-bottom: 1.5rem;
    }

    .service-title {
      font-size: 1.4rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: #333;
    }

    .service-description {
      color: #6c757d;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .service-features {
      margin-bottom: 1rem;
    }

    .feature-item {
      display: flex;
      align-items: center;
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
      color: #555;
    }

    .feature-item i {
      color: #28a745;
      margin-right: 0.5rem;
      font-size: 0.8rem;
    }

    .service-footer {
      margin-top: auto;
    }

    .no-services {
      padding: 4rem 0;
    }

    .cta-title {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    .cta-description {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      opacity: 0.9;
    }

    .cta-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    @media (max-width: 768px) {
      .page-title {
        font-size: 2.2rem;
      }

      .section-title {
        font-size: 2rem;
      }

      .category-tabs {
        flex-direction: column;
        align-items: center;
      }

      .category-tab {
        width: 100%;
        max-width: 300px;
        justify-content: center;
      }

      .cta-buttons {
        flex-direction: column;
        align-items: center;
      }

      .cta-buttons .btn {
        width: 100%;
        max-width: 300px;
      }
    }
  `]
})
export class ServicesComponent implements OnInit {
  services: Service[] = [];
  filteredServices: Service[] = [];
  selectedCategory: string = 'all';

  categories = [
    { key: 'all', name: 'All Services', icon: 'fas fa-th-large' },
    { key: 'medical', name: 'Medical Care', icon: 'fas fa-user-md' },
    { key: 'personal_care', name: 'Personal Care', icon: 'fas fa-shower' },
    { key: 'education', name: 'Education & Training', icon: 'fas fa-graduation-cap' },
    { key: 'emotional', name: 'Emotional Support', icon: 'fas fa-heart' }
  ];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadServices();
  }

  loadServices() {
    this.apiService.getServices().subscribe({
      next: (services) => {
        this.services = services;
        this.filteredServices = services;
      },
      error: (error) => {
        console.error('Error loading services:', error);
        // Fallback to static data if API fails
        this.services = [
          {
            id: 1,
            name: "Home Care Management",
            description: "Traveling to patients' homes and managing their care plans according to physicians' instructions.",
            icon: "home-care",
            features: [],
            category: "medical"
          },
          {
            id: 2,
            name: "Medication & Testing Services",
            description: "Administering medication and insulin, and completing blood pressure, glucose, urine, and stool tests.",
            icon: "medication",
            features: [],
            category: "medical"
          },
          {
            id: 3,
            name: "Wound Care & Personal Hygiene",
            description: "Inspecting wounds, changing dressings, and handling personal grooming and hygiene.",
            icon: "wound-care",
            features: [],
            category: "personal_care"
          },
          {
            id: 4,
            name: "Health Assessment & Monitoring",
            description: "Testing for muscle weakness, bedsores, and any signs of infection.",
            icon: "assessment",
            features: [],
            category: "medical"
          },
          {
            id: 5,
            name: "Family Support & Communication",
            description: "Listening to the concerns of family members and answering their questions.",
            icon: "family-support",
            features: [],
            category: "emotional"
          },
          {
            id: 6,
            name: "Caregiver Education",
            description: "Educating caregivers and family on the aftercare or ongoing care of the patient.",
            icon: "education",
            features: [],
            category: "education"
          },
          {
            id: 7,
            name: "Healthcare Consultation",
            description: "Providing suggestions for improved healthcare to physicians and family members of the patient.",
            icon: "consultation",
            features: [],
            category: "medical"
          },
          {
            id: 8,
            name: "Recovery Monitoring & Reporting",
            description: "Monitoring patient recovery and compiling reports for the physician.",
            icon: "monitoring",
            features: [],
            category: "medical"
          },
          {
            id: 9,
            name: "Professional Development",
            description: "Keeping abreast of developments in healthcare and attending workshops and lectures as required.",
            icon: "professional-dev",
            features: [],
            category: "education"
          },
          {
            id: 10,
            name: "Collaborative Care Planning",
            description: "Collaborating with doctors and other healthcare professionals to develop improved diets and healthcare plans for patients.",
            icon: "collaboration",
            features: [],
            category: "medical"
          }
        ];
        this.filteredServices = this.services;
      }
    });
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    if (category === 'all') {
      this.filteredServices = this.services;
    } else {
      this.filteredServices = this.services.filter(service => service.category === category);
    }
  }

  getServiceIcon(iconName: string): string {
    const iconMap: { [key: string]: string } = {
      'home-care': 'fas fa-home',
      'medication': 'fas fa-pills',
      'wound-care': 'fas fa-band-aid',
      'assessment': 'fas fa-stethoscope',
      'family-support': 'fas fa-users',
      'education': 'fas fa-graduation-cap',
      'consultation': 'fas fa-comments',
      'monitoring': 'fas fa-chart-line',
      'professional-dev': 'fas fa-book-open',
      'collaboration': 'fas fa-handshake'
    };
    return iconMap[iconName] || 'fas fa-heart';
  }

  getCategoryName(category: string | undefined): string {
    if (!category) return 'General';
    
    const categoryMap: { [key: string]: string } = {
      'medical': 'Medical',
      'personal_care': 'Personal Care',
      'education': 'Education & Training',
      'emotional': 'Emotional'
    };
    return categoryMap[category] || 'General';
  }

  getServiceFeatures(serviceName: string): string[] {
    const featuresMap: { [key: string]: string[] } = {
      'Home Care Management': [
        'Physician-directed care plans',
        'Home visits and assessments',
        'Care coordination',
        'Treatment plan management'
      ],
      'Medication & Testing Services': [
        'Medication administration',
        'Insulin management',
        'Blood pressure monitoring',
        'Glucose and lab testing'
      ],
      'Wound Care & Personal Hygiene': [
        'Wound inspection and care',
        'Dressing changes',
        'Personal grooming assistance',
        'Hygiene maintenance'
      ],
      'Health Assessment & Monitoring': [
        'Muscle weakness testing',
        'Bedsore prevention',
        'Infection screening',
        'Vital signs monitoring'
      ],
      'Family Support & Communication': [
        'Family consultation',
        'Question and answer sessions',
        'Care updates',
        'Emotional support'
      ],
      'Caregiver Education': [
        'Aftercare training',
        'Ongoing care education',
        'Family instruction',
        'Best practices guidance'
      ],
      'Healthcare Consultation': [
        'Treatment recommendations',
        'Physician collaboration',
        'Family healthcare advice',
        'Care improvement suggestions'
      ],
      'Recovery Monitoring & Reporting': [
        'Progress tracking',
        'Physician reports',
        'Recovery documentation',
        'Outcome monitoring'
      ],
      'Professional Development': [
        'Healthcare workshops',
        'Continuing education',
        'Industry updates',
        'Skill enhancement'
      ],
      'Collaborative Care Planning': [
        'Multi-disciplinary planning',
        'Diet optimization',
        'Healthcare plan development',
        'Professional collaboration'
      ]
    };
    return featuresMap[serviceName] || [];
  }
}
