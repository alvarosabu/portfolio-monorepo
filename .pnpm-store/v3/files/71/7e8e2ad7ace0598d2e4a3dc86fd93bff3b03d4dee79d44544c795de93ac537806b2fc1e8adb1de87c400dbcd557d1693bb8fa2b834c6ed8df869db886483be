const PLUS_RE = /\+/g;
function decode$1(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch (_err) {
    return "" + text;
  }
}
function decodeQueryValue(text) {
  return decode$1(text.replace(PLUS_RE, " "));
}

function parseQuery(paramsStr = "") {
  const obj = {};
  if (paramsStr[0] === "?") {
    paramsStr = paramsStr.substr(1);
  }
  for (const param of paramsStr.split("&")) {
    const s = param.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decode$1(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (obj[key]) {
      if (Array.isArray(obj[key])) {
        obj[key].push(value);
      } else {
        obj[key] = [obj[key], value];
      }
    } else {
      obj[key] = value;
    }
  }
  return obj;
}
function hasProtocol(inputStr, acceptProtocolRelative = false) {
  return /^\w+:\/\/.+/.test(inputStr) || acceptProtocolRelative && /^\/\/[^/]+/.test(inputStr);
}
const TRAILING_SLASH_RE = /\/$|\/\?/;
function hasTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s] = input.split("?");
  return (s0.slice(0, -1) || "/") + (s.length ? `?${s.join("?")}` : "");
}
function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input.substr(_base.length) || "/";
  }
  return input;
}
function getQuery(input) {
  return parseQuery(parseURL(input).search);
}
function isEmptyURL(url) {
  return !url || url === "/";
}

function parseURL(input = "", defaultProto) {
  if (!hasProtocol(input, true)) {
    return defaultProto ? parseURL(defaultProto + input) : parsePath(input);
  }
  const [protocol = "", auth, hostAndPath] = (input.match(/([^:/]+:)?\/\/([^/@]+@)?(.*)/) || []).splice(1);
  const [host = "", path = ""] = (hostAndPath.match(/([^/?]*)(.*)?/) || []).splice(1);
  const { pathname, search, hash } = parsePath(path);
  return {
    protocol,
    auth: auth ? auth.substr(0, auth.length - 1) : "",
    host,
    pathname,
    search,
    hash
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}

const defineHandle = (handler) => handler;
const defineMiddleware = (middleware) => middleware;
function promisifyHandle(handle) {
  return function(req, res) {
    return callHandle(handle, req, res);
  };
}
function callHandle(handle, req, res) {
  return new Promise((resolve, reject) => {
    const next = (err) => err ? reject(err) : resolve(void 0);
    try {
      const returned = handle(req, res, next);
      if (returned !== void 0) {
        resolve(returned);
      } else {
        res.once("close", next);
        res.once("error", next);
      }
    } catch (err) {
      next(err);
    }
  });
}
function lazyHandle(handle, promisify) {
  let _promise;
  const resolve = () => {
    if (!_promise) {
      _promise = Promise.resolve(handle()).then((r) => promisify ? promisifyHandle(r.default || r) : r.default || r);
    }
    return _promise;
  };
  return function(req, res) {
    return resolve().then((h) => h(req, res));
  };
}
function useBase(base, handle) {
  base = withoutTrailingSlash(base);
  if (!base) {
    return handle;
  }
  return function(req, res) {
    req.originalUrl = req.originalUrl || req.url || "/";
    req.url = withoutBase(req.url || "/", base);
    return handle(req, res);
  };
}

const suspectProtoRx = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^["{[]|^-?[0-9][0-9.]{0,14}$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor") {
    return;
  }
  return value;
}
function destr(val) {
  if (typeof val !== "string") {
    return val;
  }
  const _lval = val.toLowerCase();
  if (_lval === "true") {
    return true;
  }
  if (_lval === "false") {
    return false;
  }
  if (_lval === "null") {
    return null;
  }
  if (_lval === "nan") {
    return NaN;
  }
  if (_lval === "infinity") {
    return Infinity;
  }
  if (_lval === "undefined") {
    return void 0;
  }
  if (!JsonSigRx.test(val)) {
    return val;
  }
  try {
    if (suspectProtoRx.test(val) || suspectConstructorRx.test(val)) {
      return JSON.parse(val, jsonParseTransform);
    }
    return JSON.parse(val);
  } catch (_e) {
    return val;
  }
}

function useQuery(req) {
  return getQuery(req.url || "");
}
function useMethod(req, defaultMethod = "GET") {
  return (req.method || defaultMethod).toUpperCase();
}
function isMethod(req, expected, allowHead) {
  const method = useMethod(req);
  if (allowHead && method === "HEAD") {
    return true;
  }
  if (typeof expected === "string") {
    if (method === expected) {
      return true;
    }
  } else if (expected.includes(method)) {
    return true;
  }
  return false;
}
function assertMethod(req, expected, allowHead) {
  if (!isMethod(req, expected, allowHead)) {
    throw createError({
      statusCode: 405,
      statusMessage: "HTTP method is not allowed."
    });
  }
}

