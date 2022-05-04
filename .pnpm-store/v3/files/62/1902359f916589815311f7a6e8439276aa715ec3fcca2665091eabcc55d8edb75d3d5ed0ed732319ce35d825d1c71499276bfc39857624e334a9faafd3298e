"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/Blob.
 *
 * Based on:
 * https://github.com/jsdom/jsdom/blob/master/lib/jsdom/living/file-api/Blob-impl.js (MIT licensed).
 */
var Blob = /** @class */ (function () {
    /**
     * Constructor.
     *
     * @param bits Bits.
     * @param [options] Options.
     * @param [options.type] MIME type.
     */
    function Blob(bits, options) {
        this._buffer = null;
        this.type = '';
        var buffers = [];
        if (bits) {
            for (var _i = 0, bits_1 = bits; _i < bits_1.length; _i++) {
                var bit = bits_1[_i];
                var buffer = void 0;
                if (bit instanceof ArrayBuffer) {
                    buffer = Buffer.from(new Uint8Array(bit));
                }
                else if (bit instanceof Blob) {
                    buffer = bit._buffer;
                }
                else if (bit instanceof Buffer) {
                    buffer = bit;
                }
                else if (ArrayBuffer.isView(bit)) {
                    buffer = Buffer.from(new Uint8Array(bit.buffer, bit.byteOffset, bit.byteLength));
                }
                else {
                    buffer = Buffer.from(typeof bit === 'string' ? bit : String(bit));
                }
                buffers.push(buffer);
            }
        }
        this._buffer = Buffer.concat(buffers);
        if (options && options.type && options.type.match(/^[\u0020-\u007E]*$/)) {
            this.type = String(options.type).toLowerCase();
        }
    }
    Object.defineProperty(Blob.prototype, "size", {
        /**
         * Returns size.
         *
         * @returns Size.
         */
        get: function () {
            return this._buffer.length;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Slices the blob.
     *
     * @param start Start.
     * @param end End.
     * @param contentType Content type.
     * @returns New Blob.
     */
    Blob.prototype.slice = function (start, end, contentType) {
        if (start === void 0) { start = 0; }
        if (end === void 0) { end = null; }
        if (contentType === void 0) { contentType = ''; }
        var size = this.size;
        var relativeStart;
        var relativeEnd;
        var relativeContentType;
        if (start === undefined) {
            relativeStart = 0;
        }
        else if (start < 0) {
            relativeStart = Math.max(size + start, 0);
        }
        else {
            relativeStart = Math.min(start, size);
        }
        if (end === null) {
            relativeEnd = size;
        }
        else if (end < 0) {
            relativeEnd = Math.max(size + end, 0);
        }
        else {
            relativeEnd = Math.min(end, size);
        }
        if (contentType === undefined) {
            relativeContentType = '';
        }
        else {
            // Sanitization (lower case and invalid char check) is done in the
            // Constructor
            relativeContentType = contentType;
        }
        var span = Math.max(relativeEnd - relativeStart, 0);
        var buffer = this._buffer;
        var slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
        var blob = new Blob([], { type: relativeContentType });
        blob._buffer = slicedBuffer;
        return blob;
    };
    /**
     * Returns a Promise that resolves to a text.
     *
     * @returns Text.
     */
    Blob.prototype.text = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._buffer.toString()];
            });
        });
    };
    /**
     * Closes the blob.
     *
     * @returns String.
     */
    Blob.prototype.toString = function () {
        return '[object Blob]';
    };
    return Blob;
}());
exports.default = Blob;
//# sourceMappingURL=Blob.js.map