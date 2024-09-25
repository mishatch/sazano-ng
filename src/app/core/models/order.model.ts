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

export interface Order {
  address: string;
  city: string;
  comment: string;
  customer: {
    name: string;
    email: string;
    phoneNumber: string;
    surName: string;
  };
  id: number;
  items: {
    itemId: number;
    priceAtOrder: number;
    quantity: number;
    wine: Wine;
  }[];
  orderDate: string;
  orderPrice: number;
  status: string;
  zipCode: string;
}
