import {Component, EventEmitter, Output} from '@angular/core';
import {RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {LanguageClassDirective} from "../../../../shared/directives/language-class.directive";

@Component({
  selector: 'app-email-verification',
  standalone: true,
  imports: [
    RouterLink,
    TranslateModule,
    LanguageClassDirective
  ],
  templateUrl: './email-verification.component.html',
  styleUrl: './email-verification.component.scss'
})
export class EmailVerificationComponent {
  @Output() closeModal = new EventEmitter<void>();

  public onClose() {
    this.closeModal.emit();
  }
}
