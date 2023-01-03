interface IEmployee {
    empCode: number;
    name: string;
    age: number;
    getSalary: (number) => number;
}

class Employee implements IEmployee{
    empCode: number;
    name: string;
    age: number;

    constructor(empCode: number, name: string, age? : number) {
        this.name = name
    }
    getSalary = (empCode: number) => {
        return 10000;
    }
}

let newEmploye = new Employee(10, "Burak");
console.log(newEmploye.name);
