import { Component } from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Wine} from "../../../../core/models/wine.model";
import {NgFor, NgIf} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {LanguageClassDirective} from "../../../../shared/directives/language-class.directive";

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [TranslateModule, LanguageClassDirective],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent {
  cartItems: { wine: Wine, quantity: number }[] = [];

  constructor(private cartService: CartService) {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
  }

  increaseQuantity(wine: Wine) {
    this.cartService.addToCart(wine);
  }

  decreaseQuantity(wine: Wine) {
    this.cartService.decreaseQuantity(wine);
  }

  clearCart() {
    this.cartService.clearCart();
  }

  getTotalAmount(): number {
    return this.cartItems.reduce((sum, item) => sum + (item.wine.price * item.quantity), 0);
  }
}
