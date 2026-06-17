import { Component } from '@angular/core';
import { RouterLink ,Router } from '@angular/router';
import { AuthService } from '../../../core/Services/auth.service';
import {  inject } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink , FormsModule],
  templateUrl: './login.html'
})
export class Login {
injectedAuthService = inject(AuthService);
router = inject(Router);
loginData = {
  email: '',
  password: ''
};
onSubmit() {

  console.log(this.loginData);

  this.injectedAuthService.login(this.loginData)
    .subscribe({

      next: (response: any) => {

        console.log('Login Successful', response);

        localStorage.setItem(
          'token',
          response.token
        );

        alert('Login Successful');

        // We'll redirect later
      },

      error: (error) => {

        console.error('Login Failed', error);

        alert('Invalid Email or Password');
      }
    });
}
}