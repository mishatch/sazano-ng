import {Component, OnDestroy, OnInit} from '@angular/core';
import {OrdersService} from "../../../core/services/orders.service";
import {DatePipe} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-admin-orders',
  standalone: true,
  imports: [
    DatePipe,
    TranslateModule
  ],
  templateUrl: './admin-orders.component.html',
  styleUrl: './admin-orders.component.scss'
})
export class AdminOrdersComponent implements OnInit, OnDestroy{
  orders: any;
  filteredOrders: any;

  constructor(private orderService: OrdersService) {}

  ngOnInit() {
   this.getAllOrders();

  }
  ngOnDestroy() {

  }

  public viewOrderDetails(order: any) {

  }
  public showPendingOrders() {
    this.filteredOrders = this.orders.filter((order: any) => {
      return order.status === 'Pending';
    });
  }

  public showCompletedOrders() {
    this.filteredOrders = this.orders.filter((order: any) => {
      return order.status === 'Sent';
    });
  }

  public changeOrderStatus(id: number, status: string) {
    const newStatus = status === 'Pending' ? 'Sent' : 'Pending';
    const updatedData = {
      status: newStatus
    };
    this.orderService.updateOrderStatus(id, updatedData).subscribe(
      () => {
        const currentPage = status === 'Pending' ? 'Pending' : 'Sent';
        this.getAllOrders(currentPage);
      },
      (error: any) => {
        console.log(error);
        console.log(updatedData);
      }
    );
  }

  private getAllOrders(currentPage?: string) {
    this.orderService.getAllOrders().subscribe((res: any) => {
      this.orders = res;
      if (currentPage === 'Pending') {
        this.showPendingOrders()
      } else {
        this.showCompletedOrders()
      }
      console.log(res)
    });
  }



}
