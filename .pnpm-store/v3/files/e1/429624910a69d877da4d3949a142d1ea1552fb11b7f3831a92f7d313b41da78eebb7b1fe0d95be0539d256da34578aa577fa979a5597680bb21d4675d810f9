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
var EventTarget_1 = __importDefault(require("../event/EventTarget"));
/**
 * Media Query List.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList.
 */
var MediaQueryList = /** @class */ (function (_super) {
    __extends(MediaQueryList, _super);
    function MediaQueryList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._matches = false;
        _this._media = '';
        _this.onchange = null;
        return _this;
    }
    Object.defineProperty(MediaQueryList.prototype, "matches", {
        /**
         * Returns "true" if the document matches.
         *
         * @returns Matches.
         */
        get: function () {
            return this._matches;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MediaQueryList.prototype, "media", {
        /**
         * Returns the serialized media query.
         *
         * @returns Serialized media query.
         */
        get: function () {
            return this._media;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Adds a listener.
     *
     * @deprecated
     * @param callback Callback.
     */
    MediaQueryList.prototype.addListener = function (callback) {
        this.addEventListener('change', callback);
    };
    /**
     * Removes listener.
     *
     * @deprecated
     * @param callback Callback.
     */
    MediaQueryList.prototype.removeListener = function (callback) {
        this.removeEventListener('change', callback);
    };
    return MediaQueryList;
}(EventTarget_1.default));
exports.default = MediaQueryList;
//# sourceMappingURL=MediaQueryList.js.map