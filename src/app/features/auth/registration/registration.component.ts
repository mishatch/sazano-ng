import {Component, EventEmitter, Output} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LanguageClassDirective } from '../../../shared/directives/language-class.directive';
import { TranslateModule } from '@ngx-translate/core';
import { confirmPasswordValidator } from '../validators/password-match.validator';
import { georgianPhoneValidator } from '../validators/georgian-phone.validator';
import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule, LanguageClassDirective, TranslateModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent {
  registrationForm!: FormGroup;
  @Output() registrationSuccess = new EventEmitter<void>();
  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required]],
      surName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, confirmPasswordValidator]],
      phoneNumber: ['+995', [Validators.required, georgianPhoneValidator]],
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
      this.authService.registerUser(formData).subscribe(
        (data) => {
          console.log('User registered successfully');
          this.registrationSuccess.emit(); // Emit the event on success
        },
        (error) => {
          console.log('Error registering user');
        }
      );
    }
  }
}
