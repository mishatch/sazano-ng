import {Component, OnDestroy, OnInit} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {OrdersService} from "../../../../core/services/orders.service";
import {DatePipe} from "@angular/common";
import {Subscription} from "rxjs";
import {Order} from "../../../../core/models/order.model";
import {OrderDetailsComponent} from "../order-details/order-details.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {LoadingComponent} from "../../../../shared/components/loading/loading.component";

@Component({
  selector: 'app-pending-orders',
  standalone: true,
  imports: [TranslateModule, DatePipe, LoadingComponent],
  templateUrl: './pending-orders.component.html',
  styleUrl: './pending-orders.component.scss'
})
export class PendingOrdersComponent implements OnInit, OnDestroy {
  public pendingOrders: Order[] = [];
  public isLoading = false;

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
    this.isLoading = true;
    this.subscription.add(
      this.orderService.updateOrderStatus(id, updatedData).subscribe(
        () => {
          this.getPendingOrders();
          this.isLoading = false;
        },
        (error) => {
          console.log('Error updating order status:', error);
          this.isLoading = false;
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

