var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi x:".concat(point.x, " konumundan y:").concat(point.y, " konumuna gidiyor."));
    };
    return Taxi;
}());
var taxi1 = new Taxi();
taxi1.travelTo({ x: 10, y: 30 });
