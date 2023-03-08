function main(arg: any) {
    if (isArr(arg)) {
        
    }
}

function isArr(arg:any) : arg is any[] {
    if (arg instanceof Array) {
        return true;
    }
    return false;
}

class Kisi {
    private id: string;
    public name: string;
    public surname: string;
    constructor(name:string,surname:string) {
        this.id = Math.random().toString();
        this.name = name;
        this.surname = surname;
    }
}

//classların tipi kendisidir.