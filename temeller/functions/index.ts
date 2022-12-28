/* 
    Functions,
    Default, Optional Params
*/

// const add = (num1 : number,num2 : number) : number => {
//     console.log(num1 + num2);
//     return num1 + num2;
// }

const add = (num1 : number,num2 : number) => {
    console.log(num1 + num2);
    return num1 + num2;
}

add(5, 20)


/* optional parametre */
/* parametre sonuna ? konularak opsiyonel hale getirilir. */
const logUser = (firstName: string, lastName?: string) => {
    console.log(firstName + " " + lastName); 
}

logUser("burak", "kemal");


/* default parametre */

const logUser1 = (firstName: string, lastName = "Çakır") => {
    console.log(firstName + " " + lastName); 
}

logUser1("Ahmet")
logUser1("Burak","Cem")