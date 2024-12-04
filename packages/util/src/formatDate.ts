type DateFormat = 'yyyy-MM-dd' | 'yyyy.MM.dd' | 'yy.MM.dd' | 'default'

/**
 *
 * @example
 * formatDate('2024-03-21', 'yyyy-MM-dd')      // '2024-03-21'
 * formatDate('2024-03-21', 'yyyy.MM.dd')      // '2024.03.21'
 * formatDate('2024-03-21', 'yy.MM.dd')        // '24.03.21'
 * formatDate('2024-03-21', 'default')         // '2024년 3월 21일'
 * formatDate('2024-03-21')                    // '2024년 3월 21일'
 */
export const formatDate = (
  dateInput: string | Date | number | null | undefined,
  format: DateFormat = 'default',
  locale = 'ko-KR',
  options?: Intl.DateTimeFormatOptions
) => {
  try {
    if (!dateInput) return ''

    const date = dateInput instanceof Date ? dateInput : new Date(dateInput)

    if (isNaN(date.getTime())) return ''

    if (format === 'default') {
      return date.toLocaleDateString(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        ...options
      })
    }

    const year = date.getFullYear()
    const slicedYear = String(date.getFullYear()).slice(2)
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')

    switch (format) {
      case 'yyyy-MM-dd':
        return `${year}-${month}-${day}`
      case 'yyyy.MM.dd':
        return `${year}.${month}.${day}`
      case 'yy.MM.dd':
        return `${slicedYear}.${month}.${day}`
      default:
        return `${year}-${month}-${day}`
    }
  } catch (error) {
    console.error('Date formatting error:', error)
    return ''
  }
}
