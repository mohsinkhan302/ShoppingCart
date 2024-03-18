import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../core/services/product.service';
import { Product } from '../../../shared/models/products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'shp-product-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.scss'
})

export class ProductViewComponent implements OnInit {
  constructor(private productService: ProductService){}

  product: Product;

  ngOnInit(): void {
    // get id from URL params
     this.product = this.productService.getSingleProduct(1)
  }

  

}
