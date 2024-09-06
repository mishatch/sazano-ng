import { Component, OnInit, OnDestroy } from '@angular/core';
import { WineService } from "../../core/services/wine.service";
import { Wine } from "../../core/models/wine.model";
import { CartService } from "./services/cart.service";
import { RouterLink } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { LanguageClassDirective } from "../../shared/directives/language-class.directive";
import { LoadingComponent } from "../../shared/components/loading/loading.component";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-buy-wine',
  standalone: true,
  imports: [RouterLink, TranslateModule, LanguageClassDirective, LoadingComponent],
  templateUrl: './buy-wine.component.html',
  styleUrls: ['./buy-wine.component.scss'],
})
export class BuyWineComponent implements OnInit, OnDestroy {

  public wines: Wine[] = [];
  public isLoading: boolean = true;
  public totalQuantity: number = 0;

  private subscriptions: Subscription = new Subscription();

  constructor(
    private wineService: WineService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.loadWines();
    this.trackItemsQuantity();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public addToCart(wine: Wine): void {
    this.cartService.addToCart(wine);
  }

  public removeFromCart(wine: Wine): void {
    this.cartService.decreaseQuantity(wine);
  }

  public getWineQuantity(wine: Wine): number {
    const cartItem = this.cartService.getItem(wine);
    return cartItem ? cartItem.quantity : 0;
  }

  private loadWines(): void {
    const wineSubscription = this.wineService.getWines().subscribe((data) => {
      this.isLoading = false;
      this.wines = data;
    });
    this.subscriptions.add(wineSubscription);
  }

  private trackItemsQuantity(): void {
    const quantitySubscription = this.cartService.getTotalQuantity().subscribe(total => {
      this.totalQuantity = total;
    });
    this.subscriptions.add(quantitySubscription);
  }
}
