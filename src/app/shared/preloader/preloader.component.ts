import { Component, Renderer2 } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-preloader',
  standalone: true,
  imports: [],
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent {
  constructor(private renderer: Renderer2, private scrollService: ScrollService) {}

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
        // Trigger scroll after preloader is fully handled
        setTimeout(() => {
          const urlHash = window.location.hash.replace('#', '');
          if (urlHash) {
            this.scrollService.scrollToElementById(urlHash);
          }
        }, 100);
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
