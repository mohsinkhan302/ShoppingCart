import { Injectable } from "@angular/core";
import { FakeDataGenerator } from "the_dev_kit";
import { Product } from "../../shared/models/products";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class ProductService { 
    public getProducts(): Observable<Product[]> {
        return of(FakeDataGenerator.generateProducts(10));
    }

    public getSingleProduct(id: number): Observable<Product> {
        const products: Product[] = FakeDataGenerator.generateProducts(10);

        const prodcut = products?.find(x => x.id === id) || products[0];
        return of(prodcut);
    }
}