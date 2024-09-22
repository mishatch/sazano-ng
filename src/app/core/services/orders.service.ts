import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private apiUrl: string = 'https://sazanowine-api-dev.azurewebsites.net/api';
  constructor(private http: HttpClient) { }

  public addOrder(order: any) {
    return this.http.post(`${this.apiUrl}/orders`, order);
  }
}
