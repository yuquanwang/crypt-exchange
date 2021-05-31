import { dateFormat, longTimeAgo } from '../utils/dateutils'

/**
 * @param {number} time timestamp
 */
export function timeAgo(time) {
  return longTimeAgo(time)
}
/**
 * date format yyyy-MM-DD hh:mm:ss
 * @param {*} datetime timestamp
 * @returns
 */
export function formatDate(datetime) {
  return dateFormat(datetime)
}
