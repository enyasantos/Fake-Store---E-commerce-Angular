import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Products } from '../items/items.service';
import { CartService } from '../cart/cart.service';
import { CartItem } from '../cart/cart-item.interface';

@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.component.html',
})
export class ItemComponent {
  @Input() product!: Products;

  constructor(private cartService: CartService) {}

  addItem(product: Products) {
    const newItem: CartItem = {
      ...product,
      quantity: 1,
    };

    this.cartService.addItem(newItem);
  }

  removeItem(productId: number) {
    this.cartService.removeItem(productId);
  }
}
