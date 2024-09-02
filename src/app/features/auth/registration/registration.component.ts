import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LanguageClassDirective } from '../../../shared/directives/language-class.directive';
import { TranslateModule } from '@ngx-translate/core';
import { georgianPhoneValidator } from '../validators/georgian-phone.validator';
import {AuthService} from "../../../core/services/auth.service";
import {nonAlphanumericValidator, oneDigitValidator, uppercaseLetterValidator, confirmPasswordValidator} from "../validators/password.validator";
import {NgStyle} from "@angular/common";
import {LanguageService} from "../../../shared/services/language.service";

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule, LanguageClassDirective, TranslateModule, NgStyle],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  @Output() registrationSuccess = new EventEmitter<void>();
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService, private lang: LanguageService) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required]],
      surName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        uppercaseLetterValidator,
        nonAlphanumericValidator,
        oneDigitValidator,
      ]],
      confirmPassword: ['', [Validators.required]],
      phoneNumber: ['+995', [Validators.required, georgianPhoneValidator]],
    }, {
      validators: confirmPasswordValidator
    });
  }


  get name() {
    return this.registrationForm.get('name');
  }

  get surname() {
    return this.registrationForm.get('surName');
  }

  get email() {
    return this.registrationForm.get('email');
  }
  get password() {
    return this.registrationForm.get('password');
  }
  get confirmPassword() {
    return this.registrationForm.get('confirmPassword');
  }
  get phone() {
    return this.registrationForm.get('phoneNumber');
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const { confirmPassword, ...formData } = this.registrationForm.value;
      this.errorMessage = null;
      this.authService.registerUser(formData).subscribe(
        (data) => {
          this.registrationSuccess.emit();
        },
        (error) => {
          if (error.error.errors) {
            if(this.lang.getCurrentLanguage() === "geo"){
              this.errorMessage = 'მომხმარებელი მსგავსი ელ-ფოსტით უკვე არსებობს';
            } else if(this.lang.getCurrentLanguage() === "en"){
              this.errorMessage = 'User with such email already exists';
            } else {
              this.errorMessage = 'Пользователь с таким адресом электронной почты уже существует';
            }
          } else {
            if(this.lang.getCurrentLanguage() === "geo"){
              this.errorMessage = 'დაფიქსირდა შეცდომა, გთხოვთ სცადოთ თავიდან';
            } else if(this.lang.getCurrentLanguage() === "en"){
              this.errorMessage = 'An error occurred, please try again';
            } else {
              this.errorMessage = 'Произошла ошибка, пожалуйста, попробуйте еще раз';
            }
          }
        }
      );
    }
  }
}
