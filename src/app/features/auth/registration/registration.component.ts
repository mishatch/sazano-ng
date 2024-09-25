import { Component, EventEmitter, OnInit, OnDestroy, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LanguageClassDirective } from '../../../shared/directives/language-class.directive';
import { TranslateModule } from '@ngx-translate/core';
import { georgianPhoneValidator } from '../../../shared/validators/georgian-phone.validator';
import { AuthService } from '../../../core/services/auth.service';
import {
  nonAlphanumericValidator,
  oneDigitValidator,
  uppercaseLetterValidator,
  confirmPasswordValidator,
} from '../validators/password.validator';
import { NgStyle } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    LanguageClassDirective,
    TranslateModule,
    NgStyle,
  ],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit, OnDestroy {
  @Output() registrationSuccess = new EventEmitter<void>();

  public registrationForm!: FormGroup;
  public userExists: boolean = false;
  public unexpectedError: boolean = false;

  private subscription: Subscription = new Subscription();

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.registrationFormInit();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onSubmit() {
    if (this.registrationForm.valid) {
      this.userExists = false;
      this.unexpectedError = false;
      const { confirmPassword, ...formData } = this.registrationForm.value;
      const registerSub = this.authService.registerUser(formData).subscribe(
        () => {
          this.registrationSuccess.emit();
        },
        (error) => {
          if (error.error.errors) {
            this.userExists = true;
          } else {
            this.unexpectedError = true;
          }
        }
      );
      this.subscription.add(registerSub);
    }
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

  private registrationFormInit() {
    this.registrationForm = this.fb.group(
      {
        name: ['', [Validators.required]],
        surName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            uppercaseLetterValidator,
            nonAlphanumericValidator,
            oneDigitValidator,
          ],
        ],
        confirmPassword: ['', [Validators.required]],
        phoneNumber: ['', [Validators.required, georgianPhoneValidator]],
      },
      {
        validators: confirmPasswordValidator,
      }
    );
  }
}
