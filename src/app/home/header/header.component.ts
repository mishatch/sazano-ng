import { TranslateModule } from '@ngx-translate/core';
import { Component } from '@angular/core';
import { LanguageClassDirective } from '../../directives/language-class.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LanguageClassDirective, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
