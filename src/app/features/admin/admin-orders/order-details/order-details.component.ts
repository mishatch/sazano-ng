import {Component, Input} from '@angular/core';
import {Order} from "../../../../core/models/order.model";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {DatePipe, NgClass} from "@angular/common";
import {OrdersService} from "../../../../core/services/orders.service";
import {LoadingComponent} from "../../../../shared/components/loading/loading.component";

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [
    DatePipe,
    NgClass,
    LoadingComponent
  ],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss'
})
export class OrderDetailsComponent {
  @Input() order!: Order;

  public isLoading = false;

  constructor(private orderService: OrdersService, public activeModal: NgbActiveModal) {}

  public changeOrderStatus(id: number, status: string): void {
    const newStatus = status === 'Pending' ? 'Sent' : 'Pending';
    const updatedData = { status: newStatus };

    this.isLoading = true;
    this.orderService.updateOrderStatus(id, updatedData).subscribe(
      () => {
        this.activeModal.close();
        this.isLoading = false;
        },
      (error: any) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }
}
