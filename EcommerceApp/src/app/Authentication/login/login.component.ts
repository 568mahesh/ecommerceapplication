import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../../services/Authentication/authentication.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  template: `
  <div class="container d-flex justify-content-center align-items-center min-vh-100">
    <div class="card custom-card shadow">

      <div class="card-header text-center text-white bg-purple">
        <h4>Login</h4>
      </div>

      <div class="card-body">

        <form #loginForm="ngForm" (ngSubmit)="onLogin()">

          <!-- Email -->
          <div class="mb-3">
            <label>Email</label>
            <input type="email"
                   class="form-control"
                   [(ngModel)]="loginData.email"
                   name="email"
                   required
                   placeholder="abc@gmail.com">
          </div>

          <!-- Password -->
          <div class="mb-3">
            <label>Password</label>
            <input type="password"
                   class="form-control"
                   [(ngModel)]="loginData.password"
                   name="password"
                   required>
          </div>

          <!-- Submit -->
          <button class="btn btn-success w-100" [disabled]="loginForm.invalid">
            Login
          </button>

          <!-- Create Account -->
          <div class="text-center mt-3">
            <small>
              Don’t have an account?
              <a routerLink="/register" class="fw-bold text-decoration-none">
                Create Account
              </a>
            </small>
          </div>

         
        </form>

      </div>
    </div>
  </div>
  `,
  styles: [`
    .bg-purple{
      background: linear-gradient(45deg, #6f42c1, #9b59b6);
    }

    .custom-header {
      background: linear-gradient(45deg, #6f42c1, #9b59b6);
      color: white;
      font-weight: 600;
    }
  `]
})
export class LoginComponent {

  loginData = {
    email: '',
    password: ''
  };

  constructor(
    private router: Router,
    private authService:AuthenticationService
  ) { }

   onLogin() {
    this.authService.login(this.loginData)
      .subscribe({
        next: (res:any) => {
          alert(res.message);

          if(res.role === 'ADMIN') {
            this.router.navigate(['/admin/dashboard']);
          } else if(res.role === 'USER') {
            this.router.navigate(['/user/dashboard']);
          } else {
            alert('Invalid credentials!');
          }
        },
        error: (err:any) => {
          console.error(err);
          alert('Something went wrong!');
        }
      });
  }
}