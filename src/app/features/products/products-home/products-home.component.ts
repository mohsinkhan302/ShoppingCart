import { Component } from '@angular/core';
import { Product } from '../../../shared/models/products';
import { ProductService } from '../../../core/services/product.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'shp-products-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-home.component.html',
  styleUrl: './products-home.component.scss'
})
export class ProductsHomeComponent {
  title = 'Online shopoing app';
  products: Product[];

  constructor(private productService: ProductService, private router: Router) { 
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.products = this.productService.getProducts();
  }

  getProduct(product: Product): void {
    this.router.navigate([""]);
  }
}
