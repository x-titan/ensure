export function ensureBoolean(value: unknown, defaultValue: boolean = false) {
  if (value == null)
    return Boolean(defaultValue)
  return Boolean(value)
}
Boolean(false)