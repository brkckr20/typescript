interface Point{
    x: number,
    y: number
}

interface Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void; //fonksiyon tanımlama
    
}

class Taxi implements Vehicle{

    color: string;

    constructor(location:Point, color?:string) {
        this.currentLocation = location;
        this.color = color as string;
    }

    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`taksi x:${point.x} konumundan y:${point.y} konumuna gidiyor.`)
    }
}
/* yeni nesne türetilmesi */
let taxi_1: Taxi = new Taxi({ x: 3, y: 10 });
taxi_1.travelTo({ x: 1, y: 2 });
console.log(taxi_1.currentLocation);
console.log(taxi_1.color);

let taxi_2 = new Taxi({ x: 0, y: 0 }, "Green");