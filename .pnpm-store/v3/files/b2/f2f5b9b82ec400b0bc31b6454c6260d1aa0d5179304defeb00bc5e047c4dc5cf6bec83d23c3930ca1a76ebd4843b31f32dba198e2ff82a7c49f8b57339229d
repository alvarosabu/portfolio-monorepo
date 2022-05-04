"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MouseEvent_1 = __importDefault(require("./MouseEvent"));
/**
 *
 */
var PointerEvent = /** @class */ (function (_super) {
    __extends(PointerEvent, _super);
    /**
     * Constructor.
     *
     * @param type Event type.
     * @param [eventInit] Event init.
     */
    function PointerEvent(type, eventInit) {
        if (eventInit === void 0) { eventInit = null; }
        var _this = _super.call(this, type, eventInit) || this;
        _this.pointerId = 0;
        _this.width = 0;
        _this.height = 0;
        _this.pressure = 0;
        _this.tangentialPressure = 0;
        _this.tiltX = 0;
        _this.tiltY = 0;
        _this.twist = 0;
        _this.pointerType = '';
        _this.isPrimary = false;
        if (eventInit) {
            _this.pointerId = eventInit.pointerId !== undefined ? eventInit.pointerId : 0;
            _this.width = eventInit.width !== undefined ? eventInit.width : 0;
            _this.height = eventInit.height !== undefined ? eventInit.height : 0;
            _this.pressure = eventInit.pressure !== undefined ? eventInit.pressure : 0;
            _this.tangentialPressure =
                eventInit.tangentialPressure !== undefined ? eventInit.tangentialPressure : 0;
            _this.tiltX = eventInit.tiltX !== undefined ? eventInit.tiltX : 0;
            _this.tiltY = eventInit.tiltY !== undefined ? eventInit.tiltY : 0;
            _this.twist = eventInit.twist !== undefined ? eventInit.twist : 0;
            _this.pointerType = eventInit.pointerType !== undefined ? eventInit.pointerType : '';
            _this.isPrimary = eventInit.isPrimary || eventInit.isPrimary;
        }
        return _this;
    }
    return PointerEvent;
}(MouseEvent_1.default));
exports.default = PointerEvent;
//# sourceMappingURL=PointerEvent.js.map