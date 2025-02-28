import { Component, EventEmitter, Output } from '@angular/core';
import { CartService } from './cart.service';
import { CommonModule } from '@angular/common';
import { Products } from '../items/items.service';
import { CartItem } from './cart-item.interface';
import { bootstrapCart3, bootstrapTrash } from '@ng-icons/bootstrap-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, NgIcon],
  templateUrl: './cart.component.html',
  viewProviders: [provideIcons({ bootstrapTrash })],
})
export class CartComponent {
  @Output() closeCart = new EventEmitter<void>();
  constructor(public cartService: CartService) {}

  removeItem(productId: number) {
    this.cartService.dropItem(productId);
  }

  dropItem(productId: number) {
    this.cartService.dropItem(productId);
  }

  addItem(product: Products) {
    const newItem: CartItem = {
      ...product,
      quantity: 1,
    };

    this.cartService.addItem(newItem);
  }
}
