export interface Wine {
  name: string;
  price: number;
  stockQuantity: number;
  description: string;
  forSale: boolean;
  imageUrl: string;
  vintageYear: number;
  id?: number;
}
