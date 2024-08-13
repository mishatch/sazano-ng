import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-wines',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './wines.component.html',
  styleUrl: './wines.component.scss',
})
export class WinesComponent {
  http = inject(HttpClient);
  authService = inject(AuthService);
  logout() {
    this.authService.logout();
  }
}
