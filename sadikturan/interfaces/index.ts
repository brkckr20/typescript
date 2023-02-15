interface Point{
    x: number,
    y: number
}

interface Passenger {
    name: string,
    phone : string,
}

interface Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void; //fonksiyon tanımlama
    getDistance(pointA: Point, pointB: Point): number; //fonksiyonların gövdesi olmadan yazılır.
    addPassenger(passenger: Passenger): void;
    removePassenger(passenger: Passenger): void;
}
