import {Component, OnDestroy, OnInit} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {OrdersService} from "../../../../../core/services/orders.service";
import {DatePipe} from "@angular/common";
import {Subscription} from "rxjs";
import {Order} from "../../../../../core/models/order.model";
import {OrderDetailsComponent} from "../order-details/order-details.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-pending-orders',
  standalone: true,
  imports: [TranslateModule, DatePipe],
  templateUrl: './pending-orders.component.html',
  styleUrl: './pending-orders.component.scss'
})
export class PendingOrdersComponent implements OnInit, OnDestroy {
  public pendingOrders: Order[] = [];

  private subscription = new Subscription();

  constructor(private orderService: OrdersService, private modalService: NgbModal) {}

  ngOnInit() {
    this.getPendingOrders();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public viewOrderDetails(order: Order) {
    const modalRef = this.modalService.open(OrderDetailsComponent, { centered: true });
    modalRef.componentInstance.order = order;
  }

  public changeOrderStatus(id: number) {
    const newStatus = 'Sent';
    const updatedData = { status: newStatus };
    this.subscription.add(
      this.orderService.updateOrderStatus(id, updatedData).subscribe(
        () => {
          this.getPendingOrders();
        },
        (err) => {
          console.log('Error updating order status', err);
        }
      )
    );
  }

  private getPendingOrders() {

    this.subscription.add(
      this.orderService.orders$.subscribe(orders => {
        this.pendingOrders = orders.filter(order => order.status === 'Pending');
      })
    );
  }
}

