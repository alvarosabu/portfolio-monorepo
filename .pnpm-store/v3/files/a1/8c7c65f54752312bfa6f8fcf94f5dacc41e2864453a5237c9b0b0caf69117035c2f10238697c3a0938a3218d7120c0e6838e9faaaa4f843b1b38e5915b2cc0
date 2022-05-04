import { IncomingMessage, ServerResponse } from 'http';
import * as ufo from 'ufo';

declare type Encoding = false | 'ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'latin1' | 'binary' | 'hex';

declare type Handle<T = any> = (req: IncomingMessage, res: ServerResponse) => T;
declare type PHandle = Handle<Promise<any>>;
declare type Middleware = (req: IncomingMessage, res: ServerResponse, next: (err?: Error) => any) => any;
declare type LazyHandle = () => Handle | Promise<Handle>;
declare const defineHandle: <T>(handler: Handle<T>) => Handle<T>;
declare const defineMiddleware: (middleware: Middleware) => Middleware;
declare function promisifyHandle(handle: Handle | Middleware): PHandle;
declare function callHandle(handle: Middleware, req: IncomingMessage, res: ServerResponse): Promise<unknown>;
declare function lazyHandle(handle: LazyHandle, promisify?: boolean): PHandle;
declare function useBase(base: string, handle: PHandle): PHandle;

interface Layer {
    route: string;
    match?: Matcher;
    handle: Handle;
}
declare type Stack = Layer[];
interface InputLayer {
    route?: string;
    match?: Matcher;
    handle: Handle | LazyHandle;
    lazy?: boolean;
    promisify?: boolean;
}
declare type InputStack = InputLayer[];
declare type Matcher = (url: string, req?: IncomingMessage) => boolean;
interface AppUse {
    (route: string | string[], handle: Middleware | Middleware[], options?: Partial<InputLayer>): App;
    (route: string | string[], handle: Handle | Handle[], options?: Partial<InputLayer>): App;
    (handle: Middleware | Middleware[], options?: Partial<InputLayer>): App;
    (handle: Handle | Handle[], options?: Partial<InputLayer>): App;
    (options: InputLayer): App;
}
interface App {
    (req: IncomingMessage, res: ServerResponse): Promise<any>;
    stack: Stack;
    _handle: PHandle;
    use: AppUse;
}
interface AppOptions {
    debug?: boolean;
    onError?: (error: Error, req: IncomingMessage, res: ServerResponse) => any;
}
declare function createApp(options?: AppOptions): App;
declare function use(app: App, arg1: string | Handle | InputLayer | InputLayer[], arg2?: Handle | Partial<InputLayer> | Handle[] | Middleware | Middleware[], arg3?: Partial<InputLayer>): App;
declare function createHandle(stack: Stack, options: AppOptions): PHandle;

/**
 * H3 Runtime Error
 * @class
 * @extends Error
 * @property {Number} statusCode An Integer indicating the HTTP response status code.
 * @property {String} statusMessage A String representing the HTTP status message
 * @property {Any} data An extra data that will includes in the response.<br>
 *  This can be used to pass additional information about the error.
 * @property {Boolean} internal Setting this property to <code>true</code> will mark error as an internal error
 */
declare class H3Error extends Error {
    statusCode: number;
    statusMessage: string;
    data?: any;
}
/**
 * Creates new `Error` that can be used to handle both internal and runtime errors.
 *
 * @param input {Partial<H3Error>}
 * @return {H3Error} An instance of the H3Error
 */
declare function createError(input: Partial<H3Error>): H3Error;
/**
 * Receive an error and return the corresponding response.<br>
 *  H3 internally uses this function to handle unhandled errors.<br>
 *  Note that calling this function will close the connection and no other data will be sent to client afterwards.
 *
 * @param res {ServerResponse} The ServerResponse object is passed as the second parameter in the handler function
 * @param error {H3Error|Error} Raised error
 * @param debug {Boolean} Whether application is in debug mode.<br>
 *  In the debug mode the stack trace of errors will be return in response.
 */
declare function sendError(res: ServerResponse, error: Error | H3Error, debug?: boolean): void;

