import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="header">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a routerLink="/" class="brand-link">
              <i class="fas fa-heart text-primary"></i>
              <span class="brand-text">Prime Care Solutions</span>
            </a>
          </div>
          
          <div class="navbar-toggle" (click)="toggleMenu()">
            <i class="fas fa-bars"></i>
          </div>
          
          <div class="navbar-menu" [class.active]="isMenuOpen">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" class="nav-link">
                  <i class="fas fa-home"></i> Home
                </a>
              </li>
              <li class="nav-item">
                <a routerLink="/services" routerLinkActive="active" class="nav-link">
                  <i class="fas fa-concierge-bell"></i> Services
                </a>
              </li>
              <li class="nav-item">
                <a routerLink="/about" routerLinkActive="active" class="nav-link">
                  <i class="fas fa-users"></i> About Us
                </a>
              </li>
              <li class="nav-item">
                <a routerLink="/contact" routerLinkActive="active" class="nav-link">
                  <i class="fas fa-phone"></i> Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      background: white;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      position: sticky;
      top: 0;
      z-index: 1000;
    }

    .navbar {
      padding: 1rem 0;
    }

    .navbar .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .brand-link {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #333;
      font-size: 1.5rem;
      font-weight: 700;
    }

    .brand-link i {
      margin-right: 0.5rem;
      font-size: 1.8rem;
    }

    .brand-text {
      color: #2c5aa0;
    }

    .navbar-toggle {
      display: none;
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: #333;
    }

    .navbar-menu {
      display: flex;
    }

    .navbar-nav {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .nav-item {
      margin-left: 2rem;
    }

    .nav-link {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #333;
      font-weight: 500;
      padding: 0.5rem 0;
      transition: color 0.3s ease;
    }

    .nav-link i {
      margin-right: 0.5rem;
    }

    .nav-link:hover,
    .nav-link.active {
      color: #2c5aa0;
    }

    @media (max-width: 768px) {
      .navbar-toggle {
        display: block;
      }

      .navbar-menu {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        flex-direction: column;
        transform: translateY(-100%);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
      }

      .navbar-menu.active {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
      }

      .navbar-nav {
        flex-direction: column;
        width: 100%;
      }

      .nav-item {
        margin: 0;
        border-bottom: 1px solid #eee;
      }

      .nav-link {
        padding: 1rem 2rem;
        justify-content: flex-start;
      }
    }
  `]
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
