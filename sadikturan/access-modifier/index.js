var Taxi = /** @class */ (function () {
    function Taxi(location, color) {
        this.location = location;
        this.color = color;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi x:".concat(this.location.x, " y:").concat(this.location.y, " dan x:").concat(point.x, " y:").concat(point.y, " konumuna gidiyor."));
    };
    return Taxi;
}());
/* yeni nesne türetilmesi */
var taxi_1 = new Taxi({ x: 3, y: 10 });
taxi_1.travelTo({ x: 1, y: 2 });
