import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../core/services/product.service';
import { Product } from '../../../shared/models/products';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../components/product/product.component';
import { ActivatedRoute } from '@angular/router';
 

@Component({
  selector: 'shp-product-view',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.scss',

})

export class ProductViewComponent implements OnInit {
  constructor(private productService: ProductService, acitvatedRoute: ActivatedRoute) {
    acitvatedRoute.params.subscribe(x => {
       this.getProdcut(x['id'])
    })
   }

  product: Product;

  ngOnInit(): void { 
  }

  getProdcut(id: number) {
    this.productService.getSingleProduct(id)
      .subscribe(x => {
        this.product = x;
      })
  }
}
