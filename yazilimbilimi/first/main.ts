let a: string;
let b: number;
a = "lorem ipsum dolor sit amet";
b = 1992;
console.log(a);
console.log("Hello World");
console.log(b);

let langs: string[];
langs = ["test", "deneme", "asd"];
console.log(langs);
let bools: Array<boolean>;
bools = [true, false];
console.log(bools);

function addNumber(n1: number, n2 :number) :number {
    return n1 + n2;
}
let x = addNumber(1, 2);
console.log(x);


/* add */
function addNo(num1: number, num2?: number): void {
    if (num2 === undefined) {
        console.log(num1);
    } else {
        console.log(num1,num2);
    }
}
addNo(1)


/* class olusturma islemi */

class Person {
    name: string;
    age: number;
    phone: string;
    constructor(name: string, age: number, phone: string) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        console.log("Kişi oluşturuldu");
    }
    showInfo() {
        console.log(`
        İsim : ${this.name}
        age : ${this.age}
        phone : ${this.phone}
        `);
    }
}


let person = new Person("Burak", 20, "1234");

/* inheritance kavramı */

class Employee extends Person {
    salary: number
    
    constructor(name:string,age:number,phone:string,salary:number) {
        super(name, age, phone);
        this.salary = salary;
    }
    /* üst class'ın methodunu manipule etme */
    showInfo(){
        super.showInfo();
        console.log("Maaş : " + this.salary);
        
    }
    changeDepartment() {
        console.log("Departman değiştiriliyor");
    }
}

let emp1 = new Employee("Ahmet", 21, "12343321", 1000);
emp1.showInfo();
emp1.changeDepartment();