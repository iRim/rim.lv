export const formatResumeDate = (date: Date | string): string => {
  const d = date instanceof Date ? date : new Date(date)

  return `${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`
}
