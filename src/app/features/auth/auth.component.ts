import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LanguageClassDirective } from '../../shared/directives/language-class.directive';
import { TranslateModule } from '@ngx-translate/core';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    LanguageClassDirective,
    TranslateModule,
    ReactiveFormsModule,
    LoginComponent,
    RegistrationComponent,
    EmailVerificationComponent,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  @ViewChild('authModalTemplate', { static: true })

  public authModalTemplate!: TemplateRef<any>;
  public isLoginMode = true;
  public emailVerification = false;

  constructor(private ngbModal: NgbModal) {}

  public openModal() {
    this.ngbModal.open(this.authModalTemplate, {
      scrollable: true,
      centered: true,
    });
  }

  public switchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  public onRegistrationSuccess() {
    this.emailVerification = true;
  }

  public onCloseSuccessModal() {
    this.ngbModal.dismissAll();
    setTimeout(() => {
      this.switchMode();
      this.emailVerification = false;
    }, 1000);
  }
}
