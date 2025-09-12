import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Service } from '../../models/service.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="hero-text fade-in">
                <h1 class="hero-title">
                  Compassionate Care for Your Loved Ones
                </h1>
                <p class="hero-description">
                  Prime Care Solutions provides professional, personalized home care services 
                  for elderly individuals. We ensure your loved ones receive the highest quality 
                  care in the comfort of their own home.
                </p>
                <div class="hero-buttons">
                  <a routerLink="/services" class="btn btn-primary">
                    <i class="fas fa-concierge-bell"></i> Our Services
                  </a>
                  <a routerLink="/contact" class="btn btn-outline">
                    <i class="fas fa-phone"></i> Get Started
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="hero-image slide-in-right">
                <div class="image-placeholder">
                  <i class="fas fa-heart"></i>
                  <p>Professional Care at Home</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Preview -->
    <section class="services-preview py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="section-title">Our Care Services</h2>
          <p class="section-description">
            Comprehensive home care services designed to meet all your loved one's needs
          </p>
        </div>
        
        <div class="row" *ngIf="services.length > 0">
          <div class="col-md-4" *ngFor="let service of services.slice(0, 6)">
            <div class="service-card card">
              <div class="service-icon">
                <i [class]="getServiceIcon(service.icon)"></i>
              </div>
              <h4 class="service-title">{{ service.name }}</h4>
              <p class="service-description">{{ service.description }}</p>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-4">
          <a routerLink="/services" class="btn btn-primary">
            <i class="fas fa-arrow-right"></i> View All Services
          </a>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="why-choose-us py-5" style="background-color: #f8f9fa;">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="section-title">Why Choose Prime Care Solutions?</h2>
          <p class="section-description">
            We are committed to providing exceptional care with compassion and professionalism
          </p>
        </div>
        
        <div class="row">
          <div class="col-md-4">
            <div class="feature-card text-center">
              <div class="feature-icon">
                <i class="fas fa-user-md"></i>
              </div>
              <h4>Licensed Professionals</h4>
              <p>All our caregivers are licensed, certified, and undergo rigorous background checks</p>
            </div>
          </div>
          
          <div class="col-md-4">
            <div class="feature-card text-center">
              <div class="feature-icon">
                <i class="fas fa-clock"></i>
              </div>
              <h4>24/7 Availability</h4>
              <p>Round-the-clock care and emergency support whenever you need it</p>
            </div>
          </div>
          
          <div class="col-md-4">
            <div class="feature-card text-center">
              <div class="feature-icon">
                <i class="fas fa-home"></i>
              </div>
              <h4>Comfort of Home</h4>
              <p>Receive professional care in the familiar and comfortable environment of home</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta py-5" style="background-color: #2c5aa0; color: white;">
      <div class="container">
        <div class="text-center">
          <h2 class="cta-title">Ready to Get Started?</h2>
          <p class="cta-description">
            Contact us today for a free consultation and learn how we can help your family
          </p>
          <div class="cta-buttons">
            <a routerLink="/contact" class="btn" style="background: white; color: #2c5aa0;">
              <i class="fas fa-phone"></i> Contact Us
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
    .hero {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 6rem 0;
      position: relative;
      overflow: hidden;
    }

    .hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" fill="white" opacity="0.1"><polygon points="0,100 1000,0 1000,100"/></svg>');
      background-size: cover;
    }

    .hero-content {
      position: relative;
      z-index: 1;
    }

    .hero-title {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      line-height: 1.2;
    }

    .hero-description {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      opacity: 0.9;
      line-height: 1.6;
    }

    .hero-buttons {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .hero-image {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .image-placeholder {
      background: rgba(255, 255, 255, 0.1);
      border: 2px dashed rgba(255, 255, 255, 0.3);
      border-radius: 20px;
      padding: 4rem 2rem;
      text-align: center;
      backdrop-filter: blur(10px);
    }

    .image-placeholder i {
      font-size: 4rem;
      margin-bottom: 1rem;
      opacity: 0.8;
    }

    .image-placeholder p {
      font-size: 1.2rem;
      margin: 0;
      opacity: 0.8;
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

    .service-card {
      text-align: center;
      height: 100%;
      transition: all 0.3s ease;
    }

    .service-icon {
      width: 80px;
      height: 80px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1.5rem;
    }

    .service-icon i {
      font-size: 2rem;
      color: white;
    }

    .service-title {
      font-size: 1.3rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: #333;
    }

    .service-description {
      color: #6c757d;
      line-height: 1.6;
    }

    .feature-card {
      padding: 2rem;
    }

    .feature-icon {
      width: 100px;
      height: 100px;
      background: #2c5aa0;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1.5rem;
    }

    .feature-icon i {
      font-size: 2.5rem;
      color: white;
    }

    .feature-card h4 {
      font-size: 1.4rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: #333;
    }

    .feature-card p {
      color: #6c757d;
      line-height: 1.6;
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
      .hero-title {
        font-size: 2.2rem;
      }

      .hero-description {
        font-size: 1.1rem;
      }

      .section-title {
        font-size: 2rem;
      }

      .hero-buttons,
      .cta-buttons {
        flex-direction: column;
        align-items: center;
      }

      .hero-buttons .btn,
      .cta-buttons .btn {
        width: 100%;
        max-width: 300px;
      }
    }
  `]
})
export class HomeComponent implements OnInit {
  services: Service[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadServices();
  }

  loadServices() {
    this.apiService.getServices().subscribe({
      next: (services) => {
        this.services = services;
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
          }
        ];
      }
    });
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
}
