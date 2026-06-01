function ensureArray(value, defaultValue = []) {
  if (value == null) {
    return [].concat(defaultValue);
  }
  return Array.isArray(value) ? value : [].concat(value);
}

export { ensureArray };
//# sourceMappingURL=array.js.map
//# sourceMappingURL=array.js.map