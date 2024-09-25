import {Component, OnDestroy, OnInit} from '@angular/core';
import {OrdersService} from "../../../../core/services/orders.service";
import {DatePipe} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {RouterLink, RouterOutlet} from "@angular/router";
import {Order} from "../../../../core/models/order.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-admin-orders',
  standalone: true,
  imports: [
    DatePipe,
    TranslateModule,
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './admin-orders.component.html',
  styleUrl: './admin-orders.component.scss'
})
export class AdminOrdersComponent implements OnInit, OnDestroy{
  public orders: Order[] = [];

  private subscription = new Subscription();

  constructor(private orderService: OrdersService) {}

  ngOnInit() {
   this.getAllOrders();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  private getAllOrders() {
    this.subscription.add(
      this.orderService.getAllOrders().subscribe(
        (res: Order[]) => {
          this.orders = res;
          this.orderService.storeOrders(res);
        },
        (error) => {
          console.log(error);
        }
      )
    );
  }

}
