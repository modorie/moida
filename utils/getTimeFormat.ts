/**
 * Returns time formats object
 *
 * @param date - ( default = new Date() )
 */

export const getTimeFormat = (date: Date = new Date()) => ({
  year: date.getFullYear(),
  month: date.getMonth(),
  date: date.getDate(),
  day: date.getDay(),
  hour: date.getHours(),
  min: date.getMinutes(),
  sec: date.getSeconds(),
  ms: date.getMilliseconds(),
  totalMs: date.getTime(),
})
