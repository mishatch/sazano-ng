import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private languageSubject = new BehaviorSubject<string>('geo');
  language$ = this.languageSubject.asObservable();

  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('lang') || 'geo';
    this.languageSubject.next(savedLang);
    this.translate.use(savedLang);
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.languageSubject.next(lang);
    localStorage.setItem('lang', lang);
  }

  getCurrentLanguage(): string {
    return this.languageSubject.value;
  }
}
