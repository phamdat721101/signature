"use strict";
exports.__esModule = true;
var Point = (function () {
    function Point(x, y, time) {
        this.x = x;
        this.y = y;
        this.time = time || Date.now();
    }
    Point.prototype.distanceTo = function (start) {
        return Math.sqrt(Math.pow(this.x - start.x, 2) + Math.pow(this.y - start.y, 2));
    };
    Point.prototype.equals = function (other) {
        return this.x === other.x && this.y === other.y && this.time === other.time;
    };
    Point.prototype.velocityFrom = function (start) {
        return this.time !== start.time
            ? this.distanceTo(start) / (this.time - start.time)
            : 0;
    };
    return Point;
}());
exports.Point = Point;
//# sourceMappingURL=point.js.map