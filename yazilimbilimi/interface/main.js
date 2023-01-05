/* INTERFACE */
var MySql = /** @class */ (function () {
    function MySql() {
    }
    MySql.prototype.add = function () {
        console.log("Mysql Add");
    };
    MySql.prototype.get = function () {
        console.log("Mysql get");
    };
    MySql.prototype["delete"] = function () {
        console.log("Mysql delete");
    };
    MySql.prototype.update = function () {
        console.log("Mysql update");
    };
    return MySql;
}());
var MongoDB = /** @class */ (function () {
    function MongoDB() {
    }
    MongoDB.prototype.add = function () {
        console.log("MongoDB Add");
    };
    MongoDB.prototype.get = function () {
        console.log("MongoDB get");
    };
    MongoDB.prototype["delete"] = function () {
        console.log("MongoDB delete");
    };
    MongoDB.prototype.update = function () {
        console.log("MongoDB update");
    };
    return MongoDB;
}());
/* let mysql = new MySql();

mysql.add(); */
function addDB(database) {
    database["delete"]();
}
addDB(new MySql());
addDB(new MongoDB());
