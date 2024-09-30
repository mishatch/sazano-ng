import {Description} from "./description.interface";

export interface Room {
  cardImage: string;
  description: Description;
  id: number;
  modalImages: string[];
  name: string;
  price: number;
}
