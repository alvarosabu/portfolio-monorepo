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
var Element_1 = __importDefault(require("../element/Element"));
var CSSStyleDeclaration_1 = __importDefault(require("../../css/CSSStyleDeclaration"));
var FocusEvent_1 = __importDefault(require("../../event/events/FocusEvent"));
var PointerEvent_1 = __importDefault(require("../../event/events/PointerEvent"));
var Node_1 = __importDefault(require("../node/Node"));
var DatasetUtility_1 = __importDefault(require("./DatasetUtility"));
/**
 * HTML Element.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement.
 */
var HTMLElement = /** @class */ (function (_super) {
    __extends(HTMLElement, _super);
    function HTMLElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.accessKey = '';
        _this.accessKeyLabel = '';
        _this.contentEditable = 'inherit';
        _this.isContentEditable = false;
        _this.offsetHeight = 0;
        _this.offsetWidth = 0;
        _this.offsetLeft = 0;
        _this.offsetTop = 0;
        _this.clientHeight = 0;
        _this.clientWidth = 0;
        _this._style = null;
        _this._dataset = null;
        return _this;
    }
    Object.defineProperty(HTMLElement.prototype, "tabIndex", {
        /**
         * Returns tab index.
         *
         * @returns Tab index.
         */
        get: function () {
            var tabIndex = this.getAttributeNS(null, 'tabindex');
            return tabIndex !== null ? Number(tabIndex) : -1;
        },
        /**
         * Returns tab index.
         *
         * @param tabIndex Tab index.
         */
        set: function (tabIndex) {
            if (tabIndex === -1) {
                this.removeAttributeNS(null, 'tabindex');
            }
            else {
                this.setAttributeNS(null, 'tabindex', String(tabIndex));
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLElement.prototype, "innerText", {
        /**
         * Returns inner text, which is the rendered appearance of text.
         *
         * @returns Inner text.
         */
        get: function () {
            var result = '';
            for (var _i = 0, _a = this.childNodes; _i < _a.length; _i++) {
                var childNode = _a[_i];
                if (childNode instanceof HTMLElement) {
                    if (childNode.tagName !== 'SCRIPT' && childNode.tagName !== 'STYLE') {
                        result += childNode.innerText;
                    }
                }
                else if (childNode.nodeType === Node_1.default.ELEMENT_NODE ||
                    childNode.nodeType === Node_1.default.TEXT_NODE) {
                    result += childNode.textContent;
                }
            }
            return result;
        },
        /**
         * Sets the inner text, which is the rendered appearance of text.
         *
         * @param innerText Inner text.
         */
        set: function (innerText) {
            this.textContent = innerText;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLElement.prototype, "style", {
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
    Object.defineProperty(HTMLElement.prototype, "dataset", {
        /**
         * Returns data set.
         *
         * @returns Data set.
         */
        get: function () {
            var _this = this;
            if (this._dataset) {
                return this._dataset;
            }
            var dataset = {};
            var attributes = this._attributes;
            for (var _i = 0, _a = Object.keys(attributes); _i < _a.length; _i++) {
                var name = _a[_i];
                if (name.startsWith('data-')) {
                    var key = DatasetUtility_1.default.kebabToCamelCase(name.replace('data-', ''));
                    dataset[key] = attributes[name].value;
                }
            }
            // Documentation for Proxy:
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
            this._dataset = new Proxy(dataset, {
                get: function (dataset, key) {
                    var name = 'data-' + DatasetUtility_1.default.camelCaseToKebab(key);
                    if (_this._attributes[name]) {
                        dataset[key] = _this._attributes[name].value;
                        return _this._attributes[name].value;
                    }
                    if (dataset[key] !== undefined) {
                        delete dataset[key];
                    }
                    return undefined;
                },
                set: function (dataset, key, value) {
                    _this.setAttribute('data-' + DatasetUtility_1.default.camelCaseToKebab(key), value);
                    dataset[key] = value;
                    return true;
                },
                deleteProperty: function (dataset, key) {
                    var name = 'data-' + DatasetUtility_1.default.camelCaseToKebab(key);
                    var exists = !!attributes[name];
                    delete attributes[name];
                    delete dataset[key];
                    return exists;
                },
                ownKeys: function (dataset) {
                    // According to Mozilla we have to update the dataset object (target) to contain the same keys as what we return:
                    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys
                    // "The result List must contain the keys of all non-configurable own properties of the target object."
                    var keys = [];
                    var deleteKeys = [];
                    for (var _i = 0, _a = Object.keys(attributes); _i < _a.length; _i++) {
                        var name = _a[_i];
                        if (name.startsWith('data-')) {
                            var key = DatasetUtility_1.default.kebabToCamelCase(name.replace('data-', ''));
                            keys.push(key);
                            dataset[key] = attributes[name].value;
                            if (!dataset[key]) {
                                deleteKeys.push(key);
                            }
                        }
                    }
                    for (var _b = 0, deleteKeys_1 = deleteKeys; _b < deleteKeys_1.length; _b++) {
                        var key = deleteKeys_1[_b];
                        delete dataset[key];
                    }
                    return keys;
                },
                has: function (_dataset, key) {
                    return !!attributes['data-' + DatasetUtility_1.default.camelCaseToKebab(key)];
                }
            });
            return this._dataset;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLElement.prototype, "dir", {
        /**
         * Returns direction.
         *
         * @returns Direction.
         */
        get: function () {
            return this.getAttributeNS(null, 'dir') || '';
        },
        /**
         * Returns direction.
         *
         * @param direction Direction.
         */
        set: function (direction) {
            this.setAttributeNS(null, 'dir', direction);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLElement.prototype, "hidden", {
        /**
         * Returns hidden.
         *
         * @returns Hidden.
         */
        get: function () {
            return this.getAttributeNS(null, 'hidden') !== null;
        },
        /**
         * Returns hidden.
         *
         * @param hidden Hidden.
         */
        set: function (hidden) {
            if (!hidden) {
                this.removeAttributeNS(null, 'hidden');
            }
            else {
                this.setAttributeNS(null, 'hidden', '');
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLElement.prototype, "lang", {
        /**
         * Returns language.
         *
         * @returns Language.
         */
        get: function () {
            return this.getAttributeNS(null, 'lang') || '';
        },
        /**
         * Returns language.
         *
         * @param language Language.
         */
        set: function (lang) {
            this.setAttributeNS(null, 'lang', lang);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLElement.prototype, "title", {
        /**
         * Returns title.
         *
         * @returns Title.
         */
        get: function () {
            return this.getAttributeNS(null, 'title') || '';
        },
        /**
         * Returns title.
         *
         * @param title Title.
         */
        set: function (title) {
            this.setAttributeNS(null, 'title', title);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Triggers a click event.
     */
    HTMLElement.prototype.click = function () {
        var event = new PointerEvent_1.default('click', {
            bubbles: true,
            composed: true
        });
        event.target = this;
        event.currentTarget = this;
        this.dispatchEvent(event);
    };
    /**
     * Triggers a blur event.
     */
    HTMLElement.prototype.blur = function () {
        if (this.ownerDocument['_activeElement'] !== this || !this.isConnected) {
            return;
        }
        this.ownerDocument['_activeElement'] = null;
        for (var _i = 0, _a = ['blur', 'focusout']; _i < _a.length; _i++) {
            var eventType = _a[_i];
            var event = new FocusEvent_1.default(eventType, {
                bubbles: true,
                composed: true
            });
            event.target = this;
            event.currentTarget = this;
            this.dispatchEvent(event);
        }
    };
    /**
     * Triggers a focus event.
     */
    HTMLElement.prototype.focus = function () {
        if (this.ownerDocument['_activeElement'] === this || !this.isConnected) {
            return;
        }
        if (this.ownerDocument['_activeElement'] !== null) {
            this.ownerDocument['_activeElement'].blur();
        }
        this.ownerDocument['_activeElement'] = this;
        for (var _i = 0, _a = ['focus', 'focusin']; _i < _a.length; _i++) {
            var eventType = _a[_i];
            var event = new FocusEvent_1.default(eventType, {
                bubbles: true,
                composed: true
            });
            event.target = this;
            event.currentTarget = this;
            this.dispatchEvent(event);
        }
    };
    /**
     * The setAttributeNode() method adds a new Attr node to the specified element.
     *
     * @override
     * @param attribute Attribute.
     * @returns Replaced attribute.
     */
    HTMLElement.prototype.setAttributeNode = function (attribute) {
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
    HTMLElement.prototype.removeAttributeNode = function (attribute) {
        _super.prototype.removeAttributeNode.call(this, attribute);
        if (attribute.name === 'style' && this._style) {
            this._style.cssText = '';
        }
    };
    /**
     * Clones a node.
     *
     * @override
     * @param [deep=false] "true" to clone deep.
     * @returns Cloned node.
     */
    HTMLElement.prototype.cloneNode = function (deep) {
        if (deep === void 0) { deep = false; }
        var clone = _super.prototype.cloneNode.call(this, deep);
        clone.accessKey = this.accessKey;
        clone.accessKeyLabel = this.accessKeyLabel;
        clone.contentEditable = this.contentEditable;
        clone.isContentEditable = this.isContentEditable;
        if (this._style) {
            clone.style.cssText = this._style.cssText;
        }
        return clone;
    };
    return HTMLElement;
}(Element_1.default));
exports.default = HTMLElement;
//# sourceMappingURL=HTMLElement.js.map