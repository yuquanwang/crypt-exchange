import moment from 'moment'

/**
 * date time format to utc+8 yyyy-MM-dd HH:mm:ss
 * @param {*} value timestamp
 * @param {*} timeZone  default utc+8:+0800
 */
export function dateFormat(value, timeZone = '+0800') {
  if (value === null) {
    return ''
  }
  if (!value) {
    return ''
  }
  return moment(value)
    .utcOffset(timeZone)
    .format('YYYY-MM-DD HH:mm:ss')
}
/**
 * 给定毫秒表示对应的dxhxmxs: d/h/m/s（天/时/分/秒）
 * @param {*} value 毫秒
 */
export function timeDuration(value) {
  // mills to d/h/m
  if (value < 60000) {
    // <1分
    return parseInt(value / 1000) + 's'
  }
  let tm = value
  let sub = tm
  let fmt = ''
  if (tm) {
    tm = parseInt(tm / 60000) // m
  }
  // 60 m
  sub = tm % 60
  tm = parseInt(tm / 60)
  if (sub > 0) {
    fmt = sub + 'm'
  }
  if (tm === 0) {
    return fmt
  }
  sub = tm % 24
  tm = parseInt(tm / 24)
  if (sub > 0) {
    fmt = sub + 'h' + fmt
  }
  if (tm > 0) {
    fmt = tm + 'd' + fmt
  }
  return fmt
}

/**
 * 给定毫秒当前已经过去多久 d/h/m/s（天/时/分/秒）
 * @param {*} mills 毫秒
 */
export function timePast(mills) {
  const now = Date.now()
  return timeDuration(now - mills)
}
