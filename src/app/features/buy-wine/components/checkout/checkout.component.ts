import {Component, OnDestroy, OnInit} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {LanguageClassDirective} from "../../../../shared/directives/language-class.directive";
import {Wine} from "../../../../core/models/wine.model";
import {CartService} from "../../services/cart.service";
import {Subscription} from "rxjs";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {OrdersService} from "../../../../core/services/orders.service";
import {CitiesService} from "../../services/cities.service";
import {City} from "../../models/city.model";
import {LanguageService} from "../../../../shared/services/language.service";
import {Router} from "@angular/router";
import {LoadingComponent} from "../../../../shared/components/loading/loading.component";

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    TranslateModule, LanguageClassDirective, ReactiveFormsModule, LoadingComponent
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent implements OnInit, OnDestroy {

  public checkoutForm!: FormGroup;
  public cartItems: { wine: Wine, quantity: number }[] = [];
  public cities: City[] = [];
  public isGeorgian: boolean = false;
  public isLoading: boolean = false;
  private cartSubscription!: Subscription;

  constructor(
    private cartService: CartService,
    private fb: FormBuilder,
    private orderService: OrdersService,
    private citiesService: CitiesService,
    private languageService: LanguageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getCartItems();
    this.initCheckoutForm();
    this.getCities();
    this.checkLanguage();
  }

  ngOnDestroy() {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  public onSubmit() {
    const formData = { ...this.checkoutForm.value };

    delete formData.cardHolderName;
    delete formData.cardNumber;
    delete formData.cvv;
    delete formData.expiryDate;

    this.isLoading = true;
    this.orderService.addOrder(formData).subscribe(
      (res) => {
        this.isLoading = false;
        this.cartService.clearCart();
        this.router.navigate(['/checkout-success']);
      },
      (error) => console.error(error)
    );
  }
  formatCardNumber(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\s+/g, '');

    if (value.length > 0) {
      value = value.match(/.{1,4}/g)?.join(' ') ?? value;
    }

    input.value = value;
    this.checkoutForm.get('cardNumber')?.setValue(value);
  }


  public formatExpiryDate(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');

    if (value.length >= 2) {
      value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }

    this.checkoutForm.get('expiryDate')?.setValue(value);
  }

  public getTotalAmount(): number {
    return this.cartItems.reduce((sum, item) => sum + (item.wine.price * item.quantity), 0);
  }

  public getTotalQuantity(): number {
    return this.cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }

  get cardNumber() {
    return this.checkoutForm.get('cardNumber');
  }
  get expiryDate() {
    return this.checkoutForm.get('expiryDate');
  }

  get cvv() {
    return this.checkoutForm.get('cvv');
  }

  get cardHolderName() {
    return this.checkoutForm.get('cardHolderName');
  }

  get address() {
    return this.checkoutForm.get('address');
  }

  get city() {
    return this.checkoutForm.get('city');
  }

  get zip() {
    return this.checkoutForm.get('zip');
  }

  get name() {
    return this.checkoutForm.get('cardHolderName');
  }


  private getCartItems() {
    this.cartSubscription = this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
  }

  private initCheckoutForm() {
    this.checkoutForm = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{4} \d{4} \d{4} \d{4}$/)]],
      expiryDate: ['', [Validators.required, Validators.pattern(/^\d{2}\/\d{2}$/)]],
      cvv: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]],
      cardHolderName: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', Validators.required],
      zip: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]],
      comment: [''],
      items: this.fb.array(this.cartItems.map(item => this.fb.group({
        wineId: item.wine.id,
        quantity: item.quantity
      })))
    });
  }
  private getCities() {
    this.citiesService.getCities().subscribe(
      (cities: {
        cities: City[]
      }) => {
        this.cities = cities.cities;
        console.log(this.cities);
      },
      (error) => console.error(error)
    );
  }
  private checkLanguage() {
    this.languageService.language$.subscribe(lang => {
      this.isGeorgian = lang === 'geo';
    });
  }
}
