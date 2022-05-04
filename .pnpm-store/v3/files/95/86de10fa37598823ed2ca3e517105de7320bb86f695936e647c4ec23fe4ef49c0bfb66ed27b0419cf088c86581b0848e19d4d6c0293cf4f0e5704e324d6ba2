"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defineDriver = defineDriver;
exports.isPrimitive = isPrimitive;
exports.stringify = stringify;

function defineDriver(factory) {
  return factory;
}

function isPrimitive(arg) {
  const type = typeof arg;
  return arg === null || type !== "object" && type !== "function";
}

function stringify(arg) {
  return isPrimitive(arg) ? arg + "" : JSON.stringify(arg);
}