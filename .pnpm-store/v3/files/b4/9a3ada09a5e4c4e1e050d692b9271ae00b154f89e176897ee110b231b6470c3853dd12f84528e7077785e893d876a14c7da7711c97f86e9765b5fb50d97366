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
var Event_1 = __importDefault(require("../Event"));
/**
 *
 */
var CustomEvent = /** @class */ (function (_super) {
    __extends(CustomEvent, _super);
    /**
     * Constructor.
     *
     * @param type Event type.
     * @param [eventInit] Event init.
     */
    function CustomEvent(type, eventInit) {
        if (eventInit === void 0) { eventInit = null; }
        var _this = _super.call(this, type, eventInit) || this;
        _this.detail = null;
        if (eventInit) {
            _this.detail = eventInit.detail || null;
        }
        return _this;
    }
    /**
     * Init event.
     *
     * @deprecated
     * @param type Type.
     * @param [bubbles=false] "true" if it bubbles.
     * @param [cancelable=false] "true" if it cancelable.
     * @param [detail=null] Custom event detail.
     */
    CustomEvent.prototype.initCustomEvent = function (type, bubbles, cancelable, detail) {
        if (bubbles === void 0) { bubbles = false; }
        if (cancelable === void 0) { cancelable = false; }
        if (detail === void 0) { detail = null; }
        this.type = type;
        this.bubbles = bubbles;
        this.cancelable = cancelable;
        this.detail = detail;
    };
    return CustomEvent;
}(Event_1.default));
exports.default = CustomEvent;
//# sourceMappingURL=CustomEvent.js.map