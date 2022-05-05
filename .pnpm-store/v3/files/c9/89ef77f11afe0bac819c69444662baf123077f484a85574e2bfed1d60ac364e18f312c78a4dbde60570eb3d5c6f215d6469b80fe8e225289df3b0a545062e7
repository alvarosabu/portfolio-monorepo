"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DOMException_1 = __importDefault(require("../exception/DOMException"));
/**
 * DOM Token List.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList.
 */
var DOMTokenList = /** @class */ (function () {
    /**
     * Constructor.
     *
     * @param ownerElement Owner element.
     * @param attributeName Attribute name.
     */
    function DOMTokenList(ownerElement, attributeName) {
        this.length = 0;
        this._ownerElement = ownerElement;
        this._attributeName = attributeName;
        this._updateIndices();
    }
    Object.defineProperty(DOMTokenList.prototype, "value", {
        /**
         * Get value.
         */
        get: function () {
            return this._ownerElement.getAttributeNS(null, this._attributeName);
        },
        /**
         * Set value.
         *
         * @param value Value.
         */
        set: function (value) {
            this._ownerElement.setAttributeNS(null, this._attributeName, value);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Get ClassName.
     *
     * @param index Index.
     * */
    DOMTokenList.prototype.item = function (index) {
        index = typeof index === 'number' ? index : 0;
        return index >= 0 && this[index] ? this[index] : null;
    };
    /**
     * Replace Token.
     *
     * @param token Token.
     * @param newToken NewToken.
     */
    DOMTokenList.prototype.replace = function (token, newToken) {
        var attr = this._ownerElement.getAttributeNS(null, this._attributeName);
        var list = attr ? attr.split(' ') : [];
        var index = list.indexOf(token);
        if (index === -1) {
            return false;
        }
        list[index] = newToken;
        this._ownerElement.setAttributeNS(null, this._attributeName, list.join(' '));
        return true;
    };
    /**
     * Supports.
     *
     * @param token Token.
     */
    DOMTokenList.prototype.supports = function (token) {
        // TODO: Only implemented for classList, which does not have any supported tokens
        throw new DOMException_1.default("Failed to execute '".concat(token, "' on 'DOMTokenList': DOMTokenList has no supported tokens."), 'TypeError');
    };
    /**
     * Returns an iterator, allowing you to go through all values of the key/value pairs contained in this object.
     */
    DOMTokenList.prototype.values = function () {
        var attr = this._ownerElement.getAttributeNS(null, this._attributeName);
        return (attr ? attr.split(' ') : []).values();
    };
    /**
     * Returns an iterator, allowing you to go through all key/value pairs contained in this object.
     */
    DOMTokenList.prototype.entries = function () {
        var attr = this._ownerElement.getAttributeNS(null, this._attributeName);
        return (attr ? attr.split(' ') : []).entries();
    };
    /**
     * Executes a provided callback function once for each DOMTokenList element.
     *
     * @param callback
     * @param thisArg
     */
    DOMTokenList.prototype.forEach = function (callback, thisArg) {
        var attr = this._ownerElement.getAttributeNS(null, this._attributeName);
        return (attr ? attr.split(' ') : []).forEach(callback, thisArg);
    };
    /**
     * Returns an iterator, allowing you to go through all keys of the key/value pairs contained in this object.
     *
     */
    DOMTokenList.prototype.keys = function () {
        var attr = this._ownerElement.getAttributeNS(null, this._attributeName);
        return (attr ? attr.split(' ') : []).keys();
    };
    /**
     * Adds tokens.
     *
     * @param tokens Tokens.
     */
    DOMTokenList.prototype.add = function () {
        var tokens = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            tokens[_i] = arguments[_i];
        }
        var attr = this._ownerElement.getAttributeNS(null, this._attributeName);
        var list = attr ? attr.split(' ') : [];
        for (var _a = 0, tokens_1 = tokens; _a < tokens_1.length; _a++) {
            var token = tokens_1[_a];
            var index = list.indexOf(token);
            if (index === -1) {
                list.push(token);
            }
            else {
                list[index] = token;
            }
        }
        this._ownerElement.setAttributeNS(null, this._attributeName, list.join(' '));
    };
    /**
     * Removes tokens.
     *
     * @param tokens Tokens.
     */
    DOMTokenList.prototype.remove = function () {
        var tokens = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            tokens[_i] = arguments[_i];
        }
        var attr = this._ownerElement.getAttributeNS(null, this._attributeName);
        var list = attr ? attr.split(' ') : [];
        for (var _a = 0, tokens_2 = tokens; _a < tokens_2.length; _a++) {
            var token = tokens_2[_a];
            var index = list.indexOf(token);
            if (index !== -1) {
                list.splice(index, 1);
            }
        }
        this._ownerElement.setAttributeNS(null, this._attributeName, list.join(' '));
    };
    /**
     * Check if the list contains a class.
     *
     * @param className Class name.
     * @returns TRUE if it contains.
     */
    DOMTokenList.prototype.contains = function (className) {
        var attr = this._ownerElement.getAttributeNS(null, this._attributeName);
        return (attr ? attr.split(' ') : []).includes(className);
    };
    /**
     * Toggle a class name.
     *
     * @param token A string representing the class name you want to toggle.
     * @param [force] If included, turns the toggle into a one way-only operation. If set to `false`, then class name will only be removed, but not added. If set to `true`, then class name will only be added, but not removed.
     * @returns A boolean value, `true` or `false`, indicating whether class name is in the list after the call or not.
     */
    DOMTokenList.prototype.toggle = function (token, force) {
        var shouldAdd;
        if (force !== undefined) {
            shouldAdd = force;
        }
        else {
            shouldAdd = !this.contains(token);
        }
        if (shouldAdd) {
            this.add(token);
            return true;
        }
        this.remove(token);
        return false;
    };
    /**
     * Updates indices.
     */
    DOMTokenList.prototype._updateIndices = function () {
        var attr = this._ownerElement.getAttribute('class');
        var list = attr ? Array.from(new Set(attr.split(' '))) : [];
        for (var i = list.length - 1, max = this.length; i < max; i++) {
            delete this[i];
        }
        for (var i = 0, max = list.length; i < max; i++) {
            this[i] = list[i];
        }
        this.length = list.length;
    };
    return DOMTokenList;
}());
exports.default = DOMTokenList;
//# sourceMappingURL=DOMTokenList.js.map