import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {LanguageClassDirective} from "../../../shared/directives/language-class.directive";

@Component({
  selector: 'app-registration-successful',
  standalone: true,
  imports: [
    RouterLink,
    TranslateModule,
    LanguageClassDirective
  ],
  templateUrl: './registration-successful.component.html',
  styleUrl: './registration-successful.component.scss'
})
export class RegistrationSuccessfulComponent {

}
