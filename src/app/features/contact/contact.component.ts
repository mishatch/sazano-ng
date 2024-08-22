import { Component } from '@angular/core';
import {LanguageClassDirective} from "../../shared/directives/language-class.directive";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [LanguageClassDirective, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
