import { Routes } from '@angular/router';
import{Login} from './Features/Auth/login/login';
import{Signup} from './Features/Auth/signup/signup';
import{Home} from './Features/home/home';


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
  },
  {
    path: 'home',
    component: Home
  }
];
