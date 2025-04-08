export function Card(modifierClass = "") {
  return `
    <div class="card ${modifierClass} card--horizontal card--main">
      <img
        src="./src/assets/imgs/events/day-tranding-stategy.png"
        alt="Event image"
        class="card__img"
      />
      <div class="card__content">
        <h3 class="card__title">Day Trading Idea and Strategy</h3>
        <p class="card__description">
          Business
          <span class="card__distance">(5 km)</span>
        </p>
        <p class="card__date">Mon, Mar 18 · 7:00 PM PDT</p>
        <div class="card__meta">
          <p class="card__attendees">1 going</p>
          <p class="card__price">Free</p>
        </div>
      </div>
    </div>
  `;
}
