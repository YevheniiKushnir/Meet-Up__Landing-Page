import { Page } from "./components/Page.js";

document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = Page();

  // const editLocation = document.getElementById("editLocation");
  // const displayLocation = document.getElementById("displayLocation");
  // const inputCity = document.getElementById("inputCity");
  // const eventsLocation = document.querySelector(".events__location");
  // const langSelector = document.querySelector(".nav__changeLanguage");
  // const langButton = langSelector.querySelector("#language");
  // const langList = langSelector.querySelector("ul");

  // displayLocation.value = inputCity.value;

  // document.addEventListener("click", (event) => {
  //   if (event.target === editLocation) {
  //     displayLocation.removeAttribute("readonly");
  //     displayLocation.focus();
  //     eventsLocation.classList.toggle("active");
  //   }
  //   if (event.target === langButton) {
  //     langList.classList.toggle("active");
  //   }
  //   if (event.target.tagName === "LI" && langList.contains(event.target)) {
  //     langButton.textContent = event.target.textContent;
  //     langList.classList.remove("active");
  //   }
  //   if (!langSelector.contains(event.target)) {
  //     langList.classList.remove("active");
  //   }
  // });
  // document.addEventListener("keydown", (event) => {
  //   if (event.target === displayLocation && event.key === "Enter") {
  //     displayLocation.setAttribute("readonly", true);
  //     eventsLocation.classList.toggle("active");
  //   }
  // });
  // displayLocation.addEventListener("blur", () => {
  //   displayLocation.setAttribute("readonly", true);
  //   eventsLocation.classList.toggle("active");
  // });
});
