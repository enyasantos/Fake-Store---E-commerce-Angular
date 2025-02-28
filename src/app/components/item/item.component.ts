import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Products } from '../items/items.service';

@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent {
  @Input() product!: Products;
  @Output() addToCart = new EventEmitter<{
    productId: number;
    quantity: number;
  }>();
}
