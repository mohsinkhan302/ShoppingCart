import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../core/services/product.service';
import { Product } from '../../../shared/models/products';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../components/product/product.component';

@Component({
  selector: 'shp-product-view',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.scss'
})

export class ProductViewComponent implements OnInit {
  constructor(private productService: ProductService){}

  product: Product;

  ngOnInit(): void {
    // TODO: get id from URL params repace hard-coded id
     this.product = this.productService.getSingleProduct(1)
  }

  

}
