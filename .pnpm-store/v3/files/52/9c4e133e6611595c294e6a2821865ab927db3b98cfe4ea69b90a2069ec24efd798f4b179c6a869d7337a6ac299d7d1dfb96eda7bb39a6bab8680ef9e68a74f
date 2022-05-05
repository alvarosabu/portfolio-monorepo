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
var CSSStyleDeclaration_1 = __importDefault(require("../../css/CSSStyleDeclaration"));
var Element_1 = __importDefault(require("../element/Element"));
/**
 * SVG Element.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/SVGElement.
 */
var SVGElement = /** @class */ (function (_super) {
    __extends(SVGElement, _super);
    function SVGElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._style = null;
        return _this;
    }
    Object.defineProperty(SVGElement.prototype, "viewportElement", {
        /**
         * Returns viewport.
         *
         * @returns SVG rect.
         */
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SVGElement.prototype, "ownerSVGElement", {
        /**
         * Returns current translate.
         *
         * @returns Element.
         */
        get: function () {
            var parent = this.parentNode;
            while (parent) {
                if (parent['tagName'] === 'SVG') {
                    return parent;
                }
            }
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SVGElement.prototype, "dataset", {
        /**
         * Returns data set.
         *
         * @returns Data set.
         */
        get: function () {
            var dataset = {};
            for (var _i = 0, _a = Object.keys(this._attributes); _i < _a.length; _i++) {
                var name = _a[_i];
                if (name.startsWith('data-')) {
                    dataset[name.replace('data-', '')] = this._attributes[name].value;
                }
            }
            return dataset;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SVGElement.prototype, "style", {
        /**
         * Returns style.
         *
         * @returns Style.
         */
        get: function () {
            if (!this._style) {
                this._style = new CSSStyleDeclaration_1.default(this._attributes);
            }
            return this._style;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * The setAttributeNode() method adds a new Attr node to the specified element.
     *
     * @override
     * @param attribute Attribute.
     * @returns Replaced attribute.
     */
    SVGElement.prototype.setAttributeNode = function (attribute) {
        var replacedAttribute = _super.prototype.setAttributeNode.call(this, attribute);
        if (attribute.name === 'style' && this._style) {
            this._style.cssText = attribute.value;
        }
        return replacedAttribute;
    };
    /**
     * Removes an Attr node.
     *
     * @override
     * @param attribute Attribute.
     */
    SVGElement.prototype.removeAttributeNode = function (attribute) {
        _super.prototype.removeAttributeNode.call(this, attribute);
        if (attribute.name === 'style' && this._style) {
            this._style.cssText = '';
        }
    };
    return SVGElement;
}(Element_1.default));
exports.default = SVGElement;
//# sourceMappingURL=SVGElement.js.map