export const formatDate = (date: string, locale = "en-US") =>
  new Date(date).toLocaleDateString(locale, { month: "short", day: "numeric", year: "numeric" });
