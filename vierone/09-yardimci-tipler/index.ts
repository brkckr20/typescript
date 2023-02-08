interface Person{
    isim: string;
    soyad: string;
    yas: number;
}
const Insan: Omit<Person, 'yas'> = { // interfaceden kullanmak istemediğimiz degerleri yazabiliriz
    isim: "ahmet",
    soyad : "mehmet"
}

function yazdir(asdas: {
    memleket: string;
    kutuk: string;
}) {
    
}

type AsdasTipi = Parameters<typeof yazdir>['0'];

const _: AsdasTipi = {
    kutuk: "Denizli",
    memleket : "denizli"
}


interface Person1{
    isim: string;
    soyad: string;
}

const p1: Partial<Person1> = { //partial hepsini opsiyonel yapar
    
}

interface Person2{ // opsiyonel parametreleri zorunlu yapar
    isim?: string;
    yas?: number;
}

const p2: Required<Person2> = {
    isim: "adas",
    yas : 30
}

interface Person3{
    isim: string;
    soyad: string;
    yas: number;
}

const p3: Pick<Person3, 'isim' | 'yas'> = { // omit'in tersine sadece istediğimiz alanları seçmek için
    isim: "adad",
    yas: 12,
}