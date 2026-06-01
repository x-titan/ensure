declare function ensureNumber(value: unknown, defaultValue?: number): number;
declare function ensureFiniteNumber(value: unknown, defaultValue?: number): number;
declare function ensureInteger(value: number, defaultValue?: number): number;

export { ensureFiniteNumber, ensureInteger, ensureNumber };
