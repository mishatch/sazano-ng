import {Component, OnDestroy, OnInit} from '@angular/core';
import { AuthService } from "../../core/services/auth.service";
import { TranslateModule } from "@ngx-translate/core";
import { LanguageClassDirective } from "../../shared/directives/language-class.directive";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import {ProfileService} from "./services/profile.service";
import {StorageService} from "./services/storage.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [TranslateModule, LanguageClassDirective, RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  public userName!: string | null;
  public surname!: string | null;
  public isAdmin!: boolean;

  private subscription!: Subscription;

  constructor(
    private authService: AuthService,
    private profileService: ProfileService,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.initProfileInfo()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.profileService.clearUserInfo();
  }

  logOut() {
    this.authService.logout();
    this.storageService.clearUserData();
  }

  private initProfileInfo(){
    this.isAdmin = this.authService.isUserAdmin();

    const userInfo = this.authService.decodeToken();
    console.log(userInfo);
    const userInfoFromStorage = this.storageService.getUserData();

    if (userInfoFromStorage) {
      this.userName = userInfoFromStorage.userName;
      this.surname = userInfoFromStorage.userSurname;
    } else if (userInfo) {
      this.userName = userInfo.name;
      this.surname = userInfo.surName;
    }

    this.subscription = this.profileService.userInfo$.subscribe((info) => {
      if (info) {
        this.userName = info.name;
        this.surname = info.surName;
      }
    });
  }
}
