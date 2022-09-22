/**
 * Returns object of time formats
 */

export const getTimeFormat = (dateObj: Date) => ({
  year: dateObj.getFullYear(),
  month: dateObj.getMonth(),
  date: dateObj.getDate(),
  day: dateObj.getDay(),
  hour: dateObj.getHours(),
  min: dateObj.getMinutes(),
  sec: dateObj.getSeconds(),
  ms: dateObj.getMilliseconds(),
  totalMs: dateObj.getTime(),
})
