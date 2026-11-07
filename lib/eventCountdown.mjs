function isValidDateParts(year, month, day, hours, minutes) {
  const date = new Date(year, month - 1, day, hours, minutes);

  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day &&
    date.getHours() === hours &&
    date.getMinutes() === minutes
  );
}

function getLocalDateString(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function getEventCountdown(event, now = new Date()) {
  if (
    !event ||
    typeof event.date !== "string" ||
    typeof event.time !== "string"
  ) {
    return { status: "invalid" };
  }

  const dateParts = /^(\d{4})-(\d{2})-(\d{2})$/.exec(event.date);
  const timeParts = /^(\d{2}):(\d{2})$/.exec(event.time);

  if (!dateParts || !timeParts) {
    return { status: "invalid" };
  }

  const [, yearText, monthText, dayText] = dateParts;
  const [, hoursText, minutesText] = timeParts;
  const year = Number(yearText);
  const month = Number(monthText);
  const day = Number(dayText);
  const hours = Number(hoursText);
  const minutes = Number(minutesText);

  if (
    hours > 23 ||
    minutes > 59 ||
    !isValidDateParts(year, month, day, hours, minutes)
  ) {
    return { status: "invalid" };
  }

  const currentDate = now instanceof Date ? now : new Date(now);
  if (!Number.isFinite(currentDate.getTime())) {
    return { status: "invalid" };
  }

  const startDate = new Date(year, month - 1, day, hours, minutes);
  const remainingMilliseconds = startDate.getTime() - currentDate.getTime();

  if (remainingMilliseconds <= 0) {
    return {
      status:
        event.date < getLocalDateString(currentDate) ? "passed" : "started",
    };
  }

  const remainingMinutes = Math.ceil(remainingMilliseconds / 60_000);

  return {
    status: "upcoming",
    days: Math.floor(remainingMinutes / (24 * 60)),
    hours: Math.floor((remainingMinutes % (24 * 60)) / 60),
    minutes: remainingMinutes % 60,
  };
}
