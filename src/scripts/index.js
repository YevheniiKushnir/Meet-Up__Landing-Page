import { Nav } from "./components/Nav.js";
import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import { Footer } from "./components/Footer.js";
import { Main2 } from "./components/Main2.js";
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

function initJoinMeetupPage() {
  const type = document.getElementById("selectType");
  const distance = document.getElementById("selectDistance");
  const category = document.getElementById("selectCategory");
}

function handleDropdown() {
  const dropDowns = document.querySelectorAll(".dropDown");

  dropDowns.forEach((dropDown) => {
    const button = dropDown.querySelector("button");
    const list = dropDown.querySelector("ul");

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
