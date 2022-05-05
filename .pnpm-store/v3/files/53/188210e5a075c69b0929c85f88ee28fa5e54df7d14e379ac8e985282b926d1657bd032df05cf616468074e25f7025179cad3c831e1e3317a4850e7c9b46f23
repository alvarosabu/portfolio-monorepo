"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var RelativeURL_1 = __importDefault(require("../location/RelativeURL"));
/**
 * Helper class for performing fetch.
 */
var FetchHandler = /** @class */ (function () {
    function FetchHandler() {
    }
    /**
     * Returns resource data asynchonously.
     *
     * @param document Document.
     * @param url URL to resource.
     * @param [init] Init.
     * @returns Response.
     */
    FetchHandler.fetch = function (document, url, init) {
        // We want to only load NodeFetch when it is needed to improve performance and not have direct dependencies to server side packages.
        var nodeFetch = require('node-fetch');
        var Response = require('./Response').default;
        var taskManager = document.defaultView.happyDOM.asyncTaskManager;
        return new Promise(function (resolve, reject) {
            var taskID = taskManager.startTask();
            nodeFetch(RelativeURL_1.default.getAbsoluteURL(document.defaultView.location, url), init)
                .then(function (response) {
                if (taskManager.getTaskCount() === 0) {
                    reject(new Error('Failed to complete fetch request. Task was canceled.'));
                }
                else {
                    response.constructor['_ownerDocument'] = document;
                    for (var _i = 0, _a = Object.keys(Response.prototype); _i < _a.length; _i++) {
                        var key = _a[_i];
                        if (Response.prototype.hasOwnProperty(key) && key !== 'constructor') {
                            if (typeof Response.prototype[key] === 'function') {
                                response[key] = Response.prototype[key].bind(response);
                            }
                            else {
                                response[key] = Response.prototype[key];
                            }
                        }
                    }
                    taskManager.endTask(taskID);
                    resolve(response);
                }
            })
                .catch(function (error) {
                reject(error);
                taskManager.cancelAll(error);
            });
        });
    };
    return FetchHandler;
}());
exports.default = FetchHandler;
//# sourceMappingURL=FetchHandler.js.map