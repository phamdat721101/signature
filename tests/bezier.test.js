"use strict";
exports.__esModule = true;
var bezier_1 = require("../src/bezier");
var point_1 = require("../src/point");
describe('.fromPoints', function () {
    it('returns a new Bézier curve', function () {
        var now = Date.now();
        freezeTimeAt(now, function () {
            var p1 = new point_1.Point(100, 25);
            var p2 = new point_1.Point(10, 90);
            var p3 = new point_1.Point(110, 100);
            var p4 = new point_1.Point(132, 192);
            var curve = bezier_1.Bezier.fromPoints([p1, p2, p3, p4], { start: 0.5, end: 2 });
            expect(curve.startPoint).toEqual(p2);
            expect(curve.control1).toEqual(new point_1.Point(78.57685352817168, 73.72818901535666));
            expect(curve.control2).toEqual(new point_1.Point(12.375668721124931, 107.81751540843696));
            expect(curve.endPoint).toBe(p3);
            expect(curve.startWidth).toBe(0.5);
            expect(curve.endWidth).toBe(2);
        });
    });
});
describe('#length', function () {
    it('returns approximated length', function () {
        var p1 = new point_1.Point(100, 25);
        var p2 = new point_1.Point(10, 90);
        var p3 = new point_1.Point(110, 100);
        var p4 = new point_1.Point(132, 192);
        var curve = new bezier_1.Bezier(p1, p2, p3, p4, 1, 1);
        expect(curve.length()).toBe(196.92750351842562);
    });
});
function freezeTimeAt(time, callback) {
    var now = Date.now;
    Date.now = jest.fn().mockReturnValue(time);
    callback();
    Date.now = now;
}
//# sourceMappingURL=bezier.test.js.map