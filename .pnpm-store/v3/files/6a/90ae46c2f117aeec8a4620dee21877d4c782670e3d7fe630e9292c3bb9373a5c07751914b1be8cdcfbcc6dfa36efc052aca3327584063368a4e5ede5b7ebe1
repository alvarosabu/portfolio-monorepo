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
var CSSStyleSheet_1 = __importDefault(require("../../css/CSSStyleSheet"));
var ResourceFetchHandler_1 = __importDefault(require("../../fetch/ResourceFetchHandler"));
var HTMLElement_1 = __importDefault(require("../html-element/HTMLElement"));
var Event_1 = __importDefault(require("../../event/Event"));
var ErrorEvent_1 = __importDefault(require("../../event/events/ErrorEvent"));
var DOMTokenList_1 = __importDefault(require("../../dom-token-list/DOMTokenList"));
/**
 * HTML Link Element.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement.
 */
var HTMLLinkElement = /** @class */ (function (_super) {
    __extends(HTMLLinkElement, _super);
    function HTMLLinkElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onerror = null;
        _this.onload = null;
        _this.sheet = null;
        _this._evaluateCSS = true;
        _this._relList = null;
        return _this;
    }
    Object.defineProperty(HTMLLinkElement.prototype, "relList", {
        /**
         * Returns rel list.
         *
         * @returns Rel list.
         */
        get: function () {
            if (!this._relList) {
                this._relList = new DOMTokenList_1.default(this, 'rel');
            }
            return this._relList;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLLinkElement.prototype, "as", {
        /**
         * Returns as.
         *
         * @returns As.
         */
        get: function () {
            return this.getAttributeNS(null, 'as') || '';
        },
        /**
         * Sets crossOrigin.
         *
         * @param crossOrigin CrossOrigin.
         */
        set: function (as) {
            this.setAttributeNS(null, 'as', as);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLLinkElement.prototype, "crossOrigin", {
        /**
         * Returns crossOrigin.
         *
         * @returns CrossOrigin.
         */
        get: function () {
            return this.getAttribute('crossorigin') || '';
        },
        /**
         * Sets crossOrigin.
         *
         * @param crossOrigin CrossOrigin.
         */
        set: function (crossOrigin) {
            this.setAttributeNS(null, 'crossorigin', crossOrigin);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLLinkElement.prototype, "href", {
        /**
         * Returns href.
         *
         * @returns Href.
         */
        get: function () {
            return this.getAttributeNS(null, 'href') || '';
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
    Object.defineProperty(HTMLLinkElement.prototype, "hreflang", {
        /**
         * Returns hreflang.
         *
         * @returns Hreflang.
         */
        get: function () {
            return this.getAttributeNS(null, 'hreflang') || '';
        },
        /**
         * Sets hreflang.
         *
         * @param hreflang Hreflang.
         */
        set: function (hreflang) {
            this.setAttributeNS(null, 'hreflang', hreflang);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLLinkElement.prototype, "media", {
        /**
         * Returns media.
         *
         * @returns Media.
         */
        get: function () {
            return this.getAttributeNS(null, 'media') || '';
        },
        /**
         * Sets media.
         *
         * @param media Media.
         */
        set: function (media) {
            this.setAttributeNS(null, 'media', media);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLLinkElement.prototype, "referrerPolicy", {
        /**
         * Returns referrerPolicy.
         *
         * @returns ReferrerPolicy.
         */
        get: function () {
            return this.getAttribute('referrerPolicy') || '';
        },
        /**
         * Sets referrerPolicy.
         *
         * @param referrerPolicy ReferrerPolicy.
         */
        set: function (referrerPolicy) {
            this.setAttributeNS(null, 'referrerPolicy', referrerPolicy);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLLinkElement.prototype, "rel", {
        /**
         * Returns rel.
         *
         * @returns Rel.
         */
        get: function () {
            return this.getAttributeNS(null, 'rel') || '';
        },
        /**
         * Sets rel.
         *
         * @param rel Rel.
         */
        set: function (rel) {
            this.setAttributeNS(null, 'rel', rel);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLLinkElement.prototype, "type", {
        /**
         * Returns type.
         *
         * @returns Type.
         */
        get: function () {
            return this.getAttributeNS(null, 'type') || '';
        },
        /**
         * Sets type.
         *
         * @param type Type.
         */
        set: function (type) {
            this.setAttributeNS(null, 'type', type);
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
    HTMLLinkElement.prototype.setAttributeNode = function (attribute) {
        var _this = this;
        var replacedAttribute = _super.prototype.setAttributeNode.call(this, attribute);
        var rel = this.getAttributeNS(null, 'rel');
        var href = this.getAttributeNS(null, 'href');
        if ((attribute.name === 'rel' || attribute.name === 'href') &&
            href !== null &&
            rel &&
            rel.toLowerCase() === 'stylesheet' &&
            this.isConnected) {
            this.ownerDocument._readyStateManager.startTask();
            ResourceFetchHandler_1.default.fetch(this.ownerDocument, href)
                .then(function (code) {
                var styleSheet = new CSSStyleSheet_1.default();
                styleSheet.replaceSync(code);
                _this.sheet = styleSheet;
                _this.dispatchEvent(new Event_1.default('load'));
                _this.ownerDocument._readyStateManager.endTask();
            })
                .catch(function (error) {
                _this.dispatchEvent(new ErrorEvent_1.default('error', {
                    message: error.message,
                    error: error
                }));
                _this.ownerDocument.defaultView.dispatchEvent(new ErrorEvent_1.default('error', {
                    message: error.message,
                    error: error
                }));
                _this.ownerDocument._readyStateManager.endTask();
                if (!_this._listeners['error'] && !_this.ownerDocument.defaultView._listeners['error']) {
                    _this.ownerDocument.defaultView.console.error(error);
                }
            });
        }
        return replacedAttribute;
    };
    /**
     * @override
     */
    HTMLLinkElement.prototype._connectToNode = function (parentNode) {
        var _this = this;
        if (parentNode === void 0) { parentNode = null; }
        var isConnected = this.isConnected;
        var isParentConnected = parentNode ? parentNode.isConnected : false;
        _super.prototype._connectToNode.call(this, parentNode);
        if (isConnected !== isParentConnected && this._evaluateCSS) {
            var href = this.getAttributeNS(null, 'href');
            var rel = this.getAttributeNS(null, 'rel');
            if (href !== null && rel && rel.toLowerCase() === 'stylesheet') {
                this.ownerDocument._readyStateManager.startTask();
                ResourceFetchHandler_1.default.fetch(this.ownerDocument, href)
                    .then(function (code) {
                    var styleSheet = new CSSStyleSheet_1.default();
                    styleSheet.replaceSync(code);
                    _this.sheet = styleSheet;
                    _this.dispatchEvent(new Event_1.default('load'));
                    _this.ownerDocument._readyStateManager.endTask();
                })
                    .catch(function (error) {
                    _this.dispatchEvent(new ErrorEvent_1.default('error', {
                        message: error.message,
                        error: error
                    }));
                    _this.ownerDocument.defaultView.dispatchEvent(new ErrorEvent_1.default('error', {
                        message: error.message,
                        error: error
                    }));
                    _this.ownerDocument._readyStateManager.endTask();
                    if (!_this._listeners['error'] && !_this.ownerDocument.defaultView._listeners['error']) {
                        _this.ownerDocument.defaultView.console.error(error);
                    }
                });
            }
        }
    };
    /**
     * Updates DOM list indices.
     */
    HTMLLinkElement.prototype._updateDomListIndices = function () {
        _super.prototype._updateDomListIndices.call(this);
        if (this._relList) {
            this._relList._updateIndices();
        }
    };
    return HTMLLinkElement;
}(HTMLElement_1.default));
exports.default = HTMLLinkElement;
//# sourceMappingURL=HTMLLinkElement.js.map