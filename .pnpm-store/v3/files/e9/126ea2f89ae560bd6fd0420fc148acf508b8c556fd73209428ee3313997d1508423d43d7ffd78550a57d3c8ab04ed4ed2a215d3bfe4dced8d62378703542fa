export function defineDriver(factory) {
  return factory;
}
export function isPrimitive(arg) {
  const type = typeof arg;
  return arg === null || type !== "object" && type !== "function";
}
export function stringify(arg) {
  return isPrimitive(arg) ? arg + "" : JSON.stringify(arg);
}
