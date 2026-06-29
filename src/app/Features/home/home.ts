import { Component } from '@angular/core';
import { Header } from '../Layout/header/header';
import { Footer } from '../Layout/footer/footer';
import { Sidebar } from '../Layout/sidebar/sidebar';
import { Dashboard } from '../../app/Features/dashboard/dashboard/dashboard';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header, Footer, Sidebar, Dashboard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
