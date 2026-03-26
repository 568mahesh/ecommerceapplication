import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router,RouterLink } from '@angular/router';

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

  constructor(private router: Router) {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    console.log("User Data:", this.user);

    alert("Registration Successful");

    this.router.navigate(['/login']);
  }

}
