import { Nav } from "./components/Nav.js";
import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import { Footer } from "./components/Footer.js";
import { Main2 } from "./components/Main2.js";

import { eventsStore } from "../assets/data/eventsStore.js";
import { Card } from "./components/Card.js";

const mainPage = "#/";
const eventsPage = "#/joinMeetup";

document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = `
    ${Nav("page__nav", mainPage)}
    <div id="mainContent"></div>
    ${Footer("page__footer")}
  `;

  renderPage(getCurrentRoute());

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", changeContent);
  });
});

function getCurrentRoute() {
  return window.location.hash.slice(1) || "/";
}

function renderPage(route) {
  let content = "";

  if (route === "/joinMeetup") {
    content = Main2("page__main");
    document.title = "Join Meetup";
  } else {
    content = `
      ${Header("page__header", eventsPage)}
      ${Main("page__main", eventsPage)}
    `;
    document.title = "Meet Up";
  }

  document.getElementById("mainContent").innerHTML = content;

  if (route === "/joinMeetup") {
    initJoinMeetupPage();
  } else {
    initMainPage();
  }

  handleDropdown();
}

function changeContent(event) {
  event.preventDefault();

  const link = event.target.closest("a");
  const path = link.getAttribute("href").slice(1);
  window.location.hash = path;
}

window.addEventListener("hashchange", () => {
  renderPage(getCurrentRoute());
});

function initMainPage() {
  const editLocation = document.getElementById("editLocation");
  const displayLocation = document.getElementById("displayLocation");
  const inputCity = document.getElementById("inputCity");
  const eventsLocation = document.querySelector(".events__location");

  if (!displayLocation || !inputCity) return;

  displayLocation.value = inputCity.value;

  displayLocation.addEventListener("blur", () => {
    displayLocation.setAttribute("readonly", true);
    eventsLocation.classList.toggle("active");
  });

  editLocation.addEventListener("click", () => {
    displayLocation.removeAttribute("readonly");
    displayLocation.focus();
    eventsLocation.classList.toggle("active");
  });
}

function initJoinMeetupPage() {}

function handleDropdown() {
  const dropDowns = document.querySelectorAll(".dropDown");

  dropDowns.forEach((dropDown) => {
    const button = dropDown.querySelector("button");
    const list = dropDown.querySelector("ul");
    list.querySelectorAll("li").forEach((li) => {
      if (li.textContent.trim() === button.textContent.trim()) {
        li.classList.add("current");
      }
    });

    button.addEventListener("click", () => {
      list.querySelectorAll("li").forEach((li) => {
        if (li.textContent.trim() === button.textContent.trim()) {
          li.classList.add("current");
        } else {
          li.classList.remove("current");
        }
      });
      list.classList.add("showList");
    });
    list.addEventListener("click", () => {
      if (event.target.tagName === "LI") {
        button.textContent = event.target.textContent;

        list
          .querySelectorAll("li")
          .forEach((li) => li.classList.remove("current"));

        event.target.classList.add("current");

        const selectedValue = event.target.getAttribute("data-value");

        if (selectedValue) {
          renderFiltredCards();
        }

        list.classList.remove("showList");
      }
    });
    document.addEventListener("click", (event) => {
      if (!dropDown.contains(event.target)) {
        list.classList.remove("showList");
      }
    });
  });
}

function renderFiltredCards() {
  const container = document.querySelector(".main2__cards");
  const typeBtn = document.getElementById("selectType");
  const distanceBtn = document.getElementById("selectDistance");
  const typeList = typeBtn.nextElementSibling;
  const distanceList = distanceBtn.nextElementSibling;

  let type = typeList.querySelector(".current").getAttribute("data-value");
  let distance = distanceList
    .querySelector(".current")
    .getAttribute("data-value");
  const category = document
    .getElementById("selectCategory")
    .nextElementSibling.querySelector(".current")
    .getAttribute("data-value");

  if (distance !== "any") {
    distance = JSON.parse(distance);
    type = "offline";
    typeBtn.textContent = getContext(typeList, type);
    typeBtn.disabled = true;
  } else if (type === "offline" && typeBtn.disabled) {
    type = "any";
    typeBtn.textContent = getContext(typeList, type);
    typeBtn.disabled = false;
  } else {
    typeBtn.disabled = false;
  }
  setCurrentType(typeList, type);

  if (type === "online") {
    distance = "any";
    distanceBtn.textContent = getContext(distanceList, distance);
    distanceBtn.disabled = true;
  } else {
    distanceBtn.disabled = false;
  }

  function getContext(list, condition) {
    return [...list.querySelectorAll("li")].find(
      (li) => li.getAttribute("data-value") === condition
    ).textContent;
  }
  function setCurrentType(list, condition) {
    list.querySelectorAll("li").forEach((li) => li.classList.remove("current"));

    [...list.querySelectorAll("li")]
      .find((li) => li.getAttribute("data-value") === condition)
      .classList.add("current");
  }

  if (container) {
    const content = eventsStore
      .filter((card) => {
        return (
          (type === "any" || card.type === type) &&
          (distance === "any" ||
            (card.distance >= distance[0] && card.distance <= distance[1])) &&
          (category === "any" || card.category === category)
        );
      })
      .map((card) => {
        const { image, title, category, type, date, distance, attendees } =
          card;
        return `
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
        `;
      })
      .join("");

    container.innerHTML = content;
  }
}
