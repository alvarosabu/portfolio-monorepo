"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DOMException_1 = __importDefault(require("../exception/DOMException"));
/**
 * Custom elements registry.
 */
var CustomElementRegistry = /** @class */ (function () {
    function CustomElementRegistry() {
        this._registry = {};
        this._callbacks = {};
    }
    /**
     * Defines a custom element class.
     *
     * @param tagName Tag name of element.
     * @param elementClass Element class.
     * @param [options] Options.
     * @param options.extends
     */
    CustomElementRegistry.prototype.define = function (tagName, elementClass, options) {
        var upperTagName = tagName.toUpperCase();
        if (!upperTagName.includes('-')) {
            throw new DOMException_1.default("Failed to execute 'define' on 'CustomElementRegistry': \"" +
                tagName +
                '" is not a valid custom element name.');
        }
        this._registry[upperTagName] = {
            elementClass: elementClass,
            extends: options && options.extends ? options.extends.toLowerCase() : null
        };
        // ObservedAttributes should only be called once by CustomElementRegistry (see #117)
        if (elementClass.prototype.attributeChangedCallback) {
            elementClass._observedAttributes = elementClass.observedAttributes;
        }
        if (this._callbacks[upperTagName]) {
            var callbacks = this._callbacks[upperTagName];
            delete this._callbacks[upperTagName];
            for (var _i = 0, callbacks_1 = callbacks; _i < callbacks_1.length; _i++) {
                var callback = callbacks_1[_i];
                callback();
            }
        }
    };
    /**
     * Returns a defined element class.
     *
     * @param tagName Tag name of element.
     * @param HTMLElement Class defined.
     */
    CustomElementRegistry.prototype.get = function (tagName) {
        var upperTagName = tagName.toUpperCase();
        return this._registry[upperTagName] ? this._registry[upperTagName].elementClass : undefined;
    };
    /**
     * Upgrades a custom element directly, even before it is connected to its shadow root.
     *
     * Not implemented yet.
     *
     * @param _root Root node.
     */
    CustomElementRegistry.prototype.upgrade = function (_root) {
        // Do nothing
    };
    /**
     * When defined.
     *
     * @param tagName Tag name of element.
     * @returns Promise.
     */
    CustomElementRegistry.prototype.whenDefined = function (tagName) {
        var _this = this;
        var upperTagName = tagName.toUpperCase();
        if (this.get(upperTagName)) {
            return Promise.resolve();
        }
        return new Promise(function (resolve) {
            _this._callbacks[upperTagName] = _this._callbacks[upperTagName] || [];
            _this._callbacks[upperTagName].push(resolve);
        });
    };
    return CustomElementRegistry;
}());
exports.default = CustomElementRegistry;
//# sourceMappingURL=CustomElementRegistry.js.map