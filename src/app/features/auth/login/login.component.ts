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
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    TranslateModule,
    LanguageClassDirective,
    ReactiveFormsModule,
    LoadingComponent,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  error: string | null = null;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private ngbModal: NgbModal
  ) {}

  ngOnInit(): void {
    this.initLoginForm();
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.error = null;
      this.authService.loginUser(this.loginForm.value).subscribe(
        (response) => {
          this.router.navigate(['/profile']);
          this.ngbModal.dismissAll();
          this.isLoading = false;
        },
        (error) => {
          this.error = error.error;
          this.isLoading = false;
        }
      );
    }
  }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  private initLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
}
