import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {LanguageClassDirective} from "../../../../shared/directives/language-class.directive";

@Component({
  selector: 'app-checkout-success',
  standalone: true,
  imports: [
    RouterLink,
    TranslateModule,
    LanguageClassDirective
  ],
  templateUrl: './checkout-success.component.html',
  styleUrl: './checkout-success.component.scss'
})
export class CheckoutSuccessComponent {

}
