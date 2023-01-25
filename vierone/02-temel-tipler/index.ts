let myName: string;
myName = "Burak";
let a: boolean = true;
let b: number = 12;


/* object */

const Person: {
    name: string;
    surname: string;
} = {
    name: "Burak",
    surname: "Cakir"
}

Person.name = "Ahmet"


/* dizi tipleri */
const dizi : string[] = []
const dizi1: (string | number | boolean)[] = ["lorem", 12, false]
const dizi2 = [] as Array<string>;

/* touple */
const myArr: [string, string, number] = ["Kadir", "Yazici", 20];