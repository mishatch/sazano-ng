import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageClassDirective } from '../../../shared/directives/language-class.directive';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [TranslateModule, LanguageClassDirective, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
              private fb: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private ngbModal: NgbModal
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.loginUser(this.loginForm.value).subscribe(
        (response) => {
          console.log('Login successful', response);
          this.router.navigate(['/profile']);
          this.ngbModal.dismissAll();
        },
        (error) => {
          console.log('Login failed', error);
          // Handle login error (e.g., show an error message)
        }
      );
    }
  }
}
