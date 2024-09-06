import { Component } from '@angular/core';
import {AuthService} from "../../core/services/auth.service";
import {TranslateModule} from "@ngx-translate/core";
import {LanguageClassDirective} from "../../shared/directives/language-class.directive";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [TranslateModule, LanguageClassDirective, RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  public userName!: string;
  public surname!: string;
  isAdmin!: boolean;
  constructor(private authService: AuthService) {
    const decodedToken = this.authService.decodeToken();
    if (decodedToken) {
      this.userName = decodedToken.name;
      this.surname = decodedToken.surName;
    }
    this.isAdmin = this.authService.isUserAdmin();
  }
  logOut() {
    this.authService.logout();
  }
}
