"use strict";
exports.__esModule = true;
exports.Student = void 0;
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
var Student = /** @class */ (function () {
    function Student(isim, soyisim, sinif) {
        this.isim = isim;
        this.soyisim = soyisim;
        this.sinif = sinif;
    }
    Student.prototype.getInformation = function () {
        return {
            isim: this.isim,
            soyisim: this.soyisim,
            sinif: this.sinif
        };
    };
    return Student;
}());
exports.Student = Student;
