/* abstract class */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DB = /** @class */ (function () {
    function DB() {
    }
    DB.prototype.get = function () {
        console.log("abstract class db get");
    };
    DB.prototype.add = function () {
        console.log("abstract class db add");
    };
    return DB;
}());
var MySql = /** @class */ (function (_super) {
    __extends(MySql, _super);
    function MySql() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MySql.prototype["delete"] = function () {
        console.log("Mysql delete");
    };
    MySql.prototype.update = function () {
        console.log("Mysql update");
    };
    return MySql;
}(DB));
var MongoDB = /** @class */ (function (_super) {
    __extends(MongoDB, _super);
    function MongoDB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MongoDB.prototype["delete"] = function () {
        console.log("MongoDB delete");
    };
    MongoDB.prototype.update = function () {
        console.log("MongoDB update");
    };
    return MongoDB;
}(DB));
function AddDB(db) {
    db["delete"]();
}
AddDB(new MySql());
AddDB(new MongoDB());
