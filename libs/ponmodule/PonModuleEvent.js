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
define(["require", "exports", "../AsEvent/AsEvent"], function (require, exports, AsEvent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PonModuleEvent = /** @class */ (function (_super) {
        __extends(PonModuleEvent, _super);
        function PonModuleEvent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PonModuleEvent.CREATED_VIEW = "createdView";
        PonModuleEvent.CREATED_STYLE = "createdStyle";
        return PonModuleEvent;
    }(AsEvent_1.AsEvent));
    exports.PonModuleEvent = PonModuleEvent;
});
//# sourceMappingURL=PonModuleEvent.js.map