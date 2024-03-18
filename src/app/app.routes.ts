import { Routes } from '@angular/router';
import { ProductsHomeComponent } from './features/products/products-home/products-home.component';
import { ProductViewComponent } from './features/products/product-view/product-view.component';

export const routes: Routes = [
    {path: "", pathMatch: 'full', redirectTo: "/products"}, 
    { path: "products", component: ProductsHomeComponent},
    { path: "products/:id", component: ProductViewComponent}
];
