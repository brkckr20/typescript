/* compiler .ts uzantılı dosyadaki kodları .js uzantılı dosyaya dönüştürür */


//js versions
//ES5 (tüm browserlar tarafından desteklenir)
//ES6 (2015) => Arrows,classes,template strings, let,const [...array]
//ES7 (2016) => Array.prototype.inclues
//ES8 (2017)

//ts compiler'ı kodun çıktısını default olarak ES5 koduna dönüştürür.

function hello(name: string) {
    console.log(`Selamlar ${name}`);
    console.log("selam x 1 " + name);
    
}

const myArray = ["burak", "cakir"];
const copy = [...myArray];

hello("Burak");