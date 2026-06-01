export function ensureNumber(
  value: unknown,
  defaultValue: number = 0
): number {
  if (value == null)
    return ensureNumber(defaultValue)

  value = Number(value)
  if (Number.isNaN(value))
    return ensureNumber(defaultValue)

  return value as number
}

export function ensureFiniteNumber(
  value: unknown,
  defaultValue: number = 0
): number {
  value = ensureNumber(value, defaultValue)

  if (typeof value === 'number' && isFinite(value))
    return value

  return ensureFiniteNumber(defaultValue)
}

export function ensureInteger(value: number, defaultValue: number = 0) {
  return Math.trunc(ensureFiniteNumber(value, defaultValue))
}
