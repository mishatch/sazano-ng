import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LanguageClassDirective } from '../../../shared/directives/language-class.directive';
import { TranslateModule } from '@ngx-translate/core';
import { LoginComponent } from '../login/login.component';
import { RegistrationComponent } from '../registration/registration.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    LanguageClassDirective,
    TranslateModule,
    ReactiveFormsModule,
    LoginComponent,
    RegistrationComponent,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  @ViewChild('longContent', { static: true }) longContent!: TemplateRef<any>;
  isLoginMode = true;
  constructor(private ngbModal: NgbModal) {}

  openModal() {
    const modalRef = this.ngbModal.open(this.longContent, {
      scrollable: true,
      centered: true,
    });
  }
  switchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
}
