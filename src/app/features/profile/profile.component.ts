import { Component } from '@angular/core';
import {AuthService} from "../../core/services/auth.service";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  constructor(private authService: AuthService) {
  }
  logOut() {
    this.authService.logout();
  }
}
