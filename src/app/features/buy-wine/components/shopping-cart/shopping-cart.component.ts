import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from "../../services/cart.service";
import { Wine } from "../../../../core/models/wine.model";
import { TranslateModule } from "@ngx-translate/core";
import { LanguageClassDirective } from "../../../../shared/directives/language-class.directive";
import { AuthComponent } from "../../../auth/auth.component";
import { AuthService } from "../../../../core/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [TranslateModule, LanguageClassDirective, AuthComponent],
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {

  cartItems: { wine: Wine, quantity: number }[] = [];
  isLoggedIn: boolean = false;

  @ViewChild('authModal') authModal!: AuthComponent;

  private cartSubscription: Subscription | undefined;

  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getCartItems();
    this.checkLoginStatus();
  }

  ngOnDestroy() {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  public   scrollOnTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  public increaseQuantity(wine: Wine) {
    this.cartService.addToCart(wine);
  }

  public decreaseQuantity(wine: Wine) {
    this.cartService.decreaseQuantity(wine);
  }

  public removeFromCart(wine: Wine) {
    this.cartService.removeFromCart(wine);
  }

  public clearCart() {
    this.cartService.clearCart();
  }

  public getTotalAmount(): number {
    return this.cartItems.reduce((sum, item) => sum + (item.wine.price * item.quantity), 0);
  }

  public getTotalQuantity(): number {
    return this.cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }

  public handleCheckout() {
    if (this.isLoggedIn) {
      this.router.navigate(['/checkout']);
    } else {
      this.openAuthModal();
    }
  }

  public openAuthModal() {
    if (this.authModal) {
      this.authModal.openModal();
    }
  }

  private getCartItems() {
    this.cartSubscription = this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
  }

  private checkLoginStatus() {
    this.authService.isLoggedIn().subscribe(status => {
      this.isLoggedIn = status;
    });
  }
}
