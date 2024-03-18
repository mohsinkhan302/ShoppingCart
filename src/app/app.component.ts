import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router'; 
import { ProductsHomeComponent } from './features/products/products-home/products-home.component';

@Component({
  selector: 'shp-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: "app.component.html",
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Online shopoing app';
  
  ngOnInit(): void {
    
  }
}
