export const formatTime = (time) => {
  if (time < 10) {
    return "0" + time;
  }
  return time;
};

export const parseDate = (date = new Date()) => {
  return `${formatTime(date.getDate())}.${formatTime(
    date.getMonth() + 1
  )} at ${formatTime(
    date.getHours() > 13 ? date.getHours() - 12 : date.getHours() || 12
  )}:${formatTime(date.getMinutes())} ${date.getHours() > 13 ? "am" : "pm"}`;
};
