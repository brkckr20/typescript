let a: number = 5;
let b: string = "ahmet";
let c: boolean = false;
let d: any;
let e: number[] = [1,2,4,2];
let f: Array<number> = [1,2,2];
let g: any[] = [1,2,2,"aaa",false];
let h: [string, number, string] = ["asd", 0, "aa"]; //tuple

const krediPayment = 0;
const havalePayment = 1;
const eftPayment = 1;

enum Payment {
    kredi = 0,
    havale = 1,
    kapidaOdeme = 3,
    eft = 2,
}

let kredi = Payment.kredi; // 0
let havale = Payment.havale; // 1
let eft = Payment.eft; // 2