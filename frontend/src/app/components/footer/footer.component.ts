import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="footer-section">
              <h4 class="footer-title">
                <i class="fas fa-heart text-primary"></i>
                Prime Care Solutions
              </h4>
              <p class="footer-description">
                Providing compassionate, professional home-based care for elderly individuals. 
                Your loved ones deserve the best care in the comfort of their own home.
              </p>
              <div class="social-links">
                <a href="https://www.facebook.com/blessing.sithole.10" class="social-link"><i class="fab fa-facebook"></i></a>
                <a href="https://x.com/Blessin49066337" class="social-link"><i class="fab fa-twitter"></i></a>
                <a href="https://www.linkedin.com/in/blessing-sithole-91566960/" class="social-link"><i class="fab fa-linkedin"></i></a>
                <a href="https://www.instagram.com/blessing_2910/" class="social-link"><i class="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
          
          <div class="col-md-4">
            <div class="footer-section">
              <h5 class="footer-subtitle">Quick Links</h5>
              <ul class="footer-links">
                <li><a routerLink="/" class="footer-link">Home</a></li>
                <li><a routerLink="/services" class="footer-link">Our Services</a></li>
                <li><a routerLink="/about" class="footer-link">About Us</a></li>
                <li><a routerLink="/contact" class="footer-link">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div class="col-md-4">
            <div class="footer-section">
              <h5 class="footer-subtitle">Contact Info</h5>
              <div class="contact-info">
                <div class="contact-item">
                  <i class="fas fa-phone"></i>
                  <span>+27 81 002 9293</span>
                  <a href="https://wa.me/27810029293" class="whatsapp-link" target="_blank">
                    <i class="fab fa-whatsapp"></i>
                  </a>
                </div>
                <div class="contact-item">
                  <i class="fas fa-envelope"></i>
                  <span>blessings154&#64;gmail.com</span>
                </div>
                <div class="contact-item">
                  <i class="fas fa-map-marker-alt"></i>
                  <span>Palm Springs, 2A Wemyss St, Brooklyn, Cape Town, 7405</span>
                </div>
                <div class="contact-item">
                  <i class="fas fa-clock"></i>
                  <span>24/7 Emergency Care Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <div class="row">
            <div class="col">
              <p class="copyright">
                &copy; 2024 Prime Care Solutions. All rights reserved.
              </p>
            </div>
            <div class="col text-right">
              <div class="footer-legal">
                <a href="#" class="legal-link">Privacy Policy</a>
                <a href="#" class="legal-link">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: #2c3e50;
      color: white;
      padding: 3rem 0 1rem;
      margin-top: auto;
    }

    .footer-section {
      margin-bottom: 2rem;
    }

    .footer-title {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
      font-size: 1.5rem;
      font-weight: 700;
    }

    .footer-title i {
      margin-right: 0.5rem;
      font-size: 1.8rem;
    }

    .footer-description {
      color: #bdc3c7;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .footer-subtitle {
      color: #ecf0f1;
      margin-bottom: 1rem;
      font-weight: 600;
    }

    .footer-links {
      list-style: none;
      padding: 0;
    }

    .footer-links li {
      margin-bottom: 0.5rem;
    }

    .footer-link {
      color: #bdc3c7;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .footer-link:hover {
      color: #3498db;
    }

    .social-links {
      display: flex;
      gap: 1rem;
    }

    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background: #34495e;
      color: white;
      text-decoration: none;
      border-radius: 50%;
      transition: all 0.3s ease;
    }

    .social-link:hover {
      background: #3498db;
      transform: translateY(-2px);
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .contact-item {
      display: flex;
      align-items: center;
      color: #bdc3c7;
      margin-bottom: 0.75rem;
    }

    .contact-item i {
      margin-right: 0.75rem;
      width: 20px;
      color: #3498db;
    }

    .whatsapp-link {
      color: #25D366;
      margin-left: 0.5rem;
      text-decoration: none;
      
      &:hover {
        color: #128C7E;
      }
      
      i {
        margin-right: 0;
        width: auto;
      }
    }

    .footer-bottom {
      border-top: 1px solid #34495e;
      padding-top: 1.5rem;
      margin-top: 2rem;
    }

    .copyright {
      color: #bdc3c7;
      margin: 0;
    }

    .footer-legal {
      display: flex;
      gap: 1.5rem;
    }

    .legal-link {
      color: #bdc3c7;
      text-decoration: none;
      font-size: 0.9rem;
      transition: color 0.3s ease;
    }

    .legal-link:hover {
      color: #3498db;
    }

    @media (max-width: 768px) {
      .footer .row {
        flex-direction: column;
      }

      .footer-bottom .row {
        flex-direction: column;
        text-align: center;
      }

      .footer-legal {
        justify-content: center;
        margin-top: 1rem;
      }
    }
  `]
})
export class FooterComponent {
}
