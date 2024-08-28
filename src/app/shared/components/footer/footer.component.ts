import { TranslateModule } from '@ngx-translate/core';
import { Component } from '@angular/core';
import { LanguageClassDirective } from '../../directives/language-class.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule, LanguageClassDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
