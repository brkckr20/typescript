/*
    Functions,
    Default, Optional Params
*/
// const add = (num1 : number,num2 : number) : number => {
//     console.log(num1 + num2);
//     return num1 + num2;
// }
var add = function (num1, num2) {
    console.log(num1 + num2);
    return num1 + num2;
};
add(5, 20);
/* optional parametre */
/* parametre sonuna ? konularak opsiyonel hale getirilir. */
var logUser = function (firstName, lastName) {
    console.log(firstName + " " + lastName);
};
logUser("burak", "kemal");
/* default parametre */
var logUser1 = function (firstName, lastName) {
    if (lastName === void 0) { lastName = "Çakır"; }
    console.log(firstName + " " + lastName);
};
logUser1("Ahmet");
logUser1("Burak", "Cem");
