import {Component, inject} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.scss'
})
export class RestaurantComponent {
  private modalService = inject(NgbModal);
  openScrollableContent(longContent: any) {
    this.modalService.open(longContent, { scrollable: true, centered: true });
  }
}
