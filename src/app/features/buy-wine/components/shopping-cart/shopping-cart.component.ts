import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from "../../services/cart.service";
import { Wine } from "../../../../core/models/wine.model";
import { TranslateModule } from "@ngx-translate/core";
import { LanguageClassDirective } from "../../../../shared/directives/language-class.directive";

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [TranslateModule, LanguageClassDirective],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent implements OnInit, OnDestroy {

  cartItems: { wine: Wine, quantity: number }[] = [];

  private cartSubscription: Subscription | undefined;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.getCartItems();
  }

  ngOnDestroy() {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
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

  private getCartItems() {
    this.cartSubscription = this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
  }
}
