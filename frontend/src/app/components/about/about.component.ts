import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { TeamMember, AboutInfo } from '../../models/service.model';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <div class="text-center">
          <h1 class="page-title">About Prime Care Solutions</h1>
          <p class="page-description">
            Dedicated to providing compassionate, professional home care for elderly individuals
          </p>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="mission-section py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="mission-content">
              <h2 class="section-title">Our Mission</h2>
              <p class="mission-text" *ngIf="aboutInfo">
                {{ aboutInfo.mission }}
              </p>
              <p class="mission-description">
                We believe that every elderly individual deserves to age with dignity, comfort, 
                and independence in their own home. Our team of dedicated professionals works 
                tirelessly to ensure that your loved ones receive the highest quality care 
                while maintaining their quality of life.
              </p>
              
              <div class="mission-values">
                <div class="value-item">
                  <i class="fas fa-heart"></i>
                  <div class="value-content">
                    <h4>Compassion</h4>
                    <p>We treat every client with empathy, respect, and genuine care</p>
                  </div>
                </div>
                
                <div class="value-item">
                  <i class="fas fa-award"></i>
                  <div class="value-content">
                    <h4>Excellence</h4>
                    <p>We maintain the highest standards of professional care and service</p>
                  </div>
                </div>
                
                <div class="value-item">
                  <i class="fas fa-handshake"></i>
                  <div class="value-content">
                    <h4>Trust</h4>
                    <p>We build lasting relationships based on reliability and transparency</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-md-6">
            <div class="mission-image">
              <div class="image-placeholder">
                <i class="fas fa-users"></i>
                <p>Compassionate Care Team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Info -->
    <section class="company-info py-5" style="background-color: #f8f9fa;">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="section-title">Company Information</h2>
          <p class="section-description">
            Learn more about our company history, certifications, and commitment to quality care
          </p>
        </div>
        
        <div class="row" *ngIf="aboutInfo">
          <div class="col-md-4">
            <div class="info-card text-center">
              <div class="info-icon">
                <i class="fas fa-calendar-alt"></i>
              </div>
              <h4>Founded</h4>
              <p class="info-value">{{ aboutInfo.founded }}</p>
              <p class="info-description">Years of dedicated service to our community</p>
            </div>
          </div>
          
          <div class="col-md-4">
            <div class="info-card text-center">
              <div class="info-icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <h4>Service Areas</h4>
              <p class="info-value">{{ aboutInfo.locations.length }}+</p>
              <p class="info-description">Locations across the region</p>
            </div>
          </div>
          
          <div class="col-md-4">
            <div class="info-card text-center">
              <div class="info-icon">
                <i class="fas fa-certificate"></i>
              </div>
              <h4>Certifications</h4>
              <p class="info-value">{{ aboutInfo.certifications.length }}</p>
              <p class="info-description">Professional certifications and accreditations</p>
            </div>
          </div>
        </div>
        
        <div class="certifications" *ngIf="aboutInfo">
          <h3 class="certifications-title">Our Certifications</h3>
          <div class="certifications-list">
            <div class="certification-item" *ngFor="let cert of aboutInfo.certifications">
              <i class="fas fa-check-circle"></i>
              <span>{{ cert }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="team-section py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="section-title">Meet Our Team</h2>
          <p class="section-description">
            Our experienced professionals are dedicated to providing exceptional care
          </p>
        </div>
        
        <div class="row" *ngIf="teamMembers.length > 0">
          <div class="col-md-4" *ngFor="let member of teamMembers">
            <div class="team-card card text-center">
              <div class="team-image">
                <div class="image-placeholder">
                  <i class="fas fa-user-md"></i>
                </div>
              </div>
              <div class="team-content">
                <h4 class="team-name">{{ member.name }}</h4>
                <p class="team-position">{{ member.position }}</p>
                <p class="team-bio">{{ member.bio }}</p>
              </div>
            </div>
          </div>
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
          <div class="col-md-6 col-lg-3">
            <div class="feature-card text-center">
              <div class="feature-icon">
                <i class="fas fa-user-shield"></i>
              </div>
              <h4>Licensed & Insured</h4>
              <p>All our caregivers are fully licensed, bonded, and insured for your peace of mind</p>
            </div>
          </div>
          
          <div class="col-md-6 col-lg-3">
            <div class="feature-card text-center">
              <div class="feature-icon">
                <i class="fas fa-clock"></i>
              </div>
              <h4>24/7 Support</h4>
              <p>Round-the-clock care and emergency support whenever you need it</p>
            </div>
          </div>
          
          <div class="col-md-6 col-lg-3">
            <div class="feature-card text-center">
              <div class="feature-icon">
                <i class="fas fa-home"></i>
              </div>
              <h4>Home Comfort</h4>
              <p>Receive professional care in the familiar environment of your own home</p>
            </div>
          </div>
          
          <div class="col-md-6 col-lg-3">
            <div class="feature-card text-center">
              <div class="feature-icon">
                <i class="fas fa-users"></i>
              </div>
              <h4>Family Focused</h4>
              <p>We work closely with families to ensure the best care for their loved ones</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta py-5" style="background-color: #2c5aa0; color: white;">
      <div class="container">
        <div class="text-center">
          <h2 class="cta-title">Ready to Learn More?</h2>
          <p class="cta-description">
            Contact us today for a free consultation and discover how we can help your family
          </p>
          <div class="cta-buttons">
            <a href="/contact" class="btn" style="background: white; color: #2c5aa0;">
              <i class="fas fa-phone"></i> Contact Us
            </a>
            <a href="/services" class="btn btn-outline" style="border-color: white; color: white;">
              <i class="fas fa-concierge-bell"></i> Our Services
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

    .mission-text {
      font-size: 1.3rem;
      font-weight: 500;
      color: #2c5aa0;
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }

    .mission-description {
      font-size: 1.1rem;
      color: #555;
      line-height: 1.7;
      margin-bottom: 2rem;
    }

    .mission-values {
      margin-top: 2rem;
    }

    .value-item {
      display: flex;
      align-items: flex-start;
      margin-bottom: 2rem;
    }

    .value-item i {
      width: 50px;
      height: 50px;
      background: #2c5aa0;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 1rem;
      flex-shrink: 0;
      font-size: 1.2rem;
    }

    .value-content h4 {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: #333;
    }

    .value-content p {
      color: #6c757d;
      line-height: 1.6;
    }

    .mission-image {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .image-placeholder {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-radius: 20px;
      padding: 4rem 2rem;
      text-align: center;
      width: 100%;
      max-width: 400px;
    }

    .image-placeholder i {
      font-size: 4rem;
      margin-bottom: 1rem;
    }

    .image-placeholder p {
      font-size: 1.2rem;
      margin: 0;
    }

    .info-card {
      padding: 2rem;
      height: 100%;
    }

    .info-icon {
      width: 80px;
      height: 80px;
      background: #2c5aa0;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1.5rem;
    }

    .info-icon i {
      font-size: 2rem;
      color: white;
    }

    .info-card h4 {
      font-size: 1.3rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: #333;
    }

    .info-value {
      font-size: 2.5rem;
      font-weight: 700;
      color: #2c5aa0;
      margin-bottom: 0.5rem;
    }

    .info-description {
      color: #6c757d;
      font-size: 0.9rem;
    }

    .certifications {
      margin-top: 3rem;
      text-align: center;
    }

    .certifications-title {
      font-size: 1.8rem;
      font-weight: 600;
      margin-bottom: 2rem;
      color: #333;
    }

    .certifications-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
    }

    .certification-item {
      display: flex;
      align-items: center;
      background: white;
      padding: 1rem 1.5rem;
      border-radius: 25px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .certification-item i {
      color: #28a745;
      margin-right: 0.5rem;
    }

    .team-card {
      height: 100%;
      transition: transform 0.3s ease;
    }

    .team-card:hover {
      transform: translateY(-5px);
    }

    .team-image {
      margin-bottom: 1.5rem;
    }

    .team-image .image-placeholder {
      width: 120px;
      height: 120px;
      background: #f8f9fa;
      border: 3px solid #e9ecef;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
    }

    .team-image i {
      font-size: 3rem;
      color: #6c757d;
    }

    .team-name {
      font-size: 1.3rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: #333;
    }

    .team-position {
      color: #2c5aa0;
      font-weight: 500;
      margin-bottom: 1rem;
    }

    .team-bio {
      color: #6c757d;
      line-height: 1.6;
    }

    .feature-card {
      padding: 2rem 1rem;
    }

    .feature-icon {
      width: 80px;
      height: 80px;
      background: #2c5aa0;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1.5rem;
    }

    .feature-icon i {
      font-size: 2rem;
      color: white;
    }

    .feature-card h4 {
      font-size: 1.2rem;
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
      .page-title {
        font-size: 2.2rem;
      }

      .section-title {
        font-size: 2rem;
      }

      .mission-text {
        font-size: 1.1rem;
      }

      .value-item {
        flex-direction: column;
        text-align: center;
      }

      .value-item i {
        margin-right: 0;
        margin-bottom: 1rem;
      }

      .certifications-list {
        flex-direction: column;
        align-items: center;
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
export class AboutComponent implements OnInit {
  aboutInfo: AboutInfo | null = null;
  teamMembers: TeamMember[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadAboutInfo();
    this.loadTeamMembers();
  }

  loadAboutInfo() {
    this.apiService.getAboutInfo().subscribe({
      next: (info) => {
        this.aboutInfo = info;
      },
      error: (error) => {
        console.error('Error loading about info:', error);
      }
    });
  }

  loadTeamMembers() {
    this.apiService.getTeam().subscribe({
      next: (members) => {
        this.teamMembers = members;
      },
      error: (error) => {
        console.error('Error loading team members:', error);
      }
    });
  }
}
