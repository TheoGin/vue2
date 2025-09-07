/**
 * 时间格式化
 * @param timestamp 时间戳
 * @param showTime 是否显示时间
 * @returns {`${number}-${string}-${string}`}
 */
export default function(timestamp, showTime = false) {
  const date = new Date(+timestamp);
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date
    .getDate()
    .toString()
    .padStart(2, "0");

  let str = `${date.getFullYear()}-${month}-${day}`;

  const hour = date
    .getHours()
    .toString()
    .padStart(2, "0");
  const minute = date
    .getMinutes()
    .toString()
    .padStart(2, "0");
  const second = date
    .getSeconds()
    .toString()
    .padStart(2, "0");
  if (showTime) {
    str += ` ${hour}:${minute}:${second}`;
  }
  return str;
}
