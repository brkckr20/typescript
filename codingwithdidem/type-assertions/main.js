/**
 *
 *  Type-Assertions ?
 *
 *
 */
var message;
message = "Merhaba Dünya";
//daha önceden tanımlanmamamış type'ı tanımlamak
var newMessage = message.toUpperCase();
//diğer yol
// const newMessage2 = (message as string).toUpperCase()
console.log(newMessage);
