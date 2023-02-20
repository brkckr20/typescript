import { Taxi } from "./Taxi";

/* yeni nesne türetilmesi */
let taxi_1: Taxi = new Taxi({ x: 3, y: 10 });
taxi_1.travelTo({ x: 1, y: 2 });
let currentLocation = taxi_1.Location;
taxi_1.Location = { x: 20, y: 3 };