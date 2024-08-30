import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';

@Directive({
  selector: '[appLangClass]',
  standalone: true,
})
export class LanguageClassDirective implements OnInit {
  @Input('appLangClass') langClasses!: string;

  private previousClass: string | null = null;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private languageService: LanguageService
  ) {}

  ngOnInit() {
    this.languageService.language$.subscribe((lang) => {
      const [geoClass, engClass, rusClass] = this.langClasses
        .split(',')
        .map((cls) => cls.trim());

      let className;
      if (lang === 'geo') {
        className = geoClass;
      } else if (lang === 'en') {
        className = engClass;
      } else if (lang === 'ru') {
        className = rusClass;
      }

      if (this.previousClass) {
        this.renderer.removeClass(this.el.nativeElement, this.previousClass);
      }

      if (className) {
        this.renderer.addClass(this.el.nativeElement, className);
        this.previousClass = className;
      }
    });
  }
}
