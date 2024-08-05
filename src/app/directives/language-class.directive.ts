import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';
import { LanguageService } from '../services/language.service';

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
      const [geoClass, engClass] = this.langClasses
        .split(',')
        .map((cls) => cls.trim());
      const className = lang === 'geo' ? geoClass : engClass;

      if (this.previousClass) {
        this.renderer.removeClass(this.el.nativeElement, this.previousClass);
      }

      this.renderer.addClass(this.el.nativeElement, className);

      this.previousClass = className;
    });
  }
}
