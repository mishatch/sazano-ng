import {AfterViewInit, Component, ElementRef, HostListener} from '@angular/core';

@Component({
  selector: 'app-scroll-arrow',
  standalone: true,
  imports: [],
  templateUrl: './scroll-arrow.component.html',
  styleUrl: './scroll-arrow.component.scss'
})
export class ScrollArrowComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const arrow = this.el.nativeElement.querySelector('.scroll-arrow');

    if (scrollPosition > 150) {
      arrow.classList.add('visible');
    } else {
      arrow.classList.remove('visible');
    }
  }

  setupIntersectionObserver() {
    const footer = document.querySelector('app-footer');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.el.nativeElement.querySelector('.scroll-arrow').classList.add('white');
        } else {
          this.el.nativeElement.querySelector('.scroll-arrow').classList.remove('white');
        }
      });
    }, {
      threshold: 0.1
    });

    if (footer) {
      observer.observe(footer);
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
