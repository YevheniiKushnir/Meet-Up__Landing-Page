export function Nav(parentClass = "") {
  return `
    <nav class="${parentClass} nav">
      <a href="/" class="nav__logo">
        <img src="./src/assets/icons/logo/meetup.svg" alt="Meet Up Logo" />
      </a>
      <div class="nav__inputs">
        <input
          type="text"
          id="inputEvent"
          class="nav__search"
          placeholder="Search events"
          autocomplete="off"
        />
        <input
          type="text"
          id="inputCity"
          class="nav__search"
          value="Mountain View, CA"
          autocomplete="off"
        />
        <button id="searchForEvents"></button>
        </div>
      <div class="nav__controls">
        <div class="nav__changeLanguage">
          <button class="nav__language nav__btn" id="language">
            English
          </button>
          <ul>
            <li data-language="en">English</li>
            <li data-language="de">Deutsch</li>
            <li data-language="ru">Русский</li>
          </ul>
        </div>
        <button class="nav__logIn nav__btn" id="logIn">Log In</button>
        <button class="nav__signUp button button--cyan" id="signUp--nav">
          Sign Up
        </button>
      </div>
    </nav>`;
}
