import {Component, Input} from '@angular/core';
import {Order} from "../../../../../core/models/order.model";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {DatePipe, NgClass} from "@angular/common";
import {OrdersService} from "../../../../../core/services/orders.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [
    DatePipe,
    NgClass,
  ],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss'
})
export class OrderDetailsComponent {
  @Input() order!: Order;

  private subscription = new Subscription();

  constructor(private orderService: OrdersService, public activeModal: NgbActiveModal) {}

  public changeOrderStatus(id: number, status: string): void {
    const newStatus = status === 'Pending' ? 'Sent' : 'Pending';
    const updatedData = { status: newStatus };

    this.subscription.add(
      this.orderService.updateOrderStatus(id, updatedData).subscribe(
        () => {
          this.activeModal.close();
        },
        (err) => {
          console.log('Error updating order status', err);
        }
      )
    );
  }
}
