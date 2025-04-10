import { eventsStore } from "../../assets/data/eventsStore.js";
import { Card } from "./Card.js";

export function Main2(parentClass = "") {
  return `
    <main main class="${parentClass} main2">
      <div class="container">
        <div class="main2__content">
          <h2 class="main2__title title">Events near New York, NY</h2>
          <h3 class="main2__subtitle">Events</h3>
          <div class="main2__sortedParam">
            <div class="main2__customSelect dropDown">
              <button id="selectType">Any type</button>
              <ul>
                <li data-value="any">Any type</li>
                <li data-value="online">Online</li>
                <li data-value="offline">Offline</li>
              </ul>
            </div>
            <div class="main2__customSelect dropDown">
              <button id="selectDistance">Any distance</button>
              <ul>
                <li data-value="any">Any distance</li>
                <li data-value="[0, 25]">0 - 25 km</li>
                <li data-value="[25, 50]">25 - 50 km</li>
                <li data-value="[50, 100]">50 - 100 km</li>
              </ul>
            </div>
            <div class="main2__customSelect dropDown">
              <button id="selectCategory">Any category</button>
              <ul>
                <li data-value="any">Any category</li>
                <li data-value="Social Activities">Social Activities</li>
                <li data-value="Hobbies and Passions">Hobbies and Passions</li>
                <li data-value="Health and Wellbeing">Health and Wellbeing</li>
                <li data-value="Business">Business</li>
                <li data-value="Technology">Technology</li>
              </ul>
            </div>
          </div>
          <div class="main2__cards">
            ${eventsStore
              .map(
                ({
                  image,
                  title,
                  category,
                  type,
                  date,
                  distance,
                  attendees,
                }) => `
                  ${Card(
                    image,
                    title,
                    category,
                    type,
                    date,
                    distance,
                    attendees,
                    "card--horizontal"
                  )}
                `
              )
              .join("")}
          </div>
          <div class="main2__map">
            <div class="main2__eventsNear">
              <p>Find events near</p>
              <h3>New York, NY</h3>
            </div>
            <div class="main2__mapContainer">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193596.2600280618!2d-74.14431244705203!3d40.69728463489951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z0J3RjNGOLdCZ0L7RgNC6LCDQodCo0JA!5e0!3m2!1sru!2sde!4v1744150906657!5m2!1sru!2sde"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>

              <a
                href="https://www.google.com/maps/@40.6782886,-73.9983063,12z?entry=ttu&g_ep=EgoyMDI1MDQwNi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
              >
                Browse in map
              </a>
              <button>
                <img
                  src="./src/assets/icons/events/close-map.svg"
                  alt="Close map"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  `;
}
