export const formatDate = (
  dateString: string,
  locale = 'ko-KR',
  options?: Intl.DateTimeFormatOptions
) => {
  return new Date(dateString).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options
  })
}
