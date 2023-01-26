function sayHeelo() {
    return "lorem ipsum";
}
var c = sayHeelo();
var x = function () {
    return [10, "burak"];
};
function logPerson(ad, soyad, yas) {
    console.log({
        ad: ad,
        soyad: soyad,
        yas: yas
    });
}
logPerson("Burak", "Cakir", 30);
/* promise */
// async function promiseDondur(): Promise<number>{
//     return new Promise((resolve,reject) => {
//         resolve(30);
//     })
// }
// promiseDondur().then(d => console.log(d))
/* odev */
function odev(isim, count) {
    for (var i = 0; i < count; i++) {
        console.log(isim);
    }
}
odev("burak", 3);
