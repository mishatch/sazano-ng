import {Component, TemplateRef} from '@angular/core';
import {Wine} from "../../../core/models/wine.model";
import {WineService} from "../../../core/services/wine.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Router, RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {LoadingComponent} from "../../../shared/components/loading/loading.component";

@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    LoadingComponent
  ],
  templateUrl: './admin-products.component.html',
  styleUrl: './admin-products.component.scss'
})
export class AdminProductsComponent {
  wineId: number | undefined;
  wines: Wine[] = [];
  isLoading = true;
  searchTerm: string = '';
  constructor(private wineService: WineService, private router: Router, private modalService: NgbModal) {
    this.wineService.getWines().subscribe((data) => {
      this.isLoading = false;
      this.wines = data;
    });
  }

  editWine(id: number | undefined) {
    this.router.navigate(['/admin/wine/edit', id]);
  }

  deleteWine() {
    if (this.wineId) {
      this.isLoading = true;
      this.wineService.deleteWine(this.wineId).subscribe(() => {
        this.wines = this.wines.filter(wine => wine.id !== this.wineId);
        this.isLoading = false;
      });
    }
  }
  filteredWines(): Wine[] {
    if (!this.searchTerm) {
      return this.wines;
    }
    const search = this.searchTerm.toLowerCase();
    return this.wines.filter(wine => wine.name.toLowerCase().includes(search));
  }
  openModal(content: TemplateRef<any>, wineId: number | undefined) {
    this.modalService.open(content);
    this.wineId = wineId;
  }
}
