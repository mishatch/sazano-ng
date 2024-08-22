import { TranslateModule } from '@ngx-translate/core';
import { Component } from '@angular/core';
import { LanguageClassDirective } from '../../../../shared/directives/language-class.directive';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-winery',
  standalone: true,
  imports: [LanguageClassDirective, TranslateModule, RouterLink],
  templateUrl: './winery.component.html',
  styleUrl: './winery.component.scss',
})
export class WineryComponent {
  scrollOnTop(){
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
