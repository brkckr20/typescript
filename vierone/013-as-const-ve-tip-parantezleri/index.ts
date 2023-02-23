let c = <string>"selam";

interface Student{
    name: string,
    class:number,
}

const obj : Student = {
    class: 1,
    name: "asda",
}


const obj1 = <Student>{
    class: 1,
    name: "asda",
}

const arr: [number, string] = [12, 'test'];

const obj2 = {
    name: "burak",
    age:31
}


const arr2 = [1, 'str'] as const;
const arr3 = <const>[1, 'str'];
//değişmez olduğunu typescripte söylemiş olduk
