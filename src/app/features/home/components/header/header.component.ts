import { TranslateModule } from '@ngx-translate/core';
import { Component } from '@angular/core';
import { LanguageClassDirective } from '../../../../shared/directives/language-class.directive';
import {LanguageService} from "../../../../core/services/language.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LanguageClassDirective, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private currentLanguage: string = this.languageService.getCurrentLanguage();
  mobileHeaderUrl!: string;
  desktopHeaderUrl!: string;
  constructor(private languageService: LanguageService) {
    this.languageService.language$.subscribe((lang) => {
      this.currentLanguage = lang;
      if(this.currentLanguage === 'geo') {
        this.mobileHeaderUrl = 'assets/images/home/header/main_logo_mobile_ge.webp';
        this.desktopHeaderUrl = 'assets/images/home/header/main_logo_desktop_ge.webp';
      } else {
        this.mobileHeaderUrl = 'assets/images/home/header/main_logo_mobile_en.webp';
        this.desktopHeaderUrl = 'assets/images/home/header/main_logo_desktop_en.webp';
      }
    });
  }
}
