import {Component, OnDestroy, OnInit, TemplateRef} from '@angular/core';
import {Wine} from "../../../../core/models/wine.model";
import {WineService} from "../../../../core/services/wine.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Router, RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
  ],
  templateUrl: './admin-products.component.html',
  styleUrl: './admin-products.component.scss'
})
export class AdminProductsComponent implements OnInit, OnDestroy{
  public wineId: number | undefined;
  public wines: Wine[] = [];
  public searchTerm: string = '';

  private subscription = new Subscription();

  constructor(
    private wineService: WineService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.getWines();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public editWine(id: number | undefined) {
    this.router.navigate(['/admin/wine/edit', id]);
  }

  public deleteWine() {
    if (this.wineId) {
      this.subscription.add(
        this.wineService.deleteWine(this.wineId).subscribe(() => {
          this.wines = this.wines.filter(wine => wine.id !== this.wineId);
        })
      );
    }
  }

  public filteredWines(): Wine[] {
    if (!this.searchTerm) {
      return this.wines;
    }
    const search = this.searchTerm.toLowerCase();
    return this.wines.filter(wine => wine.name.toLowerCase().includes(search) || wine.vintageYear.toString().includes(search));
  }

  public openModal(content: TemplateRef<any>, wineId: number | undefined) {
    this.modalService.open(content);
    this.wineId = wineId;
  }

  private getWines(){
    this.subscription.add(
      this.wineService.getWines().subscribe((data) => {
        this.wines = data;
      })
    );
  }
}
