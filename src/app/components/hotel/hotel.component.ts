import { Component } from '@angular/core';
import {LanguageClassDirective} from "../../shared/directives/language-class.directive";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-hotel',
  standalone: true,
  imports: [LanguageClassDirective, TranslateModule],
  templateUrl: './hotel.component.html',
  styleUrl: './hotel.component.scss'
})
export class HotelComponent {

}
