import { computed, Injectable, signal } from '@angular/core';
import { CartItem, ShoppingCart } from './cart-item.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<ShoppingCart>({
    items: [],
    totalAmount: this.calculateTotalAmount([]),
    totalItemsCount: 0,
  });

  constructor() {}
  private calculateTotalAmount(items: CartItem[]): number {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  addItem(item: CartItem) {
    this.cart.update((currentCart) => {
      const existingItem = currentCart.items.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        currentCart.items.push(item);
      }

      currentCart.totalAmount += item.price * item.quantity;
      currentCart.totalItemsCount += item.quantity;
      return currentCart;
    });
  }

  removeItem(productId: number) {
    this.cart.update((currentCart) => {
      const item = currentCart.items.find((i) => i.id === productId);

      if (item) {
        currentCart.totalAmount -= item.price * item.quantity;
        currentCart.items = currentCart.items.filter((i) => i.id !== productId);
        currentCart.totalItemsCount -= 1;
      }

      return currentCart;
    });
  }

  dropItem(productId: number) {
    this.cart.update((currentCart) => {
      const item = currentCart.items.find((i) => i.id === productId);

      if (item) {
        currentCart.totalAmount -= item.price;
        currentCart.totalItemsCount -= 1;
        item.quantity -= 1;
        if (item.quantity === 0) {
          currentCart.items = currentCart.items.filter(
            (i) => i.id !== productId
          );
        }
      }

      return currentCart;
    });
  }
}
