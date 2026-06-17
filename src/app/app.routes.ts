import { Routes } from '@angular/router';
import{Login} from './Features/Auth/login/login';
import{Signup} from './Features/Auth/signup/signup';


export const routes: Routes = [  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'signup',
    component: Signup
  }];
