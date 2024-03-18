import { Injectable } from "@angular/core";
import { FakeDataGenerator } from "the_dev_kit";
import { Product } from "../../shared/models/products";

@Injectable({
    providedIn: "root"
})
export class ProductService {
    // Api 
    public getProducts(): Product[] {
        return FakeDataGenerator.generateProducts(10);
    }

    public getSingleProduct(id: number): Product {
        const products: Product[] = FakeDataGenerator.generateProducts(10);

        return products?.find(x => x.id === id) || products[0]; 
    } 
}