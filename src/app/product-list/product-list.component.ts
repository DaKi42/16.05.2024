import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent implements OnInit {

  products: string[] = [];
  filteredProducts: string[] = [];

  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = [...this.products];
  }

  filterProducts(event: Event): void {
    const keyword = (event.target as HTMLInputElement).value;
    if (!keyword) {
      this.filteredProducts = [...this.products]; 
    } else {
      this.filteredProducts = this.products.filter(product =>
        product.toLowerCase().includes(keyword.toLowerCase())
      );
    }
  }

}