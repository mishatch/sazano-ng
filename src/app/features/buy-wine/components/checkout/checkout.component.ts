import {Component, OnDestroy, OnInit} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {LanguageClassDirective} from "../../../../shared/directives/language-class.directive";
import {Wine} from "../../../../core/models/wine.model";
import {CartService} from "../../services/cart.service";
import {Subscription} from "rxjs";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {OrdersService} from "../../../../core/services/orders.service";

@Component({
  selector: 'app-checkout',
  standalone: true,
    imports: [
        TranslateModule, LanguageClassDirective, ReactiveFormsModule
    ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent implements OnInit, OnDestroy {

  public checkoutForm!: FormGroup;
  public cartItems: { wine: Wine, quantity: number }[] = [];

  private cartSubscription!: Subscription;

  constructor(private cartService: CartService, private fb: FormBuilder, private orderService: OrdersService) { }

  ngOnInit() {
    this.getCartItems();
    this.initCheckoutForm();
  }

  ngOnDestroy() {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  public onSubmit() {
    const formData = { ...this.checkoutForm.value };

    // Remove sensitive fields
    delete formData.cardHolderName;
    delete formData.cardNumber;
    delete formData.cvv;
    delete formData.expiryDate;
    console.log(formData);
    // Now post the sanitized data
    this.orderService.addOrder(formData).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => console.error(error)
    );
  }

  public getTotalAmount(): number {
    return this.cartItems.reduce((sum, item) => sum + (item.wine.price * item.quantity), 0);
  }

  public getTotalQuantity(): number {
    return this.cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }

  private getCartItems() {
    this.cartSubscription = this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      console.log(this.cartItems)
    });
  }

  private initCheckoutForm() {
    this.checkoutForm = this.fb.group({
      cardNumber: [''],
      expiryDate: [''],
      cvv: [''],
      cardHolderName: [''],
      address: [''],
      city: [''],
      zip: [''],
      comment: [''],
      items: this.fb.array(this.cartItems.map(item => this.fb.group({
        wineId: item.wine.id,
        quantity: item.quantity
      })))
    });
  }
}
