import { Point } from "./Point";
import { Vehicle } from "./Vehicle";

export class Taxi implements Vehicle{

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