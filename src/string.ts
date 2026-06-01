export function ensureString(
  value: unknown,
  defaultValue: string = ""
): string {
  if (value == null)
    return String(defaultValue)
  return String(value)
}
