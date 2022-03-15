export function getSizedImage(imgUrl, size = 0) {
  return `${imgUrl}?param=${size}*${size}`;
}

export function getCount(count) {
  if (count < 0) return;
  if (count < 10000) {
    return count;
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + '万';
  } else {
    return Math.floor(count / 10000000) / 10 + '亿';
  }
}

export function getPlayUrl(id) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
}

export function formatDate(time, fmt) {
  const date = new Date(time);

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').slice(4 - RegExp.$1.length));
  }
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
  };
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      const str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
    }
  }
  return fmt;
}

function padLeftZero(str) {
  return ('00' + str).slice(str.length);
}

export function formatMonthDay(time = 0) {
  return formatDate(time, 'MM月dd日');
}

export function formatMinuteSecond(time = 0) {
  return formatDate(time, 'mm:ss');
}
