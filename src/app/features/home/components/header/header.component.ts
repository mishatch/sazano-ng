import { TranslateModule } from '@ngx-translate/core';
import {Component, OnDestroy, OnInit} from '@angular/core';
import { LanguageClassDirective } from '../../../../shared/directives/language-class.directive';
import { LanguageService } from '../../../../shared/services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LanguageClassDirective, TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  mobileHeaderUrl: string = '';
  desktopHeaderUrl: string = '';
  private currentLanguage: string = '';
  private languageSubscription!: Subscription;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.getCurrentLanguage();
    this.updateHeaderUrls();
  }

  ngOnDestroy() {
    this.languageSubscription.unsubscribe();
  }

  private getCurrentLanguage() {
    this.languageSubscription = this.languageService.language$.subscribe(
      (lang: string) => {
        this.currentLanguage = lang;
        this.updateHeaderUrls();
      }
    );
  }

  private updateHeaderUrls() {
    if (this.currentLanguage === 'geo') {
      this.mobileHeaderUrl =
        'assets/images/home/header/main_logo_mobile_ge.webp';
      this.desktopHeaderUrl =
        'assets/images/home/header/main_logo_desktop_ge.webp';
    } else {
      this.mobileHeaderUrl =
        'assets/images/home/header/main_logo_mobile_en.webp';
      this.desktopHeaderUrl =
        'assets/images/home/header/main_logo_desktop_en.webp';
    }
  }
}
