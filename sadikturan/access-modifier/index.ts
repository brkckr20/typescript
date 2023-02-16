interface Point{
    x: number,
    y: number
}

interface Vehicle {
    travelTo(point: Point): void; //fonksiyon tanımlama
}

class Taxi implements Vehicle{


    constructor(private location:Point, private color?:string) {
        
    }

    travelTo(point: Point): void {
        console.log(`taksi x:${this.location.x} y:${this.location.y} dan x:${point.x} y:${point.y} konumuna gidiyor.`)
    }
}
/* yeni nesne türetilmesi */
let taxi_1: Taxi = new Taxi({ x: 3, y: 10 });
taxi_1.travelTo({ x: 1, y: 2 });