declare const RawBodySymbol: unique symbol;
interface _IncomingMessage extends IncomingMessage {
    [RawBodySymbol]?: Promise<Buffer>;
    ParsedBodySymbol?: any;
    body?: any;
}
/**
 * Reads body of the request and returns encoded raw string (default) or `Buffer` if encoding if falsy.
 * @param req {IncomingMessage} An IncomingMessage object is created by [http.Server](https://nodejs.org/api/http.html#http_class_http_server)
 * @param encoding {Encoding} encoding="utf-8" - The character encoding to use.
 *
 * @return {String|Buffer} Encoded raw string or raw Buffer of the body
 */
declare function useRawBody(req: _IncomingMessage, encoding?: Encoding): Encoding extends false ? Buffer : Promise<string>;
/**
 * Reads request body and try to safely parse using [destr](https://github.com/unjs/destr)
 * @param req {IncomingMessage} An IncomingMessage object created by [http.Server](https://nodejs.org/api/http.html#http_class_http_server)
 * @param encoding {Encoding} encoding="utf-8" - The character encoding to use.
 *
 * @return {*} The `Object`, `Array`, `String`, `Number`, `Boolean`, or `null` value corresponding to the request JSON body
 *
 * ```ts
 * const body = await useBody(req)
 * ```
 */
declare function useBody<T = any>(req: _IncomingMessage): Promise<T>;

declare const MIMES: {
    html: string;
    json: string;
};

/**
 * Additional serialization options
 */
interface CookieSerializeOptions {
    /**
     * Specifies the value for the {@link https://tools.ietf.org/html/rfc6265#section-5.2.3|Domain Set-Cookie attribute}. By default, no
     * domain is set, and most clients will consider the cookie to apply to only
     * the current domain.
     */
    domain?: string;
    /**
     * Specifies a function that will be used to encode a cookie's value. Since
     * value of a cookie has a limited character set (and must be a simple
     * string), this function can be used to encode a value into a string suited
     * for a cookie's value.
     *
     * The default function is the global `encodeURIComponent`, which will
     * encode a JavaScript string into UTF-8 byte sequences and then URL-encode
     * any that fall outside of the cookie range.
     */
    encode?(value: string): string;
    /**
     * Specifies the `Date` object to be the value for the {@link https://tools.ietf.org/html/rfc6265#section-5.2.1|`Expires` `Set-Cookie` attribute}. By default,
     * no expiration is set, and most clients will consider this a "non-persistent cookie" and will delete
     * it on a condition like exiting a web browser application.
     *
     * *Note* the {@link https://tools.ietf.org/html/rfc6265#section-5.3|cookie storage model specification}
     * states that if both `expires` and `maxAge` are set, then `maxAge` takes precedence, but it is
     * possible not all clients by obey this, so if both are set, they should
     * point to the same date and time.
     */
    expires?: Date;
    /**
     * Specifies the boolean value for the {@link https://tools.ietf.org/html/rfc6265#section-5.2.6|`HttpOnly` `Set-Cookie` attribute}.
     * When truthy, the `HttpOnly` attribute is set, otherwise it is not. By
     * default, the `HttpOnly` attribute is not set.
     *
     * *Note* be careful when setting this to true, as compliant clients will
     * not allow client-side JavaScript to see the cookie in `document.cookie`.
     */
    httpOnly?: boolean;
    /**
     * Specifies the number (in seconds) to be the value for the `Max-Age`
     * `Set-Cookie` attribute. The given number will be converted to an integer
     * by rounding down. By default, no maximum age is set.
     *
     * *Note* the {@link https://tools.ietf.org/html/rfc6265#section-5.3|cookie storage model specification}
     * states that if both `expires` and `maxAge` are set, then `maxAge` takes precedence, but it is
     * possible not all clients by obey this, so if both are set, they should
     * point to the same date and time.
     */
    maxAge?: number;
    /**
     * Specifies the value for the {@link https://tools.ietf.org/html/rfc6265#section-5.2.4|`Path` `Set-Cookie` attribute}.
     * By default, the path is considered the "default path".
     */
    path?: string;
    /**
     * Specifies the boolean or string to be the value for the {@link https://tools.ietf.org/html/draft-ietf-httpbis-rfc6265bis-03#section-4.1.2.7|`SameSite` `Set-Cookie` attribute}.
     *
     * - `true` will set the `SameSite` attribute to `Strict` for strict same
     * site enforcement.
     * - `false` will not set the `SameSite` attribute.
     * - `'lax'` will set the `SameSite` attribute to Lax for lax same site
     * enforcement.
     * - `'strict'` will set the `SameSite` attribute to Strict for strict same
     * site enforcement.
     *  - `'none'` will set the SameSite attribute to None for an explicit
     *  cross-site cookie.
     *
     * More information about the different enforcement levels can be found in {@link https://tools.ietf.org/html/draft-ietf-httpbis-rfc6265bis-03#section-4.1.2.7|the specification}.
     *
     * *note* This is an attribute that has not yet been fully standardized, and may change in the future. This also means many clients may ignore this attribute until they understand it.
     */
    sameSite?: true | false | 'lax' | 'strict' | 'none';
    /**
     * Specifies the boolean value for the {@link https://tools.ietf.org/html/rfc6265#section-5.2.5|`Secure` `Set-Cookie` attribute}. When truthy, the
     * `Secure` attribute is set, otherwise it is not. By default, the `Secure` attribute is not set.
     *
     * *Note* be careful when setting this to `true`, as compliant clients will
     * not send the cookie back to the server in the future if the browser does
     * not have an HTTPS connection.
     */
    secure?: boolean;
}

