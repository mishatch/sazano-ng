import { TranslateModule } from '@ngx-translate/core';
import { Component } from '@angular/core';
import { LanguageClassDirective } from '../../../shared/directives/language-class.directive';

@Component({
  selector: 'app-winery',
  standalone: true,
  imports: [LanguageClassDirective, TranslateModule],
  templateUrl: './winery.component.html',
  styleUrl: './winery.component.scss',
})
export class WineryComponent {}
