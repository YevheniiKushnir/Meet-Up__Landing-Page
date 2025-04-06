document.addEventListener("DOMContentLoaded", () => {
  const editLocation = document.getElementById("editLocation");
  const displayLocation = document.getElementById("displayLocation");
  const inputCity = document.getElementById("inputCity");
  const eventsLocation = document.querySelector(".events__location");

  displayLocation.value = inputCity.value;

  document.addEventListener("click", (event) => {
    if (event.target === editLocation) {
      displayLocation.removeAttribute("readonly");
      displayLocation.focus();
      eventsLocation.classList.toggle("active");
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.target === displayLocation && event.key === "Enter") {
      displayLocation.setAttribute("readonly", true);
      eventsLocation.classList.toggle("active");
    }
  });
  displayLocation.addEventListener("blur", () => {
    displayLocation.setAttribute("readonly", true);
    eventsLocation.classList.toggle("active");
  });
});
