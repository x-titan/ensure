'use strict';

function ensureNumber(value, defaultValue = 0) {
  if (value == null)
    return ensureNumber(defaultValue);
  value = Number(value);
  if (Number.isNaN(value))
    return ensureNumber(defaultValue);
  return value;
}
function ensureFiniteNumber(value, defaultValue = 0) {
  value = ensureNumber(value, defaultValue);
  if (typeof value === "number" && isFinite(value))
    return value;
  return ensureFiniteNumber(defaultValue);
}
function ensureInteger(value, defaultValue = 0) {
  return Math.trunc(ensureFiniteNumber(value, defaultValue));
}

exports.ensureFiniteNumber = ensureFiniteNumber;
exports.ensureInteger = ensureInteger;
exports.ensureNumber = ensureNumber;
//# sourceMappingURL=number.cjs.map
//# sourceMappingURL=number.cjs.map