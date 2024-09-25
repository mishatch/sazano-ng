import {Component, OnDestroy, OnInit} from '@angular/core';
import {OrdersService} from "../../../../core/services/orders.service";
import {DatePipe} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {Order} from "../../../../core/models/order.model";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {OrderDetailsComponent} from "../order-details/order-details.component";
import {Subscription} from "rxjs";
import {LoadingComponent} from "../../../../shared/components/loading/loading.component";
@Component({
  selector: 'app-completed-orders',
  standalone: true,
  imports: [
    DatePipe,
    TranslateModule,
    LoadingComponent
  ],
  templateUrl: './completed-orders.component.html',
  styleUrl: './completed-orders.component.scss'
})
export class CompletedOrdersComponent implements OnInit, OnDestroy {
  public completedOrders: Order[] = [];
  public isLoading = false;

  private subscription = new Subscription();

  constructor(private orderService: OrdersService, private modalService: NgbModal) {}

  ngOnInit() {
    this.getSentOrders();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public viewOrderDetails(order: Order) {
    const modalRef = this.modalService.open(OrderDetailsComponent, { centered: true });
    modalRef.componentInstance.order = order;
  }


  public changeOrderStatus(id: number) {
    const newStatus = 'Pending';
    const updatedData = { status: newStatus };
    this.isLoading = true;
    this.subscription.add(
      this.orderService.updateOrderStatus(id, updatedData).subscribe(
        () => {
          this.getSentOrders();
          this.isLoading = false;
        },
        (error) => {
          console.log('Error updating order status:', error);
          this.isLoading = false;
        }
      )
    );
  }

  private getSentOrders() {
    this.subscription.add(
      this.orderService.orders$.subscribe(orders => {
        this.completedOrders = orders.filter(order => order.status === 'Sent');
      })
    );
  }

}
