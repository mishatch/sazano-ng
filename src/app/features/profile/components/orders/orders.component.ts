import {Component, OnDestroy, OnInit} from '@angular/core';
import {OrdersService} from "../../../../core/services/orders.service";
import {UserOrder} from "../../../../core/models/order.model";
import {Subscription} from "rxjs";
import {DatePipe} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {LanguageClassDirective} from "../../../../shared/directives/language-class.directive";

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [
    DatePipe,
    RouterLink,
    TranslateModule,
    LanguageClassDirective],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit, OnDestroy{
  public orders: UserOrder[] = [];

  private subscription = new Subscription();

  constructor(private orderService: OrdersService, private router: Router) { }

  ngOnInit() {
    this.getOrders();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public viewOrderDetails(order: UserOrder): void {
    this.router.navigate(['/profile/order', order.id], {
      state: { order }
    });
  }

  public getOrders() {
    this.subscription.add(
      this.orderService.getUserOrders().subscribe(
        (data: UserOrder[]) => {
          this.orders = data;
        },
        (error) => {
          console.log(error);
        }
      )
  );
  }
}
