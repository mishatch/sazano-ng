import {Component, OnDestroy, OnInit} from '@angular/core';
import {OrdersService} from "../../../core/services/orders.service";
import {UserOrder} from "../../../core/models/order.model";
import {Subscription} from "rxjs";
import {DatePipe} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {LanguageClassDirective} from "../../../shared/directives/language-class.directive";
import {LoadingComponent} from "../../../shared/components/loading/loading.component";

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [DatePipe, RouterLink, TranslateModule, LanguageClassDirective, LoadingComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit, OnDestroy{
  public orders: UserOrder[] = [];
  private subscriptions: Subscription[] = [];
  public isLoading = true;
  constructor(private orderService: OrdersService, private router: Router) { }

  ngOnInit() {
    this.getOrders();
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  public viewOrderDetails(order: UserOrder): void {
    this.router.navigate(['/profile/order', order.id], {
      state: { order }
    });
  }

  public getOrders() {
    const orderSubscription = this.orderService.getUserOrders().subscribe(
      (data: UserOrder[]) => {
        this.orders = data;
        this.isLoading = false;
        console.log(data);
      },
      (error: any) => {
        console.log(error);
        this.isLoading = false;
      }
    );

    this.subscriptions.push(orderSubscription);
  }
}
