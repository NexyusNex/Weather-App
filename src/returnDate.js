export default function returnDate(dt, timezone) {
  let date = new Date();
  let localTime = date.getTime();
  let localOffset = date.getTimezoneOffset() * 60000;
  let utc = localTime + localOffset;
  let local_date = utc + 1000 * timezone;
  return new Date(local_date).toLocaleString();
}
