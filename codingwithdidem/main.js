/* compiler .ts uzantılı dosyadaki kodları .js uzantılı dosyaya dönüştürür */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//js versions
//ES5 (tüm browserlar tarafından desteklenir)
//ES6 (2015) => Arrows,classes,template strings, let,const [...array]
//ES7 (2016) => Array.prototype.inclues
//ES8 (2017)
//ts compiler'ı kodun çıktısını default olarak ES5 koduna dönüştürür.
function hello(name) {
    console.log("Selamlar ".concat(name));
    console.log("selam x 1 " + name);
}
var myArray = ["burak", "cakir"];
var copy = __spreadArray([], myArray, true);
hello("Burak");
