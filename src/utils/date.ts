export const datediff = (first: Date, second: Date) => {
  // Take the difference between the dates and divide by milliseconds per day.
  // Round to nearest whole number to deal with DST.
  return Math.round(
    (second.valueOf() - first.valueOf()) / (1000 * 60 * 60 * 24),
  );
};
