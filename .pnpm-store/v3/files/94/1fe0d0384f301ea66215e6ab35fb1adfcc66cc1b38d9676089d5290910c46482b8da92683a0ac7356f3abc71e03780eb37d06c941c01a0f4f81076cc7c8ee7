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
 * HTML Base Element.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base.
 */
var HTMLBaseElement = /** @class */ (function (_super) {
    __extends(HTMLBaseElement, _super);
    function HTMLBaseElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(HTMLBaseElement.prototype, "href", {
        /**
         * Returns href.
         *
         * @returns Href.
         */
        get: function () {
            var href = this.getAttributeNS(null, 'href');
            if (href !== null) {
                return href;
            }
            return this.ownerDocument.location.href;
        },
        /**
         * Sets href.
         *
         * @param href Href.
         */
        set: function (href) {
            this.setAttributeNS(null, 'href', href);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLBaseElement.prototype, "target", {
        /**
         * Returns target.
         *
         * @returns Target.
         */
        get: function () {
            return this.getAttributeNS(null, 'target') || '';
        },
        /**
         * Sets target.
         *
         * @param target Target.
         */
        set: function (target) {
            this.setAttributeNS(null, 'target', target);
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
    HTMLBaseElement.prototype.cloneNode = function (deep) {
        if (deep === void 0) { deep = false; }
        return _super.prototype.cloneNode.call(this, deep);
    };
    return HTMLBaseElement;
}(HTMLElement_1.default));
exports.default = HTMLBaseElement;
//# sourceMappingURL=HTMLBaseElement.js.map