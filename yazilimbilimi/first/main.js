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
var a;
var b;
a = "lorem ipsum dolor sit amet";
b = 1992;
console.log(a);
console.log("Hello World");
console.log(b);
var langs;
langs = ["test", "deneme", "asd"];
console.log(langs);
var bools;
bools = [true, false];
console.log(bools);
function addNumber(n1, n2) {
    return n1 + n2;
}
var x = addNumber(1, 2);
console.log(x);
/* add */
function addNo(num1, num2) {
    if (num2 === undefined) {
        console.log(num1);
    }
    else {
        console.log(num1, num2);
    }
}
addNo(1);
/* class olusturma islemi */
var Person = /** @class */ (function () {
    function Person(name, age, phone) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        console.log("Kişi oluşturuldu");
    }
    Person.prototype.showInfo = function () {
        console.log("\n        \u0130sim : ".concat(this.name, "\n        age : ").concat(this.age, "\n        phone : ").concat(this.phone, "\n        "));
    };
    return Person;
}());
var person = new Person("Burak", 20, "1234");
/* inheritance kavramı */
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, phone, salary) {
        var _this = _super.call(this, name, age, phone) || this;
        _this.salary = salary;
        return _this;
    }
    /* üst class'ın methodunu manipule etme */
    Employee.prototype.showInfo = function () {
        _super.prototype.showInfo.call(this);
        console.log("Maaş : " + this.salary);
    };
    Employee.prototype.changeDepartment = function () {
        console.log("Departman değiştiriliyor");
    };
    return Employee;
}(Person));
var emp1 = new Employee("Ahmet", 21, "12343321", 1000);
emp1.showInfo();
emp1.changeDepartment();
