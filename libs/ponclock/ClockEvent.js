var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "../AsEvent/AsEvent", "./ClockValue"], function (require, exports, AsEvent_1, ClockValue_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ClockEvent = /** @class */ (function (_super) {
        __extends(ClockEvent, _super);
        function ClockEvent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.value = new ClockValue_1.ClockValue();
            return _this;
        }
        ClockEvent.MILL = "mill";
        ClockEvent.SEC = "sec";
        ClockEvent.MIN = "min";
        ClockEvent.HOUR = "hour";
        ClockEvent.DATE = "date";
        ClockEvent.MON = "mon";
        ClockEvent.YEAR = "year";
        return ClockEvent;
    }(AsEvent_1.AsEvent));
    exports.ClockEvent = ClockEvent;
});
//# sourceMappingURL=ClockEvent.js.map