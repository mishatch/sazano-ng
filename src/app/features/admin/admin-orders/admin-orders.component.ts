import {Component, OnDestroy, OnInit} from '@angular/core';
import {OrdersService} from "../../../core/services/orders.service";
import {DatePipe} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {RouterLink, RouterOutlet} from "@angular/router";
import {Order} from "../../../core/models/order.model";
import {LoadingComponent} from "../../../shared/components/loading/loading.component";

@Component({
  selector: 'app-admin-orders',
  standalone: true,
  imports: [
    DatePipe,
    TranslateModule,
    RouterOutlet,
    RouterLink,
    LoadingComponent
  ],
  templateUrl: './admin-orders.component.html',
  styleUrl: './admin-orders.component.scss'
})
export class AdminOrdersComponent implements OnInit, OnDestroy{
  public orders: Order[] = [];
  public isLoading = true;

  constructor(private orderService: OrdersService) {}

  ngOnInit() {
   this.getAllOrders();
  }
  ngOnDestroy() {

  }


  private getAllOrders() {
    this.orderService.getAllOrders().subscribe(
      (res: any) => {
        this.orders = res;
        this.orderService.storeOrders(res);
        this.isLoading = false;
    },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }



}
