import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, finalize, Observable, tap} from "rxjs";
import {Order, UserOrder} from "../models/order.model";
import {LoadingService} from "./loading.service";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private apiUrl: string = 'https://sazanowine-api-dev.azurewebsites.net/api';

  private ordersSubject = new BehaviorSubject<any[]>([]);
  orders$ = this.ordersSubject.asObservable();

  storeOrders(orders: Order[]) {
    this.ordersSubject.next(orders);
  }

  constructor(private http: HttpClient, private loadingService: LoadingService) { }

  public addOrder(order: any) {
    return this.http.post(`${this.apiUrl}/orders`, order);
  }

  public getUserOrders(): Observable<UserOrder[]> {
    return this.http.get<UserOrder[]>(`${this.apiUrl}/identity/userOrders`);
  }

  public getAllOrders(): Observable<Order[]> {
    this.loadingService.show();
    return this.http.get<Order[]>(`${this.apiUrl}/orders`).pipe(
      tap(() => {}),
      finalize(() => {
        this.loadingService.hide();
      })
    );
  }

  public updateOrderStatus(id: number, status: { status: string }) {
    this.loadingService.show();
    return this.http.patch(`${this.apiUrl}/orders/${id}`, status).pipe(
      tap(() => {
        const updatedOrders = this.ordersSubject.getValue().map(order => {
          if (order.id === id) {
            return { ...order, ...status };
          }
          return order;
        });
        this.ordersSubject.next(updatedOrders);
      }),
      finalize(() => {
        this.loadingService.hide();
      })
    );
  }
}
