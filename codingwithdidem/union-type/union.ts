/* 
    Union Type 
    (type 1 |type 2 | type 3)



    Literal Type
*/


let user: {
    name: string;
    age: number | string; // -> union type
    role : "admin" | "user" // -> ya admin olabilir yada user olabilir (literal)
}

// age type number ise string olarak age verirsek hata verir
// user.age = "12";

//eğer user.age bir string veya bir number olabilir demiş olduk
// user.age = "12";


// user.role = "admin"; -> admin veya user haricindeki değerlerde hata verir