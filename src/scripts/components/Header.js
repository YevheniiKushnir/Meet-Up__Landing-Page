export function Header(parentClass = "", url) {
  return `
    <header class="${parentClass} header">
      <div class="container">
        <div class="header__content">
          <h1 class="header__title">
            The people platform—Where interests become friendships
          </h1>
          <p class="header__text">
            Whatever your interest, from hiking and reading to networking and
            skill sharing, there are thousands of people who share it on Meetup.
            Events are happening every day—sign up to join the fun.
          </p>
          <a href=${url}>
            <button class="header__button button button--cyan" id="joinMeetup">
              Join Meetup
            </button>
          </a>
          <img
            src="./src/assets/imgs/header/header-deco.png"
            alt="Header decorative picture"
            class="header__deco"
          />
        </div>
      </div>
    </header>`;
}
