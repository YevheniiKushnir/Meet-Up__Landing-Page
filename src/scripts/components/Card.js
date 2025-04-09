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
          ${
            distance && type === "offline"
              ? `<span class="card__distance">(${distance} km)</span>`
              : ""
          }
        </p>
        <p class="card__date">${formattedDate(date)}</p>
        <div class="card__meta">
          ${attendees ? `<p class="card__attendees">${attendees}</p>` : ""}
          <p class="card__price">Free</p>
        </div>
        ${type === "online" ? `<div class="card__type">Online Event</div>` : ""}
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

  return `${weekday}, ${month} ${day} · ${hours}:${minutes} ${ampm} PDT`;
}
