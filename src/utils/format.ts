export const formatToday = (locale = "en-US") => {
  const now = new Date();
  return new Intl.DateTimeFormat(locale, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(now);
};
