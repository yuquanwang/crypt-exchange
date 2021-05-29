import { dateFormat } from '../utils/dateutils'

/**
 * @param {number} time timestamp
 */
export function timeAgo(time) {
  const diff = (Date.now() - time) / 1000
  if (diff < 30) {
    return diff + '秒前'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 30) {
    //30天
    return Math.ceil(diff / (3600 * 24)) + '天前'
  } else {
    return Math.ceil(diff / (3600 * 24 * 30)) + '月前'
  }
}
/**
 * date format yyyy-MM-DD hh:mm:ss
 * @param {*} datetime timestamp
 * @returns
 */
export function formatDate(datetime) {
  return dateFormat(datetime)
}
