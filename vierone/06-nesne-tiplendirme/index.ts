type OpsiyonelParametre = Partial<{
    isim: string;
    yas: number;
}>

const zorunluOlmayan: OpsiyonelParametre = {
    
}

type MyObject = {
    isim: string;
    yas: number;
    [key: string]: any;
}

const obj: MyObject = {
    isim: "lorem",
    yas: 20,
    sehir : "denizli"
}


const obj2: Record<string,boolean> = { //
    isOpen : true
}

const obj3: Record<string,{yas : number}> = { //
    isOpen: { yas: 30 },
    asdas: {yas : 40 },
}