import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router,RouterLink } from '@angular/router';
import { AuthService } from '../../../core/Services/auth.service';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './signup.html'
})

export class Signup {
  injectedAuthService = inject(AuthService);
  router = inject(Router);
   registerData = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: ''
  };
  onSubmit() {
    console.log(this.registerData);
    this.injectedAuthService.signup(this.registerData).subscribe(
      response => {
        console.log('Signup successful', response);
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Signup failed', error);
      }
    );
  }
}