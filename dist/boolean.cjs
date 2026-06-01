'use strict';

function ensureBoolean(value, defaultValue = false) {
  if (value == null)
    return Boolean(defaultValue);
  return Boolean(value);
}

exports.ensureBoolean = ensureBoolean;
//# sourceMappingURL=boolean.cjs.map
//# sourceMappingURL=boolean.cjs.map