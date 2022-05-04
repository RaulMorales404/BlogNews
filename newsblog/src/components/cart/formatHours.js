export default function getDate(date) {
  let newDate = date?.substr(0, 10);
  let hous = date?.substr(11, 8);

  const ti = new Date(date?.substr(0, 11) + hous + "Z").toLocaleTimeString(
    "en-MX",
    {
      timeZone: "UTC",
      hour12: true,
      hour: "numeric",
      minute: "numeric",
    }
  );

  return `${newDate}  ${ti}`;
}
