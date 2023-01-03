/* 
    custom type    
*/

type MyColor = { // -> custom type
    name: string,
    hex : string,
}

type MyColor1 = {
    name: "white" | "black",
    hex : string,
}

let user: {
    name: string;
    age: number | string; 
    role: "admin" | "user"
    color: MyColor;
    color1: MyColor1;
}

user.color.hex = "#fff";
user.color.name = "white";
user.color1.name = "black";
