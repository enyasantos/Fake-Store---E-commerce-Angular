import { Products } from '../items/items.service';

export interface CartItem extends Products {
  quantity: number;
}

export interface ShoppingCart {
  items: CartItem[];
  totalAmount: number;
  totalItemsCount: number;
}
