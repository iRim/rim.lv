export type DateFormat = 'MM/YYYY' | 'MMM YYYY' | 'MMMM YYYY'

export const formatDate = (
  date: Date | string,
  format: DateFormat = 'MM/YYYY',
  locale = 'en-US',
): string => {
  const d = date instanceof Date ? date : new Date(date)

  if (format === 'MM/YYYY') {
    return `${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`
  }

  return new Intl.DateTimeFormat(locale, {
    month: format === 'MMM YYYY' ? 'short' : 'long',
    year: 'numeric',
  }).format(d)
}
