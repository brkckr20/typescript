interface Point{
    x: number,
    y: number
}

interface Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void; //fonksiyon tanımlama
    
}

class Taxi implements Vehicle{
    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`taksi x:${point.x} konumundan y:${point.y} konumuna gidiyor.`)
    }
}

const taxi1 = new Taxi();
taxi1.travelTo({ x: 10, y: 30 });