
import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import { AuthService } from "../../../core/services/auth.service";
import {StorageService} from "../services/storage.service";
import {ProfileService} from "../services/profile.service";
import {Subscription} from "rxjs";
import {LoadingComponent} from "../../../shared/components/loading/loading.component";
import {LanguageClassDirective} from "../../../shared/directives/language-class.directive";
import {TranslateModule} from "@ngx-translate/core";
import {georgianPhoneValidator} from "../../../shared/validators/georgian-phone.validator";

@Component({
  selector: 'app-profile-info',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    LoadingComponent,
    LanguageClassDirective,
    TranslateModule
  ],
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit, OnDestroy {

  public profileForm!: FormGroup;
  public isLoading = false;

  private userName!: string | null;
  private surname!: string | null;
  private phone!: string | null;
  private email!: string | null;
  private subscription!: Subscription;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private profileService: ProfileService,
    private storageService: StorageService
  ) { }

  ngOnInit() {
    this.getUserInfo();
    this.initProfileForm();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

  }

  onSubmit() {
    if (this.profileForm.valid) {

      this.isLoading = true;

      const updatedUserInfo = {
        name: this.profileForm.get('name')?.value,
        surName: this.profileForm.get('surname')?.value,
        phoneNumber: this.profileForm.get('phone')?.value,
        email: this.profileForm.get('email')?.value,
      };

      this.profileService.setUserInfo(updatedUserInfo);
      this.storageService.setUserData(updatedUserInfo);

      this.subscription = this.profileService.updateUserInfo(updatedUserInfo).subscribe(
        () => {
          this.isLoading = false;
        },
        error => {
          this.isLoading = false;
        }
      );
    }
  }

  get name(){
    return this.profileForm.get('name');
  }
  get userSurname(){
    return this.profileForm.get('surname');
  }
  get userPhone(){
    return this.profileForm.get('phone');
  }
  get userEmail(){
    return this.profileForm.get('email');
  }

  private initProfileForm() {
    this.profileForm = this.fb.group({
      name: [this.userName, Validators.required],
      surname: [this.surname, Validators.required],
      email: [this.email, [Validators.required, Validators.email]],
      phone: [this.phone, [Validators.required, georgianPhoneValidator]],
    });
  }


  private getUserInfo() {
      const userInfo = this.authService.decodeToken();
      const userInfoFromStorage = this.storageService.getUserData();

      if(userInfoFromStorage){
        this.userName = userInfoFromStorage.userName;
        this.surname = userInfoFromStorage.userSurname;
        this.email = userInfoFromStorage.userEmail;
        this.phone = userInfoFromStorage.userPhone;
      } else {
        this.userName = userInfo.name;
        this.surname = userInfo.surName;
        this.email = userInfo.email;
        this.phone = userInfo.phoneNumber;
      }
  }
}
