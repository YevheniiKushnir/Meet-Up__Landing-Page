import { categoryList } from "../../assets/data/categoryList.js";
import { cityList } from "../../assets/data/cityList.js";
import { eventsStore } from "../../assets/data/eventsStore.js";
import { Card } from "./Card.js";

export function Main(parentClass = "", url) {
  return `
    <main class="${parentClass} main">
    ${events("main__events", url)}
    ${joinMeetup("main__joinMeetup")}
    ${categories("main__categories")}
    ${cities("main__cities")}
    ${howMeetupWorks("main__howMeetupWorks")}
    ${friendships("main__friendships")}
    </main>
  `;
}

function events(parentClass = "", url) {
  return `
    <section class="${parentClass} events">
      <div class="container">
        <div class="events__content">
          <div class="events__block">
            <div class="events__blockHeader">
              <div>
                <h2 class="events__title title">Event</h2>
                <div>
                  <div class="events__location">
                    <input type="text" id="displayLocation" readonly />
                    <button id="editLocation"></button>
                  </div>
                </div>
              </div>
              <a href=${url}>See all events</a>
            </div>
            <div class="events__blockContent">
              ${eventsStore
                .slice(0, 8)
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
                    attendees
                  )}
                `
                )
                .join("")}
            </div>
            <div class="events__block">
              <div class="events__blockHeader">
                <h2 class="events__title title">Upcoming online events</h2>
                <a href=${url}>See all events</a>
              </div>
              <div class="events__blockContent">
              ${eventsStore
                .slice(8, 12)
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
                    attendees
                  )}
                `
                )
                .join("")}
              </div>
            </div>
          </div>
        </div>
      </section>
  `;
}

function joinMeetup(parentClass = "") {
  return `
    <section class="${parentClass} joinMeetup">
      <div class="container">
        <div class="joinMeetup__content">
          <div class="joinMeetup__grid">
            <h2 class="joinMeetup__title title">Join Meetup</h2>
            <p class="joinMeetup__text">
              People use Meetup to meet new people, learn new things, find
              support, get out of their comfort zones, and pursue their
              passions, together. Membership is free.
            </p>
            <button
              class="joinMeetup__button button button--red"
              id="signUp--joinMeetup"
            >
              Sign up
            </button>
            <img
              src="./src/assets/imgs/join-meetup/join-meetup.png"
              alt="Join Meetup decorative picture"
              class="joinMeetup__deco"
            />
          </div>
        </div>
      </div>
    </section>
  `;
}

function categories(parentClass = "") {
  return `
    <section class="${parentClass} categories">
      <div class="container">
        <div class="categories__content">
          <h2 class="categories__title title">Explore top categories</h2>
            <div class="categories__grid">
              ${categoryList
                .map(
                  (category) => `
                    <a role="link" class="categories__block">
                      <img src="${category.src}" alt="${category.alt}" />
                      <h3>${category.title}</h3>
                    </a>
                  `
                )
                .join("")}
            </div>
          </div>
        </div>
    </section>
  `;
}

function cities(parentClass = "") {
  return `
    <section class="${parentClass} cities">
      <div class="container">
          <div class="cities__content">
            <h2 class="cities__title title">Popular cities on Meetup</h2>
            <p class="cities__description">
              Looking for fun things to do near you? See what Meetup organizers
              are planning in cities around the country.
            </p>
            <div class="cities__grid">
              ${cityList
                .map(
                  (city) => `
                    <div class="cities__city">
                      <a role="link">
                        <img
                          src="${city.src}"
                          alt="${city.alt}"
                        />
                      </a>
                      <h3>${city.title}</h3>
                    </div>
                  `
                )
                .join("")}
            </div>
          </div>
        </div>
      </section>
  `;
}

function howMeetupWorks(parentClass = "") {
  return `
    <section class="${parentClass} howMeetupWorks">
      <div class="container">
        <div class="howMeetupWorks__content">
          <h2 class="howMeetupWorks__title title">How Meetup works</h2>
          <div class="howMeetupWorks__blocks">
            <div class="howMeetupWorks__block">
              <img
                src="./src/assets/icons/how-meetup-works/search-grey-blue.svg"
                alt="Logo from this block"
              />
              <div>
                <h3>Discover events and groups</h3>
                <p>
                  See who's hosting local events for all the things you love
                </p>
                <a role="link">Search events and groups </a>
              </div>
            </div>
            <div class="howMeetupWorks__block">
              <img
                src="./src/assets/icons/how-meetup-works/plus-grey-blue.svg"
                alt="Logo from this block"
              />
              <div>
                <h3>Start a group to host events</h3>
                <p>
                  Create your own Meetup group, and draw from a community of millions
                </p>
                <a role="link">Start a group </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function friendships(parentClass = "") {
  return `
    <section class="${parentClass} friendships">
      <div class="container">
        <div class="friendships__content">
          <h2 class="friendships__title title">Friendships are made on Meetup</h2>
          <p class="friendships__description">
            Since 2002, members have used Meetup to make new friends, meet
            like-minded people, spend time on hobbies, and connect with locals
            over shared interests. Learn how.
          </p>
          <div class="friendships__blocks">
            <div class="friendships__block">
              <img
                src="./src/assets/imgs/friendships/to-make-friends-at-brunch.jpeg"
                alt="I Used Meetup to Make Friends at Brunch image"
              />
              <h3>I Used Meetup to Make Friends at Brunch</h3>
              <p>
                New Jersey-based writer and college student Brianna Stryker
                wanted to meet friends in her hometown. Learn how she used
                Meetup to make connections by joining a Girls Night Out Meetup
                group.
              </p>
              <a role="link">Read more</a>
            </div>
            <div class="friendships__block">
              <img
                src="./src/assets/imgs/friendships/turn-casual-connections-into-close-freindships.jpeg"
                alt="How to Turn Casual Connections into Close Friendships image"
              />
              <h3>How to Turn Casual Connections into Close Friendships</h3>
              <p>
                It’s proven that close friendships are harder to make as an
                adult. But don’t sweat it: here’s what you can do to simplify
                the process.
              </p>
              <a role="link">Read more</a>
            </div>
            <div class="friendships__block">
              <img
                src="./src/assets/imgs/friendships/have-right-number-of-friends.jpeg"
                alt="Do You Have the “Right” Number of
                Friends? image"
              />
              <h3>Do You Have the “Right” Number of Friends?</h3>
              <p>
                Studies from around the world have tried to help people answer
                this question. Learn about the three tiers of friendship and
                how to fulfill them.
              </p>
              <a role="link">Read more</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
