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

    get Location() {
        return this.location;
    }
    set Location(value : Point) {
        if (value.x <0 || value.y) {
            throw new Error("koordinat bilgileri negatif olamaz");
        }
        this.location = value;
    }
}
/* yeni nesne türetilmesi */
let taxi_1: Taxi = new Taxi({ x: 3, y: 10 });
taxi_1.travelTo({ x: 1, y: 2 });
let currentLocation = taxi_1.Location;
taxi_1.Location = { x: 20, y: 3 };