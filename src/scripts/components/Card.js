export function Card(
  image,
  title,
  category,
  type,
  date,
  distance,
  attendees,
  modifierClass = ""
) {
  let attendeesText = "";
  if (attendees) {
    const label = modifierClass !== "card--horizontal" ? "going" : "attendees";
    attendeesText = `<p class="card__attendees">${attendees} ${label}</p>`;
  }
  let distanceText = "";
  if (distance && type === "offline") {
    distanceText = `<span class="card__distance">(${distance} km)</span>`;
  }
  let priceBlock = "";
  if (modifierClass !== "card--horizontal") {
    priceBlock = `<p class="card__price">Free</p>`;
  }
  let onlineBlock = "";
  if (type === "online") {
    onlineBlock = `<div class="card__type">Online Event</div>`;
  }

  return `
    <div class="card ${modifierClass}">
      <img
        src="${image}"
        alt="Event image"
        class="card__img"
      />
      <div class="card__content">
        <h3 class="card__title">${title}</h3>
        <p class="card__description">
          ${category}
          ${distanceText}
        </p>
        <p class="card__date">${formattedDate(date)}</p>
        <div class="card__meta">
          ${attendeesText}
          ${priceBlock}
        </div>
        ${onlineBlock}
      </div>
    </div>
  `;
}

function formattedDate(date) {
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const weekday = weekdays[date.getDay()];
  const month = months[date.getMonth()];
  const day = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  if (hours === 0) hours = 12;

  minutes = minutes < 10 ? "0" + minutes : minutes;

  const timeZone = date
    .toLocaleString("en-US", { timeZoneName: "short" })
    .split(" ")
    .pop();

  return `${weekday}, ${month} ${day} · ${hours}:${minutes} ${ampm} ${timeZone}`;
}
