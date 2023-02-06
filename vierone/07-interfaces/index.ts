import { Request,Response, Handler } from 'express';


const handler: Handler = (req,res,next) => {
    
}




interface Person {
    isim: string;
    yas: string;
}
const obj : Person = {
    isim: "burak",
    yas : "30"
}

const ad: Person["isim"] = "deneme"


interface MyArray{
    [index: number]: string | boolean;
}
const arr1: MyArray = ["test", false, "ABC"];

interface IFunc{
    (isim: string): void;
    (isim : number) : boolean
}


interface MongoResponse{
    _id: string;
    createdAt : string
}

interface BookResponse extends MongoResponse{
    name: string;
    date: Date;
}

const getBook  = ()  :BookResponse => {
    return {
        _id: "adas",
        createdAt: "TARIH",
        date: new Date(),
        name :"tEST KITAB"
    }
}

interface IStudent{
    isim: string;
    soyisim: string;
    sinif: number;
    getInformation():{
        isim : IStudent["isim"],
        soyisim : IStudent["soyisim"],
        sinif : IStudent["sinif"],
    }
}

const obj2 = {
    getStudents(): string {
        return "";
    }
}

const obj3: IStudent = {
    isim: "Burak",
    sinif: 10,
    soyisim: "Cakir",
}