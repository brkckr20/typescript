import { Product } from "./Product";

export class SimpleDataSource{
    private products: Array<Product>;
    constructor() {
        this.products = new Array<Product>(
            new Product(1, "apple", "telefon", 1000),
            new Product(2, "apple 1", "telefon", 1200),
            new Product(3, "apple 2", "telefon", 1400),
            new Product(4, "apple 3", "telefon", 1600),
        );
    }

    getProducts(): Product[]{
        return this.products;
    }
}
