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
 * HTML Unknown Element.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLUnknownElement.
 */
var HTMLUnknownElement = /** @class */ (function (_super) {
    __extends(HTMLUnknownElement, _super);
    function HTMLUnknownElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._customElementDefineCallback = null;
        return _this;
    }
    /**
     * Connects this element to another element.
     *
     * @param parentNode Parent node.
     */
    HTMLUnknownElement.prototype._connectToNode = function (parentNode) {
        var _this = this;
        if (parentNode === void 0) { parentNode = null; }
        var tagName = this.tagName;
        // This element can potentially be a custom element that has not been defined yet
        // Therefore we need to register a callback for when it is defined in CustomElementRegistry and replace it with the registered element (see #404)
        if (tagName.includes('-')) {
            var callbacks = this.ownerDocument.defaultView.customElements._callbacks;
            if (parentNode && !this._customElementDefineCallback) {
                var callback = function () {
                    if (_this.parentNode) {
                        var newElement = _this.ownerDocument.createElement(tagName);
                        _this.parentNode.insertBefore(newElement, _this);
                        _this.parentNode.removeChild(_this);
                    }
                };
                callbacks[tagName] = callbacks[tagName] || [];
                callbacks[tagName].push(callback);
                this._customElementDefineCallback = callback;
            }
            else if (!parentNode && callbacks[tagName] && this._customElementDefineCallback) {
                var index = callbacks[tagName].indexOf(this._customElementDefineCallback);
                if (index !== -1) {
                    callbacks[tagName].splice(index, 1);
                }
                if (!callbacks[tagName].length) {
                    delete callbacks[tagName];
                }
                this._customElementDefineCallback = null;
            }
        }
        _super.prototype._connectToNode.call(this, parentNode);
    };
    return HTMLUnknownElement;
}(HTMLElement_1.default));
exports.default = HTMLUnknownElement;
//# sourceMappingURL=HTMLUnknownElement.js.map