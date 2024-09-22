export function formatTo12Hour(dateString: Date) {
  const date = new Date(dateString);
  date.setHours(date.getHours() - 1);
  let hours = date.getHours();
  const minutes = date.getMinutes();

  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;

  const formattedTime = `${hours}:${minutes < 10 ? "0" : ""}${minutes} ${ampm}`;
  return formattedTime;
}

export function getTimeDifference(
  departureDate: Date,
  arrivalDate: Date
): string {
  const startDate = new Date(departureDate);
  const endDate = new Date(arrivalDate);
  const diffMs = endDate.getTime() - startDate.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const hours = Math.floor(diffMins / 60);
  const minutes = diffMins % 60;

  let result = "";
  if (hours > 0) {
    result += `${hours}h `;
  }
  if (minutes > 0) {
    result += `${minutes}m`;
  }
  return result;
}
