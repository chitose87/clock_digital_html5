define(["require", "exports", "jquery", "./modules/stage/Stage", "../libs/ponclock/Clock", "../libs/ponmodule/PonModuleEvent"], function (require, exports, $, Stage_1, Clock_1, PonModuleEvent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Digital = /** @class */ (function () {
        function Digital() {
            var _this = this;
            console.log("Digital v0");
            this.clock = new Clock_1.Clock();
            this.stage = new Stage_1.Stage()
                .listener(PonModuleEvent_1.PonModuleEvent.CREATED_VIEW, function (_e) {
                _this.clock.allListenerSet(true, function (e) {
                    _this.stage.$milliseconds.html(e.value.getString(3));
                }, function (e) {
                    _this.stage.$seconds.html(e.value.getString(2));
                }, function (e) {
                    _this.stage.$minutes.html(e.value.getString(2));
                }, function (e) {
                    _this.stage.$hours.html(e.value.getString(2));
                }, function (e) {
                    _this.stage.$date.html(e.value.getString(2));
                }, function (e) {
                    _this.stage.$month.html(e.value.getString(2));
                }, function (e) {
                    _this.stage.$fullYear.html(e.value.getString());
                });
            });
            $("body").append(this.stage.$obj);
        }
        return Digital;
    }());
    new Digital();
});
//# sourceMappingURL=Digital.js.map