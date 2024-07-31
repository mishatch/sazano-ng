import {Component, Renderer2} from '@angular/core';

@Component({
  selector: 'app-preloader',
  standalone: true,
  imports: [],
  templateUrl: './preloader.component.html',
  styleUrl: './preloader.component.scss'
})
export class PreloaderComponent {
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.disableScroll();
    this.removeHashFromUrl();
  }

  ngAfterViewInit(): void {
    this.handlePreloader();
  }

  disableScroll() {
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
    window.scrollTo(0, 0);
  }

  handlePreloader() {
    const preloader = this.renderer.selectRootElement('#preloader', true);

    setTimeout(() => {
      this.renderer.addClass(preloader, 'fade-out');
      setTimeout(() => {
        this.renderer.setStyle(preloader, 'display', 'none');
        this.renderer.setStyle(document.body, 'overflow', 'auto');
      }, 1000);
    }, 3500);
  }

  removeHashFromUrl() {
    if (window.location.hash) {
      history.replaceState(null, '', ' ');
    }

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1);
  }
}
