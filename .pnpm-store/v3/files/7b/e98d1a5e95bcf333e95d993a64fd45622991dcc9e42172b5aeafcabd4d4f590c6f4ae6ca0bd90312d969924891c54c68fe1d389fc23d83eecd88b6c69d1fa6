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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var NodeFetch = __importStar(require("node-fetch"));
/**
 * Fetch request.
 */
var Request = /** @class */ (function (_super) {
    __extends(Request, _super);
    function Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns array buffer.
     *
     * @returns Array buffer.
     */
    Request.prototype.arrayBuffer = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var taskID = _this._handlePromiseStart();
            _super.prototype.arrayBuffer.call(_this)
                .then(_this._handlePromiseEnd.bind(_this, resolve, reject, taskID))
                .catch(_this._handlePromiseError.bind(_this, reject));
        });
    };
    /**
     * Returns blob.
     *
     * @returns Blob.
     */
    Request.prototype.blob = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var taskID = _this._handlePromiseStart();
            _super.prototype.blob.call(_this)
                .then(_this._handlePromiseEnd.bind(_this, resolve, reject, taskID))
                .catch(_this._handlePromiseError.bind(_this, reject));
        });
    };
    /**
     * Returns buffer.
     *
     * @returns Buffer.
     */
    Request.prototype.buffer = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var taskID = _this._handlePromiseStart();
            _super.prototype.buffer.call(_this)
                .then(_this._handlePromiseEnd.bind(_this, resolve, reject, taskID))
                .catch(_this._handlePromiseError.bind(_this, reject));
        });
    };
    /**
     * Returns json.
     *
     * @returns JSON.
     */
    Request.prototype.json = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var taskID = _this._handlePromiseStart();
            _super.prototype.json.call(_this)
                .then(_this._handlePromiseEnd.bind(_this, resolve, reject, taskID))
                .catch(_this._handlePromiseError.bind(_this, reject));
        });
    };
    /**
     * Returns json.
     *
     * @returns JSON.
     */
    Request.prototype.text = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var taskID = _this._handlePromiseStart();
            _super.prototype.text.call(_this)
                .then(_this._handlePromiseEnd.bind(_this, resolve, reject, taskID))
                .catch(_this._handlePromiseError.bind(_this, reject));
        });
    };
    /**
     * Returns json.
     *
     * @returns JSON.
     */
    Request.prototype.textConverted = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var taskID = _this._handlePromiseStart();
            _super.prototype.textConverted.call(_this)
                .then(_this._handlePromiseEnd.bind(_this, resolve, reject, taskID))
                .catch(_this._handlePromiseError.bind(_this, reject));
        });
    };
    /**
     * Handles promise start.
     *
     * @returns Task ID.
     */
    Request.prototype._handlePromiseStart = function () {
        var taskManager = this.constructor._ownerDocument.defaultView.happyDOM
            .asyncTaskManager;
        return taskManager.startTask();
    };
    /**
     * Handles promise end.
     *
     * @param resolve Resolve.
     * @param reject Reject.
     * @param taskID Task ID.
     * @param response Response.
     */
    Request.prototype._handlePromiseEnd = function (resolve, reject, taskID, response) {
        var taskManager = this.constructor._ownerDocument.defaultView.happyDOM
            .asyncTaskManager;
        if (taskManager.getTaskCount() === 0) {
            reject(new Error('Failed to complete fetch request. Task was canceled.'));
        }
        else {
            resolve(response);
            taskManager.endTask(taskID);
        }
    };
    /**
     * Handles promise error.
     *
     * @param error
     * @param reject
     */
    Request.prototype._handlePromiseError = function (reject, error) {
        var taskManager = this.constructor._ownerDocument.defaultView.happyDOM
            .asyncTaskManager;
        reject(error);
        taskManager.cancelAll(error);
    };
    Request._ownerDocument = null;
    return Request;
}(NodeFetch.Request));
exports.default = Request;
//# sourceMappingURL=Request.js.map