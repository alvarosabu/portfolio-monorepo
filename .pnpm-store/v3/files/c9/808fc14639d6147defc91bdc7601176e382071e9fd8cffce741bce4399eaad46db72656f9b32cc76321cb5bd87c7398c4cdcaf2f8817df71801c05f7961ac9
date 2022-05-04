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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Node_1 = __importDefault(require("../node/Node"));
var CharacterDataUtility_1 = __importDefault(require("./CharacterDataUtility"));
var NonDocumentChildNodeUtility_1 = __importDefault(require("../child-node/NonDocumentChildNodeUtility"));
var ChildNodeUtility_1 = __importDefault(require("../child-node/ChildNodeUtility"));
var MutationRecord_1 = __importDefault(require("../../mutation-observer/MutationRecord"));
var MutationTypeEnum_1 = __importDefault(require("../../mutation-observer/MutationTypeEnum"));
/**
 * Character data base class.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/CharacterData.
 */
var CharacterData = /** @class */ (function (_super) {
    __extends(CharacterData, _super);
    /**
     * Constructor.
     *
     * @param [data] Data.
     */
    function CharacterData(data) {
        var _this = _super.call(this) || this;
        _this._data = '';
        if (data) {
            _this._data = data;
        }
        return _this;
    }
    Object.defineProperty(CharacterData.prototype, "length", {
        /**
         * Returns text content.
         *
         * @returns Text content.
         */
        get: function () {
            return this._data.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CharacterData.prototype, "data", {
        /**
         * Returns text content.
         *
         * @returns Text content.
         */
        get: function () {
            return this._data;
        },
        /**
         * Sets text content.
         *
         * @param textContent Text content.
         */
        set: function (data) {
            var oldValue = this._data;
            this._data = data;
            // MutationObserver
            if (this._observers.length > 0) {
                for (var _i = 0, _a = this._observers; _i < _a.length; _i++) {
                    var observer = _a[_i];
                    if (observer.options.characterData) {
                        var record = new MutationRecord_1.default();
                        record.target = this;
                        record.type = MutationTypeEnum_1.default.characterData;
                        record.oldValue = observer.options.characterDataOldValue ? oldValue : null;
                        observer.callback([record]);
                    }
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CharacterData.prototype, "textContent", {
        /**
         * Returns text content.
         *
         * @returns Text content.
         */
        get: function () {
            return this._data;
        },
        /**
         * Sets text content.
         *
         * @param textContent Text content.
         */
        set: function (textContent) {
            this.data = textContent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CharacterData.prototype, "nodeValue", {
        /**
         * Returns node value.
         *
         * @returns Node value.
         */
        get: function () {
            return this._data;
        },
        /**
         * Sets node value.
         *
         * @param nodeValue Node value.
         */
        set: function (nodeValue) {
            this.textContent = nodeValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CharacterData.prototype, "previousElementSibling", {
        /**
         * Previous element sibling.
         *
         * @returns Element.
         */
        get: function () {
            return NonDocumentChildNodeUtility_1.default.previousElementSibling(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CharacterData.prototype, "nextElementSibling", {
        /**
         * Next element sibling.
         *
         * @returns Element.
         */
        get: function () {
            return NonDocumentChildNodeUtility_1.default.nextElementSibling(this);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Appends the given DOMString to the CharacterData.data string; when this method returns, data contains the concatenated DOMString.
     *
     * @param data Data.
     */
    CharacterData.prototype.appendData = function (data) {
        CharacterDataUtility_1.default.appendData(this, data);
    };
    /**
     * Removes the specified amount of characters, starting at the specified offset, from the CharacterData.data string; when this method returns, data contains the shortened DOMString.
     *
     * @param offset Offset.
     * @param count Count.
     */
    CharacterData.prototype.deleteData = function (offset, count) {
        CharacterDataUtility_1.default.deleteData(this, offset, count);
    };
    /**
     * Inserts the specified characters, at the specified offset, in the CharacterData.data string; when this method returns, data contains the modified DOMString.
     *
     * @param offset Offset.
     * @param data Data.
     */
    CharacterData.prototype.insertData = function (offset, data) {
        CharacterDataUtility_1.default.insertData(this, offset, data);
    };
    /**
     * Replaces the specified amount of characters, starting at the specified offset, with the specified DOMString; when this method returns, data contains the modified DOMString.
     *
     * @param offset Offset.
     * @param count Count.
     * @param data Data.
     */
    CharacterData.prototype.replaceData = function (offset, count, data) {
        CharacterDataUtility_1.default.replaceData(this, offset, count, data);
    };
    /**
     * Returns a DOMString containing the part of CharacterData.data of the specified length and starting at the specified offset.
     *
     * @param offset Offset.
     * @param count Count.
     */
    CharacterData.prototype.substringData = function (offset, count) {
        return CharacterDataUtility_1.default.substringData(this, offset, count);
    };
    /**
     * Removes the object from its parent children list.
     */
    CharacterData.prototype.remove = function () {
        ChildNodeUtility_1.default.remove(this);
    };
    /**
     * The Node.replaceWith() method replaces this Node in the children list of its parent with a set of Node or DOMString objects.
     *
     * @param nodes List of Node or DOMString.
     */
    CharacterData.prototype.replaceWith = function () {
        var nodes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nodes[_i] = arguments[_i];
        }
        ChildNodeUtility_1.default.replaceWith.apply(ChildNodeUtility_1.default, __spreadArray([this], nodes, false));
    };
    /**
     * Inserts a set of Node or DOMString objects in the children list of this ChildNode's parent, just before this ChildNode. DOMString objects are inserted as equivalent Text nodes.
     *
     * @param nodes List of Node or DOMString.
     */
    CharacterData.prototype.before = function () {
        var nodes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nodes[_i] = arguments[_i];
        }
        ChildNodeUtility_1.default.before.apply(ChildNodeUtility_1.default, __spreadArray([this], nodes, false));
    };
    /**
     * Inserts a set of Node or DOMString objects in the children list of this ChildNode's parent, just after this ChildNode. DOMString objects are inserted as equivalent Text nodes.
     *
     * @param nodes List of Node or DOMString.
     */
    CharacterData.prototype.after = function () {
        var nodes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nodes[_i] = arguments[_i];
        }
        ChildNodeUtility_1.default.after.apply(ChildNodeUtility_1.default, __spreadArray([this], nodes, false));
    };
    /**
     * Clones a node.
     *
     * @override
     * @param [deep=false] "true" to clone deep.
     * @returns Cloned node.
     */
    CharacterData.prototype.cloneNode = function (deep) {
        if (deep === void 0) { deep = false; }
        var clone = _super.prototype.cloneNode.call(this, deep);
        clone._data = this._data;
        return clone;
    };
    return CharacterData;
}(Node_1.default));
exports.default = CharacterData;
//# sourceMappingURL=CharacterData.js.map