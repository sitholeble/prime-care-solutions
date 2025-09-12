import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <div class="text-center">
          <h1 class="page-title">Contact Us</h1>
          <p class="page-description">
            Get in touch with us to learn more about our services or schedule a consultation
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="contact-content py-5">
      <div class="container">
        <div class="row">
          <!-- Contact Form -->
          <div class="col-md-8">
            <div class="contact-form-card card">
              <h3 class="form-title">Send us a Message</h3>
              <p class="form-description">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
              
              <!-- Success message for Formspree redirect -->
              <div class="success-message" *ngIf="isSuccess">
                <i class="fas fa-check-circle"></i>
                <p>Thank you for your message! We'll get back to you within 24 hours.</p>
              </div>
              
              <form action="https://formspree.io/f/xdkzllno" method="POST" class="contact-form">
                <!-- Hidden field to identify the source -->
                <input type="hidden" name="_subject" value="New Contact Form Submission - Prime Care Solutions">
                <input type="hidden" name="_next" value="http://localhost:4200/contact?success=true">
                <input type="hidden" name="_captcha" value="false">
                
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="name">Full Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        class="form-control" 
                        required>
                    </div>
                  </div>
                  
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="email">Email Address *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        class="form-control" 
                        required>
                    </div>
                  </div>
                </div>
                
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="phone">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        class="form-control">
                    </div>
                  </div>
                  
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="service">Service Interest</label>
                      <select 
                        id="service" 
                        name="service_interest" 
                        class="form-control">
                        <option value="">Select a service</option>
                        <option value="medication">Medication Administration</option>
                        <option value="personal_care">Personal Care</option>
                        <option value="physical_therapy">Physical Therapy</option>
                        <option value="shopping">Shopping & Errands</option>
                        <option value="meal_prep">Meal Preparation</option>
                        <option value="emotional_support">Emotional Support</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div class="form-group">
                  <label for="message">Message *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    class="form-control" 
                    rows="5" 
                    required
                    placeholder="Tell us about your care needs or any questions you have..."></textarea>
                </div>
                
                <div class="form-actions">
                  <button 
                    type="submit" 
                    class="btn btn-primary">
                    <i class="fas fa-paper-plane"></i>
                    Send Message
                  </button>
                </div>
                
              </form>
            </div>
          </div>
          
          <!-- Contact Information -->
          <div class="col-md-4">
            <div class="contact-info">
              <h3 class="info-title">Get in Touch</h3>
              <p class="info-description">
                We're here to help you and your family with all your home care needs.
              </p>
              
              <div class="contact-methods">
                <div class="contact-method">
                  <div class="method-icon">
                    <i class="fas fa-phone"></i>
                  </div>
                  <div class="method-content">
                    <h4>Phone</h4>
                    <p><a href="tel:+27810029293">+27 81 002 9293</a></p>
                    <div class="call-options">
                      <a href="tel:+27810029293" class="call-option">
                        <i class="fas fa-phone"></i> Call
                      </a>
                      <a href="https://wa.me/27810029293" class="whatsapp-link" target="_blank">
                        <i class="fab fa-whatsapp"></i> WhatsApp
                      </a>
                      <a href="facetime:+27810029293" class="call-option apple-only">
                        <i class="fab fa-apple"></i> FaceTime
                      </a>
                      <a href="https://meet.google.com/new" class="call-option" target="_blank">
                        <i class="fab fa-google"></i> Google Meet
                      </a>
                      <a href="https://zoom.us/j/your-meeting-id" class="call-option" target="_blank">
                        <i class="fas fa-video"></i> Zoom
                      </a>
                    </div>
                    <small>24/7 Emergency Line</small>
                  </div>
                </div>
                
                <div class="contact-method">
                  <div class="method-icon">
                    <i class="fas fa-envelope"></i>
                  </div>
                  <div class="method-content">
                    <h4>Email</h4>
                    <p><a href="mailto:blessings154&#64;gmail.com">blessings154&#64;gmail.com</a></p>
                    <small>We respond within 24 hours</small>
                  </div>
                </div>
                
                <div class="contact-method">
                  <div class="method-icon">
                    <i class="fas fa-map-marker-alt"></i>
                  </div>
                  <div class="method-content">
                    <h4>Address</h4>
                    <p>Palm Springs, 2A Wemyss St<br>Brooklyn, Cape Town, 7405</p>
                    <small>Visit us by appointment</small>
                  </div>
                </div>
                
                <div class="contact-method">
                  <div class="method-icon">
                    <i class="fas fa-clock"></i>
                  </div>
                  <div class="method-content">
                    <h4>Office Hours</h4>
                    <p>Monday - Friday: 8:00 AM - 6:00 PM<br>Saturday: 9:00 AM - 2:00 PM</p>
                    <small>Emergency care available 24/7</small>
                  </div>
                </div>
              </div>
              
              <div class="emergency-notice">
                <div class="notice-icon">
                  <i class="fas fa-exclamation-triangle"></i>
                </div>
                <div class="notice-content">
                  <h4>Emergency Care</h4>
                  <p>For urgent medical situations, call our 24/7 emergency line immediately.</p>
                  <a href="tel:+27848620584" class="btn btn-primary">
                    <i class="fas fa-phone"></i> Call Emergency Line
                  </a>
                </div>
              </div>
            </div>
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

    .contact-form-card {
      padding: 2.5rem;
    }

    .form-title {
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: #333;
    }

    .form-description {
      color: #6c757d;
      margin-bottom: 2rem;
    }

    .contact-form {
      margin-top: 1.5rem;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
      color: #333;
    }

    .form-control {
      width: 100%;
      padding: 12px 16px;
      border: 2px solid #e9ecef;
      border-radius: 8px;
      font-size: 16px;
      transition: border-color 0.3s ease;
    }

    .form-control:focus {
      outline: none;
      border-color: #2c5aa0;
      box-shadow: 0 0 0 3px rgba(44, 90, 160, 0.1);
    }

    .form-control.ng-invalid.ng-touched {
      border-color: #dc3545;
    }

    .error-message {
      color: #dc3545;
      font-size: 0.875rem;
      margin-top: 0.25rem;
    }

    .form-actions {
      margin-top: 2rem;
    }

    .btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .success-message,
    .error-message {
      display: flex;
      align-items: center;
      padding: 1rem;
      border-radius: 8px;
      margin-top: 1rem;
    }

    .success-message {
      background: #d4edda;
      color: #155724;
      border: 1px solid #c3e6cb;
    }

    .error-message {
      background: #f8d7da;
      color: #721c24;
      border: 1px solid #f5c6cb;
    }

    .success-message i,
    .error-message i {
      margin-right: 0.5rem;
      font-size: 1.2rem;
    }

    .contact-info {
      background: white;
      border-radius: 12px;
      padding: 2rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      height: fit-content;
    }

    .info-title {
      font-size: 1.8rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: #333;
    }

    .info-description {
      color: #6c757d;
      margin-bottom: 2rem;
    }

    .contact-methods {
      margin-bottom: 2rem;
    }

    .contact-method {
      display: flex;
      align-items: flex-start;
      margin-bottom: 2rem;
    }

    .method-icon {
      width: 50px;
      height: 50px;
      background: #2c5aa0;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 1rem;
      flex-shrink: 0;
    }

    .method-icon i {
      color: white;
      font-size: 1.2rem;
    }

    .method-content h4 {
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 0.25rem;
      color: #333;
    }

    .method-content p {
      margin-bottom: 0.25rem;
      color: #555;
    }

    .method-content a {
      color: #2c5aa0;
      text-decoration: none;
    }

    .method-content a:hover {
      text-decoration: underline;
    }

    .method-content small {
      color: #6c757d;
      font-size: 0.85rem;
    }

    .call-options {
      display: flex;
      gap: 0.5rem;
      margin-top: 0.5rem;
      flex-wrap: wrap;
    }

    .apple-only {
      display: none;
    }

    @media screen and (-webkit-min-device-pixel-ratio: 0) {
      .apple-only {
        display: inline-flex;
      }
    }

    .call-option {
      color: #2c5aa0 !important;
      font-weight: 500;
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
      text-decoration: none;
      padding: 0.4rem 0.6rem;
      border: 1px solid #2c5aa0;
      border-radius: 6px;
      font-size: 0.85rem;
      transition: all 0.3s ease;
      white-space: nowrap;
      
      &:hover {
        background: #2c5aa0;
        color: white !important;
        text-decoration: none;
        transform: translateY(-1px);
        box-shadow: 0 2px 4px rgba(44, 90, 160, 0.3);
      }
      
      i {
        font-size: 0.8rem;
      }
    }

    .whatsapp-link {
      color: #25D366 !important;
      font-weight: 500;
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
      text-decoration: none;
      padding: 0.4rem 0.6rem;
      border: 1px solid #25D366;
      border-radius: 6px;
      font-size: 0.85rem;
      transition: all 0.3s ease;
      white-space: nowrap;
      
      &:hover {
        background: #25D366;
        color: white !important;
        text-decoration: none;
        transform: translateY(-1px);
        box-shadow: 0 2px 4px rgba(37, 211, 102, 0.3);
      }
      
      i {
        font-size: 0.8rem;
      }
    }

    .emergency-notice {
      background: #fff3cd;
      border: 1px solid #ffeaa7;
      border-radius: 8px;
      padding: 1.5rem;
      display: flex;
      align-items: flex-start;
    }

    .notice-icon {
      margin-right: 1rem;
    }

    .notice-icon i {
      color: #856404;
      font-size: 1.5rem;
    }

    .notice-content h4 {
      color: #856404;
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .notice-content p {
      color: #856404;
      margin-bottom: 1rem;
      font-size: 0.9rem;
    }

    .notice-content .btn {
      font-size: 0.9rem;
      padding: 0.5rem 1rem;
    }

    @media (max-width: 768px) {
      .page-title {
        font-size: 2.2rem;
      }

      .contact-form-card {
        padding: 1.5rem;
      }

      .form-title {
        font-size: 1.5rem;
      }

      .contact-info {
        margin-top: 2rem;
        padding: 1.5rem;
      }

      .emergency-notice {
        flex-direction: column;
        text-align: center;
      }

      .notice-icon {
        margin-right: 0;
        margin-bottom: 1rem;
      }
    }
  `]
})
export class ContactComponent implements OnInit {
  isSuccess = false;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // Check if we're returning from a successful form submission
    this.route.queryParams.subscribe(params => {
      if (params['success'] === 'true') {
        this.isSuccess = true;
        // Hide success message after 5 seconds
        setTimeout(() => {
          this.isSuccess = false;
        }, 5000);
      }
    });
  }
}
