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
define(["require", "exports", "../AsEvent/AsEventDispatcher", "./ClockEvent"], function (require, exports, AsEventDispatcher_1, ClockEvent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Clock = /** @class */ (function (_super) {
        __extends(Clock, _super);
        /**
         *
         */
        function Clock() {
            var _this = _super.call(this) || this;
            _this.millEvent = new ClockEvent_1.ClockEvent(ClockEvent_1.ClockEvent.MILL);
            _this.secEvent = new ClockEvent_1.ClockEvent(ClockEvent_1.ClockEvent.SEC);
            _this.minEvent = new ClockEvent_1.ClockEvent(ClockEvent_1.ClockEvent.MIN);
            _this.hourEvent = new ClockEvent_1.ClockEvent(ClockEvent_1.ClockEvent.HOUR);
            _this.dateEvent = new ClockEvent_1.ClockEvent(ClockEvent_1.ClockEvent.DATE);
            _this.monEvent = new ClockEvent_1.ClockEvent(ClockEvent_1.ClockEvent.MON);
            _this.yearEvent = new ClockEvent_1.ClockEvent(ClockEvent_1.ClockEvent.YEAR);
            _this.run();
            return _this;
        }
        Object.defineProperty(Clock.prototype, "milliseconds", {
            get: function () {
                return this.millEvent.value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Clock.prototype, "seconds", {
            get: function () {
                return this.secEvent.value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Clock.prototype, "minutes", {
            get: function () {
                return this.minEvent.value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Clock.prototype, "hours", {
            get: function () {
                return this.hourEvent.value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Clock.prototype, "date", {
            get: function () {
                return this.dateEvent.value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Clock.prototype, "month", {
            get: function () {
                return this.monEvent.value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Clock.prototype, "fullYear", {
            get: function () {
                return this.yearEvent.value;
            },
            enumerable: true,
            configurable: true
        });
        Clock.prototype.run = function () {
            var _this = this;
            requestAnimationFrame(function () { return _this.run(); });
            var after = new Date();
            var v;
            this.millEvent.value._number = after.getMilliseconds();
            this.dispatchEvent(this.millEvent);
            v = after.getSeconds();
            if (this.secEvent.value._number != v) {
                this.secEvent.value._number = v;
                this.dispatchEvent(this.secEvent);
                v = after.getMinutes();
                if (this.minEvent.value._number != v) {
                    this.minEvent.value._number = v;
                    this.dispatchEvent(this.minEvent);
                    v = after.getHours();
                    if (this.hourEvent.value._number != v) {
                        this.hourEvent.value._number = v;
                        this.dispatchEvent(this.hourEvent);
                        v = after.getDate();
                        if (this.dateEvent.value._number != v) {
                            this.dateEvent.value._number = v;
                            this.dispatchEvent(this.dateEvent);
                            v = after.getMonth() + 1;
                            if (this.monEvent.value._number != v) {
                                this.monEvent.value._number = v;
                                this.dispatchEvent(this.monEvent);
                                v = after.getFullYear();
                                if (this.yearEvent.value._number != v) {
                                    this.yearEvent.value._number = v;
                                    this.dispatchEvent(this.yearEvent);
                                }
                            }
                        }
                    }
                }
            }
        };
        Clock.prototype.allListenerSet = function (initialRun, milliseconds, seconds, minutes, hours, date, month, fullYear) {
            this.listener(ClockEvent_1.ClockEvent.MILL, milliseconds);
            this.listener(ClockEvent_1.ClockEvent.SEC, seconds);
            this.listener(ClockEvent_1.ClockEvent.MIN, minutes);
            this.listener(ClockEvent_1.ClockEvent.HOUR, hours);
            this.listener(ClockEvent_1.ClockEvent.DATE, date);
            this.listener(ClockEvent_1.ClockEvent.MON, month);
            this.listener(ClockEvent_1.ClockEvent.YEAR, fullYear);
            if (initialRun) {
                milliseconds(this.millEvent);
                seconds(this.secEvent);
                minutes(this.minEvent);
                hours(this.hourEvent);
                date(this.dateEvent);
                month(this.monEvent);
                fullYear(this.yearEvent);
            }
            return this;
        };
        return Clock;
    }(AsEventDispatcher_1.AsEventDispatcher));
    exports.Clock = Clock;
});
//# sourceMappingURL=Clock.js.map