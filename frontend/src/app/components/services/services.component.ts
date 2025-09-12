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
            <a href="tel:+27810029293" class="btn btn-outline" style="border-color: white; color: white;">
              <i class="fas fa-phone-alt"></i> Call Now
            </a>
            <a href="https://wa.me/27810029293" class="btn btn-outline" style="border-color: #25D366; color: #25D366;" target="_blank">
              <i class="fab fa-whatsapp"></i> WhatsApp
            </a>
            <a href="https://meet.google.com/new" class="btn btn-outline" style="border-color: white; color: white;" target="_blank">
              <i class="fab fa-google"></i> Video Call
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
    { key: 'daily_living', name: 'Daily Living', icon: 'fas fa-home' },
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
            name: "Personal Care",
            description: "Assistance with daily activities like bathing, dressing, and grooming",
            icon: "fas fa-user-nurse",
            features: [
              "Bathing and hygiene assistance",
              "Dressing and grooming help",
              "Mobility assistance",
              "Medication reminders"
            ],
            category: "personal"
          },
          {
            id: 2,
            name: "Companion Care",
            description: "Social interaction and emotional support for your loved ones",
            icon: "fas fa-heart",
            features: [
              "Conversation and companionship",
              "Reading and entertainment",
              "Accompanying to appointments",
              "Meal preparation and planning"
            ],
            category: "companion"
          },
          {
            id: 3,
            name: "Home Health Care",
            description: "Medical care provided in the comfort of your home",
            icon: "fas fa-stethoscope",
            features: [
              "Skilled nursing care",
              "Physical therapy",
              "Occupational therapy",
              "Medical equipment management"
            ],
            category: "medical"
          },
          {
            id: 4,
            name: "Respite Care",
            description: "Temporary care to give family caregivers a break",
            icon: "fas fa-clock",
            features: [
              "Short-term care relief",
              "Emergency backup care",
              "Holiday and vacation coverage",
              "Flexible scheduling"
            ],
            category: "respite"
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
      'medication': 'fas fa-pills',
      'bath': 'fas fa-shower',
      'fitness': 'fas fa-dumbbell',
      'shopping': 'fas fa-shopping-cart',
      'meal': 'fas fa-utensils',
      'support': 'fas fa-hands-helping'
    };
    return iconMap[iconName] || 'fas fa-heart';
  }

  getCategoryName(category: string): string {
    const categoryMap: { [key: string]: string } = {
      'medical': 'Medical',
      'personal_care': 'Personal Care',
      'daily_living': 'Daily Living',
      'emotional': 'Emotional'
    };
    return categoryMap[category] || category;
  }

  getServiceFeatures(serviceName: string): string[] {
    const featuresMap: { [key: string]: string[] } = {
      'Medication Administration': [
        'Professional administration',
        'Medication monitoring',
        'Documentation tracking',
        'Family communication'
      ],
      'Bed Bath & Personal Care': [
        'Gentle bathing assistance',
        'Grooming and hygiene',
        'Dressing assistance',
        'Skin care monitoring'
      ],
      'Physical Therapy & Exercises': [
        'Customized exercise plans',
        'Mobility assistance',
        'Fall prevention',
        'Strength building'
      ],
      'Grocery Shopping & Errands': [
        'Grocery shopping',
        'Prescription pickup',
        'Appointment transportation',
        'General errands'
      ],
      'Meal Preparation & Feeding': [
        'Nutritious meal planning',
        'Dietary restrictions',
        'Feeding assistance',
        'Hydration monitoring'
      ],
      'Emotional Support & Companionship': [
        'Companionship',
        'Mental health support',
        'Social interaction',
        'Family communication'
      ]
    };
    return featuresMap[serviceName] || [];
  }
}
