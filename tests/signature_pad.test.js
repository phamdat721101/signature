"use strict";
exports.__esModule = true;
var signature_pad_1 = require("../src/signature_pad");
var face_1 = require("./fixtures/face");
var canvas;
beforeAll(function () {
    canvas = document.createElement('canvas');
    canvas.setAttribute('width', '300');
    canvas.setAttribute('height', '150');
});
describe('#constructor', function () {
    it('returns an instance of SignaturePad', function () {
        var pad = new signature_pad_1["default"](canvas);
        expect(pad).toBeInstanceOf(signature_pad_1["default"]);
    });
    it("allows to set 'throttle' to 0", function () {
        var pad = new signature_pad_1["default"](canvas, { throttle: 0 });
        expect(pad.throttle).toBe(0);
    });
    it("allows to set 'minDistance' to 0", function () {
        var pad = new signature_pad_1["default"](canvas, { minDistance: 0 });
        expect(pad.minDistance).toBe(0);
    });
});
describe('#clear', function () {
    it('clears data structures', function () {
        var pad = new signature_pad_1["default"](canvas);
        pad.fromData(face_1.json);
        expect(pad.isEmpty()).toBe(false);
        pad.clear();
        expect(pad.isEmpty()).toBe(true);
        expect(pad.toData()).toEqual([]);
    });
});
describe('#isEmpty', function () {
    it('returns true if pad is empty', function () {
        var pad = new signature_pad_1["default"](canvas);
        expect(pad.isEmpty()).toBe(true);
    });
    it('returns false if pad is not empty', function () {
        var pad = new signature_pad_1["default"](canvas);
        pad.fromData(face_1.json);
        expect(pad.isEmpty()).toBe(false);
    });
});
describe('#toData', function () {
    it('returns JSON with point groups', function () {
        var pad = new signature_pad_1["default"](canvas);
        pad.fromData(face_1.json);
        expect(pad.toData()).toEqual(face_1.json);
    });
});
describe('#toDataURL', function () {
    it('returns SVG image in data URL format', function () {
        var pad = new signature_pad_1["default"](canvas);
        pad.fromData(face_1.json);
        expect(pad.toDataURL('image/svg+xml')).toEqual(face_1.dataURL.svg);
    });
});
//# sourceMappingURL=signature_pad.test.js.map