const RawBodySymbol = Symbol("h3RawBody");
const ParsedBodySymbol = Symbol("h3RawBody");
const PayloadMethods = ["PATCH", "POST", "PUT", "DELETE"];
function useRawBody(req, encoding = "utf-8") {
  assertMethod(req, PayloadMethods);
  if (RawBodySymbol in req) {
    const promise2 = Promise.resolve(req[RawBodySymbol]);
    return encoding ? promise2.then((buff) => buff.toString(encoding)) : promise2;
  }
  if ("body" in req) {
    return Promise.resolve(req.body);
  }
  const promise = req[RawBodySymbol] = new Promise((resolve, reject) => {
    const bodyData = [];
    req.on("error", (err) => {
      reject(err);
    }).on("data", (chunk) => {
      bodyData.push(chunk);
    }).on("end", () => {
      resolve(Buffer.concat(bodyData));
    });
  });
  return encoding ? promise.then((buff) => buff.toString(encoding)) : promise;
}
async function useBody(req) {
  if (ParsedBodySymbol in req) {
    return req[ParsedBodySymbol];
  }
  const body = await useRawBody(req);
  const json = destr(body);
  req[ParsedBodySymbol] = json;
  return json;
}

const MIMES = {
  html: "text/html",
  json: "application/json"
};

/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

/**
 * Module exports.
 * @public
 */

var parse_1 = parse;
var serialize_1 = serialize;

/**
 * Module variables.
 * @private
 */

var decode = decodeURIComponent;
var encode = encodeURIComponent;
var pairSplitRegExp = /; */;

/**
 * RegExp to match field-content in RFC 7230 sec 3.2
 *
 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
 * field-vchar   = VCHAR / obs-text
 * obs-text      = %x80-FF
 */

var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */

function parse(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }

  var obj = {};
  var opt = options || {};
  var pairs = str.split(pairSplitRegExp);
  var dec = opt.decode || decode;

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    var eq_idx = pair.indexOf('=');

    // skip things that don't look like key=value
    if (eq_idx < 0) {
      continue;
    }

    var key = pair.substr(0, eq_idx).trim();
    var val = pair.substr(++eq_idx, pair.length).trim();

    // quoted values
    if ('"' == val[0]) {
      val = val.slice(1, -1);
    }

    // only assign once
    if (undefined == obj[key]) {
      obj[key] = tryDecode(val, dec);
    }
  }

  return obj;
}

/**
 * Serialize data into a cookie header.
 *
 * Serialize the a name value pair into a cookie string suitable for
 * http headers. An optional options object specified cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 *
 * @param {string} name
 * @param {string} val
 * @param {object} [options]
 * @return {string}
 * @public
 */

function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;

  if (typeof enc !== 'function') {
    throw new TypeError('option encode is invalid');
  }

  if (!fieldContentRegExp.test(name)) {
    throw new TypeError('argument name is invalid');
  }

  var value = enc(val);

  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError('argument val is invalid');
  }

  var str = name + '=' + value;

  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;
    if (isNaN(maxAge)) throw new Error('maxAge should be a Number');
    str += '; Max-Age=' + Math.floor(maxAge);
  }

  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError('option domain is invalid');
    }

    str += '; Domain=' + opt.domain;
  }

  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError('option path is invalid');
    }

    str += '; Path=' + opt.path;
  }

  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== 'function') {
      throw new TypeError('option expires is invalid');
    }

    str += '; Expires=' + opt.expires.toUTCString();
  }

  if (opt.httpOnly) {
    str += '; HttpOnly';
  }

  if (opt.secure) {
    str += '; Secure';
  }

  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === 'string'
      ? opt.sameSite.toLowerCase() : opt.sameSite;

    switch (sameSite) {
      case true:
        str += '; SameSite=Strict';
        break;
      case 'lax':
        str += '; SameSite=Lax';
        break;
      case 'strict':
        str += '; SameSite=Strict';
        break;
      case 'none':
        str += '; SameSite=None';
        break;
      default:
        throw new TypeError('option sameSite is invalid');
    }
  }

  return str;
}

/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */

function tryDecode(str, decode) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}

const defer = typeof setImmediate !== "undefined" ? setImmediate : (fn) => fn();
function send(res, data, type) {
  if (type) {
    defaultContentType(res, type);
  }
  return new Promise((resolve) => {
    defer(() => {
      res.end(data);
      resolve(void 0);
    });
  });
}
function defaultContentType(res, type) {
  if (type && !res.getHeader("Content-Type")) {
    res.setHeader("Content-Type", type);
  }
}
function sendRedirect(res, location, code = 302) {
  res.statusCode = code;
  res.setHeader("Location", location);
  return send(res, "Redirecting to " + location, MIMES.html);
}
function appendHeader(res, name, value) {
  let current = res.getHeader(name);
  if (!current) {
    res.setHeader(name, value);
    return;
  }
  if (!Array.isArray(current)) {
    current = [current.toString()];
  }
  res.setHeader(name, current.concat(value));
}

