import { Component, Input } from '@angular/core';
import { Product } from '../../../../shared/models/products';

 
@Component({
  selector: 'shp-product',
  standalone: true, 
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  @Input() product: Product;
}
 