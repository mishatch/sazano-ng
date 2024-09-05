import {Component, TemplateRef, inject} from '@angular/core';
import {Wine} from "../../../core/models/wine.model";
import {WineService} from "../../../core/services/wine.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [],
  templateUrl: './admin-products.component.html',
  styleUrl: './admin-products.component.scss'
})
export class AdminProductsComponent {
  private modalService = inject(NgbModal);
  wineId: number | undefined;
  openModal(content: TemplateRef<any>, wineId: number | undefined) {
    this.modalService.open(content);
    this.wineId = wineId;
  }
  wines: Wine[] = [];
  isLoading = true;
  constructor(private wineService: WineService) {
    this.wineService.getWines().subscribe((data) => {
      this.isLoading = false;
      this.wines = data;
    });
  }
  deleteWine() {
      this.wineService.deleteWine(this.wineId).subscribe(() => {
        this.wines = this.wines.filter(wine => wine.id !== this.wineId);
      });
    }
}
