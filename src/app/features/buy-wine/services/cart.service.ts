import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Wine } from "../../../core/models/wine.model";

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems = new BehaviorSubject<{ wine: Wine, quantity: number }[]>(this.loadCartFromLocalStorage());
  cartItems$ = this.cartItems.asObservable();

  constructor() {
    this.cartItems$.subscribe(items => {
      this.saveCartToLocalStorage(items);
    });
  }

  addToCart(wine: Wine) {
    const currentItems = this.cartItems.getValue();
    const itemIndex = currentItems.findIndex(item => item.wine.id === wine.id);
    if (itemIndex > -1) {
      currentItems[itemIndex].quantity++;
    } else {
      currentItems.push({ wine, quantity: 1 });
    }
    this.cartItems.next(currentItems);
  }

  decreaseQuantity(wine: Wine) {
    const currentItems = this.cartItems.getValue();
    const itemIndex = currentItems.findIndex(item => item.wine.id === wine.id);
    if (itemIndex > -1) {
      if (currentItems[itemIndex].quantity > 1) {
        currentItems[itemIndex].quantity--;
        this.cartItems.next(currentItems);
      } else {
        this.removeFromCart(wine);
      }
    }
  }

  removeFromCart(wine: Wine) {
    const currentItems = this.cartItems.getValue();
    const updatedItems = currentItems.filter(item => item.wine.id !== wine.id);
    this.cartItems.next(updatedItems);
  }

  clearCart() {
    this.cartItems.next([]);
  }

  getItem(wine: Wine): { wine: Wine, quantity: number } | undefined {
    return this.cartItems.getValue().find(item => item.wine.id === wine.id);
  }

  private saveCartToLocalStorage(items: { wine: Wine, quantity: number }[]) {
    localStorage.setItem('cartItems', JSON.stringify(items));
  }

  private loadCartFromLocalStorage(): { wine: Wine, quantity: number }[] {
    const storedCart = localStorage.getItem('cartItems');
    return storedCart ? JSON.parse(storedCart) : [];
  }
}
