import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/Services/services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './signup.html'
})
export class Signup {

  private authService = inject(AuthService);
  private router = inject(Router);

  registerData = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: ''
  };

  register() {

    this.authService.register(this.registerData)
      .subscribe({
        next: (response) => {
          console.log(response);
          alert('Registration Successful');
          this.router.navigate(['/login']);
        },
        error: (error) => {
          console.error(error);
          alert('Registration Failed');
        }
      });
  }
}