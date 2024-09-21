import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageClassDirective } from '../../../shared/directives/language-class.directive';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';
import { Subscription } from 'rxjs';

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
export class LoginComponent implements OnInit, OnDestroy {
  loginForm!: FormGroup;
  error: string | null = null;
  isLoading = false;
  private subscription: Subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private ngbModal: NgbModal
  ) {}

  ngOnInit(): void {
    this.initLoginForm();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.error = null;
      const loginSub = this.authService.loginUser(this.loginForm.value).subscribe(
        (response) => {
          this.ngbModal.dismissAll();
          if(this.router.url === '/shopping-cart') {
            this.router.navigate(['/checkout']);
          } else {
            this.router.navigate(['/profile/profile-info']);
          }
          this.isLoading = false;
        },
        (error) => {
          this.error = error.error;
          this.isLoading = false;
        }
      );
      this.subscription.add(loginSub);
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
