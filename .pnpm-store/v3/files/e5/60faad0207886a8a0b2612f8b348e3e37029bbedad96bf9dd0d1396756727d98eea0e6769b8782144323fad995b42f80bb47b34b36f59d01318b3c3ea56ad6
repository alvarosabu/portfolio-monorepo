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
var HTMLElement_1 = __importDefault(require("../html-element/HTMLElement"));
/**
 * HTML Label Element.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLLabelElement.
 */
var HTMLLabelElement = /** @class */ (function (_super) {
    __extends(HTMLLabelElement, _super);
    function HTMLLabelElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(HTMLLabelElement.prototype, "htmlFor", {
        /**
         * Returns a string containing the ID of the labeled control. This reflects the "for" attribute.
         *
         * @returns ID of the labeled control.
         */
        get: function () {
            var htmlFor = this.getAttributeNS(null, 'for');
            if (htmlFor !== null) {
                return htmlFor;
            }
            return htmlFor !== null ? htmlFor : '';
        },
        /**
         * Sets a string containing the ID of the labeled control. This reflects the "for" attribute.
         *
         * @param htmlFor ID of the labeled control.
         */
        set: function (htmlFor) {
            this.setAttributeNS(null, 'for', htmlFor);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLLabelElement.prototype, "control", {
        /**
         * Returns an HTML element representing the control with which the label is associated.
         *
         * @returns Control element.
         */
        get: function () {
            var htmlFor = this.htmlFor;
            if (htmlFor) {
                return this.ownerDocument.getElementById(htmlFor);
            }
            for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
                var child = _a[_i];
                if (child.tagName === 'INPUT') {
                    return child;
                }
            }
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLLabelElement.prototype, "form", {
        /**
         * Returns the parent form element.
         *
         * @returns Form.
         */
        get: function () {
            var parent = this.parentNode;
            while (parent && parent.tagName !== 'FORM') {
                parent = parent.parentNode;
            }
            return parent;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Clones a node.
     *
     * @override
     * @param [deep=false] "true" to clone deep.
     * @returns Cloned node.
     */
    HTMLLabelElement.prototype.cloneNode = function (deep) {
        if (deep === void 0) { deep = false; }
        return _super.prototype.cloneNode.call(this, deep);
    };
    return HTMLLabelElement;
}(HTMLElement_1.default));
exports.default = HTMLLabelElement;
//# sourceMappingURL=HTMLLabelElement.js.map