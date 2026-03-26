import { Component,ElementRef,ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav class="navbar navbar-expand-lg custom-navbar shadow-sm">

      <!-- Logo -->
      <a class="navbar-brand fw-bold" routerLink="/">
        🛍️ MyShop
      </a>

       <!-- Toggler -->
      <button #navbarToggler class="navbar-toggler custom-toggler" type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarContent">
        <span class="navbar-toggler-icon"></span>
      </button>

     <!-- Links -->
      <div class="collapse navbar-collapse custom-collapse" id="navbarContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link custom-link"
               routerLink="/login"
               (click)="closeNavbar()">
              Login
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link custom-link"
               routerLink="/register"
               (click)="closeNavbar()">
              Register
            </a>
          </li>
        </ul>
      </div>

    </nav>
  `,
  styles: [`
    /* 🌿 Light Green Navbar */
    .custom-navbar {
      background-color: #d4edda; /* light green */
      padding: 10px 20px;
    }

    /* Logo */
    .navbar-brand {
      color: #2e7d32;
      font-size: 1.4rem;
    }

    /* Links */
    .custom-link {
      color: #2e7d32;
      margin: 0 8px;
      padding: 6px 14px;
      border-radius: 20px;
      transition: 0.3s;
    }

    /* 🔥 Hover Effect */
    .custom-link:hover {
      background-color: #ffffff;
      color: #000000;
    }

    /* 🔥 Toggler Styling */
    .custom-toggler {
      border: none;
      background-color: transparent;
    }

    .navbar-toggler-icon {
      filter: invert(40%);
    }

    /* 📱 Reduce toggler expansion size */
    .custom-collapse {
      background-color: #d4edda;
      padding: 10px;
      border-radius: 10px;
    }

    @media (max-width: 991px) {
      .custom-collapse {
        width: 200px;         /* 🔥 reduced width */
        margin-left: auto;    /* align right */
      }

      .nav-item {
        text-align: center;
        margin: 5px 0;
      }
    }
  `]
})
export class NavbarComponent {
    @ViewChild('navbarToggler', { static: false }) navbarToggler!: ElementRef<HTMLButtonElement>;

  closeNavbar() {
    // Only collapse if toggler is visible (mobile view)
    if (this.navbarToggler.nativeElement.offsetParent !== null) {
      this.navbarToggler.nativeElement.click();
    }
  }
}