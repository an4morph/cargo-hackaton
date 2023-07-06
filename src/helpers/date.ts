import dateFormat from 'dateformat'

export const isDateValid = (d: string) => {
  return !Number.isNaN(new Date(d).getTime())
}

export const strDateToInput = (d: string) => {
  return isDateValid(d)
    ? dateFormat(d, 'yyyy-mm-dd')
    : d
}

export const strDateToISO = (d: string) => {
  return isDateValid(d)
    ? new Date(d).toISOString()
    : d
}