function useCookies(req) {
  return parse_1(req.headers.cookie || "");
}
function useCookie(req, name) {
  return useCookies(req)[name];
}
function setCookie(res, name, value, serializeOptions) {
  const cookieStr = serialize_1(name, value, serializeOptions);
  appendHeader(res, "Set-Cookie", cookieStr);
}

class H3Error extends Error {
  constructor() {
    super(...arguments);
    this.statusCode = 500;
    this.statusMessage = "H3Error";
  }
}
function createError(input) {
  var _a;
  if (input instanceof H3Error) {
    return input;
  }
  const err = new H3Error((_a = input.message) != null ? _a : input.statusMessage);
  if (input.statusCode) {
    err.statusCode = input.statusCode;
  }
  if (input.statusMessage) {
    err.statusMessage = input.statusMessage;
  }
  if (input.data) {
    err.data = input.data;
  }
  return err;
}
function sendError(res, error, debug) {
  let h3Error;
  if (error instanceof H3Error) {
    h3Error = error;
  } else {
    console.error(error);
    h3Error = createError(error);
  }
  if (res.writableEnded) {
    return;
  }
  res.statusCode = h3Error.statusCode;
  res.statusMessage = h3Error.statusMessage;
  const responseBody = {
    statusCode: res.statusCode,
    statusMessage: res.statusMessage,
    stack: [],
    data: h3Error.data
  };
  if (debug) {
    responseBody.stack = (h3Error.stack || "").split("\n").map((l) => l.trim());
  }
  res.setHeader("Content-Type", MIMES.json);
  res.end(JSON.stringify(responseBody, null, 2));
}

function createApp(options = {}) {
  const stack = [];
  const _handle = createHandle(stack, options);
  const app = function(req, res) {
    return _handle(req, res).catch((error) => {
      if (options.onError) {
        return options.onError(error, req, res);
      }
      return sendError(res, error, !!options.debug);
    });
  };
  app.stack = stack;
  app._handle = _handle;
  app.use = (arg1, arg2, arg3) => use(app, arg1, arg2, arg3);
  return app;
}
function use(app, arg1, arg2, arg3) {
  if (Array.isArray(arg1)) {
    arg1.forEach((i) => use(app, i, arg2, arg3));
  } else if (Array.isArray(arg2)) {
    arg2.forEach((i) => use(app, arg1, i, arg3));
  } else if (typeof arg1 === "string") {
    app.stack.push(normalizeLayer({ ...arg3, route: arg1, handle: arg2 }));
  } else if (typeof arg1 === "function") {
    app.stack.push(normalizeLayer({ ...arg2, route: "/", handle: arg1 }));
  } else {
    app.stack.push(normalizeLayer({ ...arg1 }));
  }
  return app;
}
function createHandle(stack, options) {
  const spacing = options.debug ? 2 : void 0;
  return async function handle(req, res) {
    req.originalUrl = req.originalUrl || req.url || "/";
    const reqUrl = req.url || "/";
    for (const layer of stack) {
      if (layer.route.length > 1) {
        if (!reqUrl.startsWith(layer.route)) {
          continue;
        }
        req.url = reqUrl.slice(layer.route.length) || "/";
      } else {
        req.url = reqUrl;
      }
      if (layer.match && !layer.match(req.url, req)) {
        continue;
      }
      const val = await layer.handle(req, res);
      if (res.writableEnded) {
        return;
      }
      const type = typeof val;
      if (type === "string") {
        return send(res, val, MIMES.html);
      } else if (type === "object" && val !== void 0) {
        if (val && val.buffer) {
          return send(res, val);
        } else if (val instanceof Error) {
          throw createError(val);
        } else {
          return send(res, JSON.stringify(val, null, spacing), MIMES.json);
        }
      }
    }
    if (!res.writableEnded) {
      throw createError({ statusCode: 404, statusMessage: "Not Found" });
    }
  };
}
function normalizeLayer(layer) {
  if (layer.promisify === void 0) {
    layer.promisify = layer.handle.length > 2;
  }
  return {
    route: withoutTrailingSlash(layer.route),
    match: layer.match,
    handle: layer.lazy ? lazyHandle(layer.handle, layer.promisify) : layer.promisify ? promisifyHandle(layer.handle) : layer.handle
  };
}

export { H3Error, MIMES, appendHeader, assertMethod, callHandle, createApp, createError, createHandle, defaultContentType, defineHandle, defineMiddleware, isMethod, lazyHandle, promisifyHandle, send, sendError, sendRedirect, setCookie, use, useBase, useBody, useCookie, useCookies, useMethod, useQuery, useRawBody };
