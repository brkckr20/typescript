var Employee = /** @class */ (function () {
    function Employee(empCode, name, age) {
        this.getSalary = function (empCode) {
            return 10000;
        };
        this.name = name;
    }
    return Employee;
}());
var newEmploye = new Employee(10, "Burak");
console.log(newEmploye.name);
