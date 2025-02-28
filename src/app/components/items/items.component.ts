import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ItemsService, Products } from './items.service';
import { ItemComponent } from '../item/item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-items',
  imports: [CommonModule, ItemComponent],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css',
})
export class ItemsComponent implements OnInit, OnChanges {
  @Input()
  currentPage = 1;

  @Input()
  pageSize = 1;

  constructor(private readonly service: ItemsService) {}

  products: Products[] = [];

  ngOnInit() {
    this.service;
    this.loadProducts();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentPage'] && !changes['currentPage'].firstChange) {
      this.loadProducts();
    }
  }

  loadProducts(): void {
    this.service
      .getProducts(this.currentPage, this.pageSize)
      .subscribe((products: Products[]) => {
        this.products = [...new Set([...this.products, ...products])];
      });
  }
}
