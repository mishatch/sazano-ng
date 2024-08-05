import { TranslateModule } from '@ngx-translate/core';
import {
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
  HostListener,
  AfterViewInit,
} from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { CommonModule } from '@angular/common';
import { LanguageClassDirective } from '../../directives/language-class.directive';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    LanguageClassDirective,
    NgbDropdownModule,
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent implements AfterViewInit {
  @ViewChild('nav', { static: true }) nav!: ElementRef;
  @ViewChild('links', { static: true }) links!: ElementRef;
  @ViewChild('navBtn', { static: true }) navBtn!: ElementRef;
  @ViewChild('desktopLogo', { static: true }) desktopLogo!: ElementRef;
  @ViewChild('changeLang', { static: true }) changeLang!: ElementRef;

  clicked = false;
  mobileNavDisable = false;

  currentLanguage: string = this.languageService.getCurrentLanguage();
  languages = [
    { code: 'geo', flag: 'assets/images/flags/geo.png' },
    { code: 'en', flag: 'assets/images/flags/us.png' },
    { code: 'ru', flag: 'assets/images/flags/ru.png' },
  ];

  constructor(
    private renderer: Renderer2,
    private languageService: LanguageService
  ) {
    this.languageService.language$.subscribe((lang) => {
      this.currentLanguage = lang;
    });
  }

  switchLanguage(lang: string) {
    this.languageService.switchLanguage(lang);
  }

  getFlag(lang: string): string {
    const language = this.languages.find((l) => l.code === lang);
    return language ? language.flag : '';
  }

  ngAfterViewInit() {
    this.checkScreenWidth();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenWidth();
  }
  toggleNav() {
    if (this.mobileNavDisable) {
      return;
    }

    if (!this.clicked) {
      this.openNav();
    } else {
      this.closeNav();
    }
  }

  checkScreenWidth() {
    const screenWidth = window.innerWidth;
    this.mobileNavDisable = screenWidth >= 768;

    if (this.mobileNavDisable) {
      this.openNav();
      this.desktopNav();
    } else {
      this.renderer.setStyle(this.desktopLogo.nativeElement, 'display', 'none');
      this.renderer.setStyle(this.changeLang.nativeElement, 'display', 'none');
      this.closeNav();
    }
  }

  // change element styles after mobile nav bar button toggle
  openNav() {
    this.renderer.setStyle(
      this.nav.nativeElement,
      'backgroundColor',
      '#4c0027'
    );
    this.renderer.setStyle(this.links.nativeElement, 'display', 'flex');
    this.renderer.setStyle(this.navBtn.nativeElement, 'width', 'auto');
    this.renderer.setStyle(this.navBtn.nativeElement, 'height', '30px');
    this.renderer.setStyle(this.navBtn.nativeElement, 'paddingTop', '0');
    this.renderer.setStyle(this.navBtn.nativeElement, 'marginTop', '0');

    this.renderer.setStyle(
      this.navBtn.nativeElement,
      'backgroundColor',
      'transparent'
    );
    this.renderer.removeClass(this.links.nativeElement, 'hidden');
    this.clicked = true;
  }

  closeNav() {
    this.renderer.setStyle(
      this.nav.nativeElement,
      'backgroundColor',
      'transparent'
    );
    this.renderer.addClass(this.links.nativeElement, 'hidden');
    this.renderer.setStyle(this.links.nativeElement, 'display', 'none');
    this.renderer.setStyle(this.navBtn.nativeElement, 'width', '70px');
    this.renderer.setStyle(this.navBtn.nativeElement, 'height', '70px');
    this.renderer.setStyle(this.navBtn.nativeElement, 'paddingTop', '33px');
    this.renderer.setStyle(this.navBtn.nativeElement, 'marginTop', '-35px');
    this.renderer.setStyle(
      this.navBtn.nativeElement,
      'backgroundColor',
      '#4c0027'
    );
    this.renderer.setStyle(this.navBtn.nativeElement, 'display', 'block');
    this.clicked = false;
  }
  // change element styles for desktop nav bar
  desktopNav() {
    this.renderer.setStyle(
      this.nav.nativeElement,
      'backgroundColor',
      'transparent'
    );
    this.renderer.setStyle(this.navBtn.nativeElement, 'display', 'none');
    this.renderer.setStyle(this.desktopLogo.nativeElement, 'display', 'block');
    this.renderer.setStyle(this.changeLang.nativeElement, 'display', 'block');
  }
}
