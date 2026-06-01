'use strict';

function ensureArray(value, defaultValue = []) {
  if (value == null) {
    return [].concat(defaultValue);
  }
  return Array.isArray(value) ? value : [].concat(value);
}

exports.ensureArray = ensureArray;
//# sourceMappingURL=array.cjs.map
//# sourceMappingURL=array.cjs.map