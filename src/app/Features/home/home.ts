import { Component } from '@angular/core';
import { Header } from '../Layout/header/header';
import { Footer } from '../Layout/footer/footer';
import { Sidebar } from '../Layout/sidebar/sidebar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header, Footer, Sidebar],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
