import { Component } from '@angular/core';
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

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule, LanguageClassDirective, TranslateModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent {
  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, confirmPasswordValidator]],
      phone: ['+995', [Validators.required, georgianPhoneValidator]],
    });
  }

  get name() {
    return this.registrationForm.get('name');
  }

  get surname() {
    return this.registrationForm.get('surname');
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
    return this.registrationForm.get('phone');
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const { confirmPassword, ...formData } = this.registrationForm.value;
      console.log('Form Submitted!', formData);
    } else {
      console.log('Form is invalid');
    }
  }
}
