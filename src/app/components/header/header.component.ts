import { Component, effect, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderService } from './header.service';
import { CommonModule } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapCart3 } from '@ng-icons/bootstrap-icons';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule, NgIcon],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  viewProviders: [provideIcons({ bootstrapCart3 })],
})
export class HeaderComponent implements OnInit {
  cartItems = 0;
  categories: string[] = [];

  constructor(
    private readonly service: HeaderService,
    public readonly cartService: CartService
  ) {}

  ngOnInit() {
    this.service.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }
}
