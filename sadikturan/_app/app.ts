import { Product } from "./Product";
import { ProductService } from "./ProductService";

let _productService = new ProductService();

let result;


result = _productService.getById(2);

let p = new Product();

p.id = 25;
p.name = "samsung updated";
p.category = "phone";
p.price = 10000;
_productService.saveProduct(p);
// _productService.deleteProduct(result);
result = _productService.getProducts();

console.log(result);