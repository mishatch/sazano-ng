import { Component } from '@angular/core';
import { WineService } from "../../core/services/wine.service";
import { Wine } from "../../core/models/wine.model";
import { CartService } from "./services/cart.service";
import { RouterLink } from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {LanguageClassDirective} from "../../shared/directives/language-class.directive";
import {LoadingComponent} from "../../shared/components/loading/loading.component";

@Component({
  selector: 'app-buy-wine',
  standalone: true,
  imports: [RouterLink, TranslateModule, LanguageClassDirective, LoadingComponent],
  templateUrl: './buy-wine.component.html',
  styleUrls: ['./buy-wine.component.scss'],
})
export class BuyWineComponent {
  wines: Wine[] = [];
  isLoading = true;

  constructor(private wineService: WineService, private cartService: CartService) {
    this.wineService.getWines().subscribe((data) => {
      this.isLoading = false;
      this.wines = data;
    });
  }

  addToCart(wine: Wine) {
    this.cartService.addToCart(wine);
  }

  removeFromCart(wine: Wine) {
    this.cartService.decreaseQuantity(wine);
  }

  getWineQuantity(wine: Wine): number {
    const cartItem = this.cartService.getItem(wine);
    return cartItem ? cartItem.quantity : 0;
  }
}
