import {Component, OnInit} from '@angular/core';
import {UserOrder} from "../../../core/models/order.model";
import {Router, RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {LanguageClassDirective} from "../../../shared/directives/language-class.directive";
@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [
    TranslateModule,
    LanguageClassDirective,
    RouterLink
  ],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss'
})
export class OrderDetailsComponent implements OnInit {
  public order!: UserOrder;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getOrderDetails();
  }

  private getOrderDetails(): void {
    this.order = window.history.state.order;
  }
}
