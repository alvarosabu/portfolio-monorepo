"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CSSUnits_1 = __importDefault(require("./CSSUnits"));
/**
 * CSS unit value.
 */
var CSSUnitValue = /** @class */ (function () {
    /**
     * Constructor.
     *
     * @param value Value.
     * @param unit Unit.
     */
    function CSSUnitValue(value, unit) {
        this.unit = null;
        this.value = null;
        if (typeof value !== 'number') {
            throw new TypeError('The provided double value is non-finite');
        }
        if (!CSSUnits_1.default.includes(unit)) {
            throw new TypeError('Invalid unit: ' + unit);
        }
        this.value = value;
        this.unit = unit;
    }
    return CSSUnitValue;
}());
exports.default = CSSUnitValue;
//# sourceMappingURL=CSSUnitValue.js.map