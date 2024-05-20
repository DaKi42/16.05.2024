import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private products: string[] = ['Товар 1', 'Товар 2', 'Товар 3', 'Товар 4'];

  constructor() { }

  getProducts(): string[] {
    return this.products;
  }
}