/**
 * Parse the request to get HTTP Cookie header string and returning an object of all cookie name-value pairs.
 * @param req {IncomingMessage} An IncomingMessage object created by [http.Server](https://nodejs.org/api/http.html#http_class_http_server)
 * @returns Object of cookie name-value pairs
 * ```ts
 * const cookies = useCookies(req)
 * ```
 */
declare function useCookies(req: IncomingMessage): Record<string, string>;
/**
 * Get a cookie value by name.
 * @param req {IncomingMessage} An IncomingMessage object created by [http.Server](https://nodejs.org/api/http.html#http_class_http_server)
 * @param name Name of the cookie to get
 * @returns {*} Value of the cookie (String or undefined)
 * ```ts
 * const authorization = useCookie(request, 'Authorization')
 * ```
 */
declare function useCookie(req: IncomingMessage, name: string): string | undefined;
/**
 * Set a cookie value by name.
 * @param res {ServerResponse} A ServerResponse object created by [http.Server](https://nodejs.org/api/http.html#http_class_http_server)
 * @param name Name of the cookie to set
 * @param value Value of the cookie to set
 * @param serializeOptions {CookieSerializeOptions} Options for serializing the cookie
 * ```ts
 * setCookie(res, 'Authorization', '1234567')
 * ```
 */
declare function setCookie(res: ServerResponse, name: string, value: string, serializeOptions?: CookieSerializeOptions): void;

declare function useQuery(req: IncomingMessage): ufo.QueryObject;
declare type HTTPMethod = 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE';
declare function useMethod(req: IncomingMessage, defaultMethod?: HTTPMethod): HTTPMethod;
declare function isMethod(req: IncomingMessage, expected: HTTPMethod | HTTPMethod[], allowHead?: boolean): boolean;
declare function assertMethod(req: IncomingMessage, expected: HTTPMethod | HTTPMethod[], allowHead?: boolean): void;

declare function send(res: ServerResponse, data: any, type?: string): Promise<unknown>;
declare function defaultContentType(res: ServerResponse, type?: string): void;
declare function sendRedirect(res: ServerResponse, location: string, code?: number): Promise<unknown>;
declare function appendHeader(res: ServerResponse, name: string, value: string): void;

export { App, AppOptions, AppUse, H3Error, HTTPMethod, Handle, InputLayer, InputStack, Layer, LazyHandle, MIMES, Matcher, Middleware, PHandle, Stack, appendHeader, assertMethod, callHandle, createApp, createError, createHandle, defaultContentType, defineHandle, defineMiddleware, isMethod, lazyHandle, promisifyHandle, send, sendError, sendRedirect, setCookie, use, useBase, useBody, useCookie, useCookies, useMethod, useQuery, useRawBody };
