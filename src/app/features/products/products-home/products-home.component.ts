import { Component, ViewChild, ViewChildren } from '@angular/core';
import { Product } from '../../../shared/models/products';
import { ProductService } from '../../../core/services/product.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProductComponent } from '../components/product/product.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'shp-products-home',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './products-home.component.html',
  styleUrl: './products-home.component.scss'
})
export class ProductsHomeComponent {
  @ViewChild(ProductComponent) productComponent: ProductComponent;
  @ViewChildren(ProductComponent) childer: any;
  title = 'Online shopoing app';
  products: Product[];
  products$: Observable<Product[]>;

  constructor(private productService: ProductService, private router: Router) {
  }
  
  ngOnInit() {
    this.getProducts();   
  }

  ngAfterViewInit() {
    console.log("productComponent", this.productComponent);
    console.log("childer", this.childer);
  }

  getProducts(): void {
    this.products$ = this.productService.getProducts(); 
  }

  getProduct(product: Product): void {
    this.router.navigate(["products", product?.id]);
  }
}
