import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LanguageClassDirective } from '../../shared/directives/language-class.directive';
import { TranslateModule } from '@ngx-translate/core';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import {NgIf} from "@angular/common";

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
    NgIf
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  @ViewChild('authModalTemplate', { static: true })
  authModalTemplate!: TemplateRef<any>;
  isLoginMode = true;
  showSuccessMessage = false;

  constructor(private ngbModal: NgbModal) {}

  openModal() {
    this.ngbModal.open(this.authModalTemplate, {
      scrollable: true,
      centered: true,
    });
  }

  switchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onRegistrationSuccess() {
    this.showSuccessMessage = true;
  }
  onCloseSuccessModal() {
    this.ngbModal.dismissAll();
    setTimeout(() => {
      this.switchMode();
      this.showSuccessMessage = false;
    }, 1000);
  }
}
