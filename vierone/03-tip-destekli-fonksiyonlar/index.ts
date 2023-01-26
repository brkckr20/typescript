function sayHeelo():string {
    return "lorem ipsum";
}

const c = sayHeelo();

const x = (): [number,string] => {
    return [10,"burak"]
}

function logPerson(ad : string, soyad:string, yas:number) {
    console.log({
        ad,
        soyad,
        yas
    });
    
}

logPerson("Burak", "Cakir", 30);

/* odev */

function odev(isim : string,count: number): void {
    for (let i = 0; i < count; i++) {
        console.log(isim)
    }
}

odev("burak", 3);

