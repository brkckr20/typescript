const obj: {
    name : string,
    yas : number,
} = {
    yas: 20,
    name : "Ahmet"
}

type Person = {
    isim: string,
    soyisim: string,
    yas?: number, /* zorunlu değil anlamı */
    active: boolean;
}

const obj1: Person = {
    isim: "Burak",
    soyisim: "cakir",
    active: false,
}


type Colors = "red" | "green" | "blue";

const color: Colors = "blue"
const colorArr: Colors[] = ["blue", "green"];

