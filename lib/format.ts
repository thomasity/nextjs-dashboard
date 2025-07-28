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