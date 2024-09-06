import { TranslateModule } from '@ngx-translate/core';
import {
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
  HostListener,
  AfterViewInit, OnInit, OnDestroy,
} from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { CommonModule } from '@angular/common';
import { LanguageClassDirective } from '../../directives/language-class.directive';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import {Router, RouterLink} from '@angular/router';
import { ScrollService } from '../../services/scroll.service';
import { LoginComponent } from '../../../features/auth/login/login.component';
import { AuthComponent } from '../../../features/auth/auth.component';
import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    LanguageClassDirective,
    NgbDropdownModule,
    RouterLink,
    LoginComponent,
    AuthComponent,
  ],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit, AfterViewInit {
  @ViewChild('nav', { static: true }) nav!: ElementRef;
  @ViewChild('links', { static: true }) links!: ElementRef;
  @ViewChild('navBtn', { static: true }) navBtn!: ElementRef;
  @ViewChild('desktopLogo', { static: true }) desktopLogo!: ElementRef;
  @ViewChild('changeLang', { static: true }) changeLang!: ElementRef;
  @ViewChild('profile', { static: true }) profile!: ElementRef;
  @ViewChild('authModal', { static: false })
  auth!: AuthComponent;
  clicked = false;
  mobileNavDisable = false;
  currentLanguage: string = this.languageService.getCurrentLanguage();
  isLoggedIn: boolean = false;
  languages = [
    { code: 'geo', flag: 'assets/images/flags/geo.png' },
    { code: 'en', flag: 'assets/images/flags/us.png' },
    { code: 'ru', flag: 'assets/images/flags/ru.png' },
  ];

  constructor(
    private renderer: Renderer2,
    private languageService: LanguageService,
    private scrollService: ScrollService,
    private el: ElementRef,
    private authService: AuthService,
    private router: Router
  ) {}
  ngOnInit() {
    this.getCurrentLanguage();
    this.checkLoginStatus();
  }

  ngAfterViewInit() {
    this.checkScreenWidth();
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    const dropdown = this.el.nativeElement.querySelector('.row.lang');
    const profile = this.el.nativeElement.querySelector('.profile');
    if (window.pageYOffset > 50) {
      this.renderer.addClass(dropdown, 'hide-dropdown');
      this.renderer.addClass(profile, 'hide-dropdown');
    } else {
      this.renderer.removeClass(dropdown, 'hide-dropdown');
      this.renderer.removeClass(profile, 'hide-dropdown');
    }
  }

  handleLoginClick(): void {
    if (this.isLoggedIn) {
      this.router.navigate(['/profile']);
    } else {
      this.openAuthModal();
    }
  }

  scrollOnTop() {
    if (window.innerWidth < 768) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.navBtn.nativeElement.click();
    }
  }

  openAuthModal() {
    this.auth.openModal();
  }

  navigateToSection(sectionId: string) {
    this.scrollService.navigateToHomeAndScroll(sectionId);
    this.navBtn.nativeElement.click();
  }

  switchLanguage(lang: string) {
    this.languageService.switchLanguage(lang);
  }

  getFlag(lang: string): string {
    const language = this.languages.find((l) => l.code === lang);
    return language ? language.flag : '';
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenWidth();
  }

  toggleNav() {
    if (this.mobileNavDisable) {
      return;
    }

    this.clicked ? this.closeNav() : this.openNav();
  }

  private getCurrentLanguage() {
    this.languageService.language$.subscribe((lang: string) => {
      this.currentLanguage = lang;
    });
  }

  private checkLoginStatus() {
    this.authService.isLoggedIn().subscribe(status => {
      this.isLoggedIn = status;
    });
  }

  private checkScreenWidth() {
    const screenWidth = window.innerWidth;
    this.mobileNavDisable = screenWidth >= 768;
    if (this.mobileNavDisable) {
      this.openNav();
      this.desktopNav();
    } else {
      this.renderer.setStyle(this.desktopLogo.nativeElement, 'display', 'none');
      this.closeNav();
    }
  }

  private openNav() {
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
    this.renderer.setStyle(this.changeLang.nativeElement, 'display', 'none');
    this.renderer.setStyle(this.profile.nativeElement, 'display', 'none');
    this.renderer.setStyle(
      this.navBtn.nativeElement,
      'backgroundColor',
      'transparent'
    );
    this.renderer.removeClass(this.links.nativeElement, 'hidden');
    this.clicked = true;
  }

  private closeNav() {
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
    this.renderer.setStyle(this.changeLang.nativeElement, 'display', 'block');
    this.renderer.setStyle(this.profile.nativeElement, 'display', 'block');
    this.clicked = false;
  }

  private desktopNav() {
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
