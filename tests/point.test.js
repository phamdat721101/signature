"use strict";
exports.__esModule = true;
var point_1 = require("../src/point");
describe('#distanceTo', function () {
    it('returns distance to other point', function () {
        var now = Date.now();
        var a = new point_1.Point(0, 0, now);
        var b = new point_1.Point(4, 3, now);
        expect(a.distanceTo(b)).toBe(5);
    });
});
describe('#equals', function () {
    it('returns true if points have the same attributes', function () {
        var now = Date.now();
        var a = new point_1.Point(1, 1, now);
        var b = new point_1.Point(1, 1, now);
        expect(a.equals(b)).toBe(true);
    });
    it("returns false if points have the different 'x' attributes", function () {
        var now = Date.now();
        var a = new point_1.Point(1, 1, now);
        var b = new point_1.Point(2, 1, now);
        expect(a.equals(b)).toBe(false);
    });
    it("returns false if points have the different 'y' attributes", function () {
        var now = Date.now();
        var a = new point_1.Point(1, 1, now);
        var b = new point_1.Point(1, 2, now);
        expect(a.equals(b)).toBe(false);
    });
    it("returns false if points have the different 'time' attributes", function () {
        var now = Date.now();
        var a = new point_1.Point(1, 1, now);
        var b = new point_1.Point(1, 1, now + 1);
        expect(a.equals(b)).toBe(false);
    });
});
describe('#velocityFrom', function () {
    it('returns 0 if times are equal', function () {
        var now = Date.now();
        var a = new point_1.Point(1, 1, now);
        var b = new point_1.Point(1, 1, now);
        expect(a.velocityFrom(b)).toBe(0);
    });
    it('returns velocity if times are different', function () {
        var now = Date.now();
        var a = new point_1.Point(0, 0, now);
        var b = new point_1.Point(4, 3, now + 10);
        expect(a.velocityFrom(b)).toBe(-0.5);
    });
});
//# sourceMappingURL=point.test.js.map