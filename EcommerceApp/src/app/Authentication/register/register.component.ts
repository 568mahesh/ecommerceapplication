import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router,RouterLink } from '@angular/router';
import { AuthenticationService } from '../../services/Authentication/authentication.service';

@Component({
  selector: 'app-register',
  standalone:true,
  imports: [FormsModule,RouterLink,CommonModule],
  templateUrl: './register.component.html',
  styleUrls:[ './register.component.css']
})
export class RegisterComponent {
   user = {
    fullname: '',
    username: '',
    mobileno: '',
    email: '',
    password: ''
  };

  confirmPassword: string = '';
  showPassword: boolean = false;

 constructor(
  private router: Router,
  private authService: AuthenticationService
) {}
togglePassword() { 
  this.showPassword = !this.showPassword; 
}

onSubmit() {

  if (this.user.password !== this.confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  this.authService.register(this.user).subscribe({
    next: (res) => {
      console.log(res);
      alert("Registration Successful");
      this.router.navigate(['/login']);
    },
    error: (err) => {
      console.error(err);
      alert("Registration Failed");
    }
  });
}


}
