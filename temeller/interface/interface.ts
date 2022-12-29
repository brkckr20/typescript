/* interface */



interface Employee extends Person{ //inheritabce - extends
    readonly empCode: number; /* readonly özelliği - daha sonra değiştiremezsim */
    
}

interface Person {
    name: string;
    age?: number;/* optional */
}

let newEmployee: Employee;

/* newEmployee = {
    empCode: 1,
    name: "Burak",
    // age : 30
} */
// newEmployee.empCode = 2

newEmployee = {
    age : 22,
    name: "Kemal",
    empCode : 100
}