/**
 * 
 *  Type-Assertions ?
 *  
 * 
 */

let message;
message = "Merhaba Dünya";

//daha önceden tanımlanmamamış type'ı tanımlamak
const newMessage = (<string>message).toUpperCase()

//diğer yol
// const newMessage2 = (message as string).toUpperCase()

console.log(newMessage);
