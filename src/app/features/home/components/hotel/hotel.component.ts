import { TranslateModule } from '@ngx-translate/core';
import { Component, ViewChild } from '@angular/core';
import {
  NgbCarousel,
  NgbCarouselModule,
  NgbSlideEvent,
  NgbSlideEventSource,
} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { LanguageClassDirective } from '../../../../shared/directives/language-class.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hotel',
  standalone: true,
  imports: [
    FormsModule,
    NgbCarouselModule,
    TranslateModule,
    LanguageClassDirective,
    RouterLink,
  ],
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss'],
})
export class HotelComponent {
  public paused = false;
  public unpauseOnArrow = false;
  public pauseOnIndicator = false;
  public pauseOnHover = true;
  public pauseOnFocus = true;

  @ViewChild('hotelCarousel', { static: true }) hotelCarousel!: NgbCarousel;

  public togglePaused() {
    if (this.paused) {
      this.hotelCarousel.cycle();
    } else {
      this.hotelCarousel.pause();
    }
    this.paused = !this.paused;
  }

  public onHotelSlide(slideEvent: NgbSlideEvent) {
    if (
      this.unpauseOnArrow &&
      slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT ||
        slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
    ) {
      this.togglePaused();
    }

    if (
      this.pauseOnIndicator &&
      !slideEvent.paused &&
      slideEvent.source === NgbSlideEventSource.INDICATOR
    ) {
      this.togglePaused();
    }
  }

  public scrollOnTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
