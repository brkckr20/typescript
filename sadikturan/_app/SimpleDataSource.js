"use strict";
exports.__esModule = true;
exports.SimpleDataSource = void 0;
var Product_1 = require("./Product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array(new Product_1.Product(1, "apple", "telefon", 1000), new Product_1.Product(2, "apple 1", "telefon", 1200), new Product_1.Product(3, "apple 2", "telefon", 1400), new Product_1.Product(4, "apple 3", "telefon", 1600));
    }
    SimpleDataSource.prototype.getProducts = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
