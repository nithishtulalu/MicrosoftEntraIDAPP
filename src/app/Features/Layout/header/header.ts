import { Component ,inject} from '@angular/core';
import { AuthService } from '../../../core/Services/services/auth.service';



@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private authService = inject(AuthService);

  logout() {
    this.authService.logout();
  }
}