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
 * HTML Slot Element.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement.
 */
var HTMLSlotElement = /** @class */ (function (_super) {
    __extends(HTMLSlotElement, _super);
    function HTMLSlotElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(HTMLSlotElement.prototype, "name", {
        /**
         * Returns name.
         *
         * @returns Name.
         */
        get: function () {
            return this.getAttributeNS(null, 'name') || '';
        },
        /**
         * Sets name.
         *
         * @param name Name.
         */
        set: function (name) {
            this.setAttributeNS(null, 'name', name);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Sets the slot's manually assigned nodes to an ordered set of slottables.
     *
     * @param _nodes Nodes.
     */
    HTMLSlotElement.prototype.assign = function () {
        var _nodes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _nodes[_i] = arguments[_i];
        }
        // TODO: Do nothing for now. We need to find an example of how it is expected to work before it can be implemented.
    };
    /**
     * Returns assigned nodes.
     *
     * @param [options] Options.
     * @param [options.flatten] A boolean value indicating whether to return the assigned nodes of any available child <slot> elements (true) or not (false). Defaults to false.
     * @returns Nodes.
     */
    HTMLSlotElement.prototype.assignedNodes = function (options) {
        var _a;
        var host = (_a = this.getRootNode()) === null || _a === void 0 ? void 0 : _a.host;
        // TODO: Add support for options.flatten. We need to find an example of how it is expected to work before it can be implemented.
        if (host) {
            var name = this.name;
            if (name) {
                return this.assignedElements(options);
            }
            return host.childNodes.slice();
        }
        return [];
    };
    /**
     * Returns assigned elements.
     *
     * @param [_options] Options.
     * @param [_options.flatten] A boolean value indicating whether to return the assigned elements of any available child <slot> elements (true) or not (false). Defaults to false.
     * @returns Nodes.
     */
    HTMLSlotElement.prototype.assignedElements = function (_options) {
        var _a;
        var host = (_a = this.getRootNode()) === null || _a === void 0 ? void 0 : _a.host;
        // TODO: Add support for options.flatten. We need to find an example of how it expected to work before it can be implemented.
        if (host) {
            var name = this.name;
            if (name) {
                var assignedElements = [];
                for (var _i = 0, _b = host.children; _i < _b.length; _i++) {
                    var child = _b[_i];
                    if (child.slot === name) {
                        assignedElements.push(child);
                    }
                }
                return assignedElements;
            }
            return host.children.slice();
        }
        return [];
    };
    /**
     * Clones a node.
     *
     * @override
     * @param [deep=false] "true" to clone deep.
     * @returns Cloned node.
     */
    HTMLSlotElement.prototype.cloneNode = function (deep) {
        if (deep === void 0) { deep = false; }
        return _super.prototype.cloneNode.call(this, deep);
    };
    return HTMLSlotElement;
}(HTMLElement_1.default));
exports.default = HTMLSlotElement;
//# sourceMappingURL=HTMLSlotElement.js.map