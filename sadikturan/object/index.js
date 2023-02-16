var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi x:".concat(point.x, " konumundan y:").concat(point.y, " konumuna gidiyor."));
    };
    return Taxi;
}());
var taxi_1 = new Taxi();
taxi_1.travelTo({ x: 1, y: 2 });
taxi_1.currentLocation = { x: 3, y: 10 };
console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);
