import {Wine} from "./wine.model";

export interface UserOrder {
  id: number;
  orderDate: string;
  customerId: string;
  items: OrderItem[];
  status: string;
  orderPrice: number;
}
export interface OrderItem {
  id: number;
  orderId: number;
  priceAtOrder: number;
  quantity: number;
  wine: Wine;
  wineId: number;
}
