export interface IStudent{
    isim: string;
    soyisim: string;
    sinif: number;
    getInformation():{
        isim : IStudent["isim"],
        soyisim : IStudent["soyisim"],
        sinif : IStudent["sinif"],
    }
}


// export class Student{
//     // #isim = "burak"; //private olarak tanımlanan değerin dışarıdan erisilmesi engellemek
//     private isim = "burak";
//     name: string;
//     surname: string;
//     constructor(name: string, surname : string) {
//         console.log("Class crated");
//         this.name = name;
//         this.surname = surname;
//     }
//     ismiYazdir():void {
//         console.log(this.isim)
//     }
//     yazdir() {
//         console.log({
//             isim: this.name,
//             soyisim : this.surname
//         })
//     }
// }

export class Student implements IStudent{
    constructor(
        public isim: string,
        public soyisim: string,
        public sinif : number
    ) { }
    getInformation() {
        return {
            isim : this.isim,
            soyisim : this.soyisim,
            sinif : this.sinif,
        }
    }
}