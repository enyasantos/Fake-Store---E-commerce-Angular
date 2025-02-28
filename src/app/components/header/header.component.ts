import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderService } from './header.service';
import { CommonModule } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapCart3 } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule, NgIcon],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  viewProviders: [provideIcons({ bootstrapCart3 })],
})
export class HeaderComponent {
  constructor(private readonly service: HeaderService) {}

  categories: string[] = [];
  cartItems: number = 0;

  ngOnInit() {
    this.service.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }
}
