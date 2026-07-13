const DIACRITICS = /[\u064B-\u065F\u0670]/g;
const ZWNJ = /\u200c/g;

export function normalizePersianText(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/ي/g, "ی")
    .replace(/ك/g, "ک")
    .replace(DIACRITICS, "")
    .replace(ZWNJ, "")
    .replace(/\s+/g, " ");
}

export function includesNormalized(haystack: string, needle: string): boolean {
  const normalizedNeedle = normalizePersianText(needle);
  if (!normalizedNeedle) return true;
  return normalizePersianText(haystack).includes(normalizedNeedle);
}
