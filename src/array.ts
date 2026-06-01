export function ensureArray<T>(value: unknown, defaultValue: T[] = []): T[] {
  if (value == null) {
    return ([] as T[]).concat(defaultValue)
  }

  return Array.isArray(value) ? value : ([] as T[]).concat(value as T);
}