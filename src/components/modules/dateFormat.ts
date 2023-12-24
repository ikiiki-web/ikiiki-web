export const dateFormat = (date: string) => {
  const d = new Date(date)
  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'Asia/Tokyo',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }
  const formatter = new Intl.DateTimeFormat('ja-JP', options)
  const formattedDate = formatter.format(d)
  return formattedDate.replace(/\//g, '.')
}
