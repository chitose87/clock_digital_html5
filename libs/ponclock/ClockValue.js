define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ClockValue = /** @class */ (function () {
        function ClockValue() {
            this._number = NaN;
        }
        ClockValue.prototype.getString = function (zeroPadding) {
            if (zeroPadding === void 0) { zeroPadding = 0; }
            var result = String(this._number);
            while (result.length < zeroPadding) {
                result = "0" + result;
            }
            return result;
        };
        return ClockValue;
    }());
    exports.ClockValue = ClockValue;
});
//# sourceMappingURL=ClockValue.js.map