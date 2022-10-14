export interface DateObj {
  year: number
  month: number
  date: number
  day: number
  hour: number
  minute: number
  second: number
}

/**
 * Returns object of time formats
 */

const getTimeFormat = (dateObj: Date): DateObj => ({
  year: dateObj.getFullYear(),
  month: dateObj.getMonth(),
  date: dateObj.getDate(),
  day: dateObj.getDay(),
  hour: dateObj.getHours(),
  minute: dateObj.getMinutes(),
  second: dateObj.getSeconds(),
})

export default getTimeFormat
