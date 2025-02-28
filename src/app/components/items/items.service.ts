import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

export interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor(private readonly http: HttpClient) {}

  getProducts(currentPage: number, pageSize: number) {
    //total products = 20
    const limit = Math.ceil(currentPage * pageSize);
    return this.http
      .get<Products[]>(`https://fakestoreapi.com/products?limit=${limit}`)
      .pipe(
        map((products) => {
          const startIndex = (currentPage - 1) * pageSize;
          const endIndex = startIndex + pageSize;
          return products.slice(startIndex, endIndex);
        })
      );
  }
}
