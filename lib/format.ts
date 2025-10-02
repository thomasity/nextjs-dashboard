export const monthMap: Record<string, string> = {
  '01': 'Jan.',
  '02': 'Feb.',
  '03': 'Mar.',
  '04': 'Apr.',
  '05': 'May',
  '06': 'Jun.',
  '07': 'Jul.',
  '08': 'Aug.',
  '09': 'Sep.',
  '10': 'Oct.',
  '11': 'Nov.',
  '12': 'Dec.',
};

export function formatYearMonth(dateStr: string, still_working?: boolean): string {
    if (still_working) {
        return 'Present';
    }
    const [year, month] = dateStr.split('-');
    const monthName = monthMap[month] ?? 'Invalid Month';
    if (monthName === 'Invalid Month') return monthName;
    return `${monthName} ${year}`;
}

export function slugify(input: string) {
  return input
    .normalize("NFKD")                 // split accents
    .replace(/[\u0300-\u036f]/g, "")   // remove diacritics
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")       // non-alphanum → hyphen
    .replace(/^-+|-+$/g, "")           // trim hyphens
    .slice(0, 80);                     // optional max length
}