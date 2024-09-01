import {Component, EventEmitter, Output} from '@angular/core';
import {RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {LanguageClassDirective} from "../../../shared/directives/language-class.directive";

@Component({
  selector: 'app-auth-success',
  standalone: true,
  imports: [
    RouterLink,
    TranslateModule,
    LanguageClassDirective
  ],
  templateUrl: './auth-success.component.html',
  styleUrl: './auth-success.component.scss'
})
export class AuthSuccessComponent {
  @Output() closeModal = new EventEmitter<void>();

  onClose() {
    this.closeModal.emit();
  }
}
