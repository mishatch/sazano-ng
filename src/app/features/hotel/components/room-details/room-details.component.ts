import { Component, Input, ViewChild, TemplateRef } from '@angular/core';
import {
  NgbCarousel,
  NgbCarouselConfig,
  NgbModal,
  NgbSlide,
  NgbSlideEvent,
  NgbSlideEventSource
} from "@ng-bootstrap/ng-bootstrap";
import { NgForOf } from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {LanguageClassDirective} from "../../../../shared/directives/language-class.directive";

@Component({
  selector: 'app-room-details',
  standalone: true,
  imports: [
    NgbCarousel,
    NgForOf,
    NgbSlide,
    TranslateModule,
    LanguageClassDirective
  ],
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss']
})
export class RoomDetailsComponent {
  @Input() images: string[] = [];
  @Input() description: string = '';
  @Input() name: string = '';
  @ViewChild('carousel', { static: true }) carousel!: NgbCarousel;
  @ViewChild('longContent', { static: true }) longContent!: TemplateRef<any>;

  public paused = false;
  public unpauseOnArrow = false;
  public pauseOnIndicator = false;
  public pauseOnHover = true;
  public pauseOnFocus = true;

  constructor(private modalService: NgbModal, config: NgbCarouselConfig) {
    config.showNavigationIndicators = false;
  }

  public openModal() {
    this.modalService.open(this.longContent, { scrollable: true, centered: true, size: 'lg' });
  }

  public togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  public onSlide(slideEvent: NgbSlideEvent) {
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
}
