export function Footer(parentClass = "") {
  return `
    <footer class="${parentClass} footer">
      <div class="container">
        <div class="footer__content">
          <div class="footer__title">
            <h3>Create your own Meetup group.</h3>
            <button class="footer__button" id="getStarted">Get Started</button>
          </div>
          <div class="footer__lists">
            <ul>
              <li>Your Account</li>
              <li>
                <a role="link">Sign up</a>
              </li>
              <li>
                <a role="link">Log in</a>
              </li>
              <li>
                <a role="link">Help</a>
              </li>
              <li>
                <a role="link">Become an Affiliate</a>
              </li>
            </ul>
            <ul>
              <li>Discover</li>
              <li>
                <a role="link">Groups</a>
              </li>
              <li>
                <a role="link">Calendar</a>
              </li>
              <li>
                <a role="link">Topics</a>
              </li>
              <li>
                <a role="link">Cities</a>
              </li>
              <li>
                <a role="link">Online Events</a>
              </li>
              <li>
                <a role="link">Local Guides</a>
              </li>
              <li>
                <a role="link">Make Friends</a>
              </li>
            </ul>
            <ul>
              <li>Meetup</li>
              <li>
                <a role="link">About</a>
              </li>
              <li>
                <a role="link">Blog</a>
              </li>
              <li>
                <a role="link">Meetup Pro</a>
              </li>
              <li>
                <a role="link">Careers</a>
              </li>
              <li>
                <a role="link">Apps</a>
              </li>
              <li>
                <a role="link">Podcast</a>
              </li>
            </ul>
          </div>
          <div class="footer__socialMedias">
            <div class="footer__followUs">
              <p>Follow us</p>
              <ul class="footer__socialLinks">
                <li>
                  <a role="link">
                    <img
                      src="./src/assets/icons/follow-us/Facebook.svg"
                      alt="Facebook"
                    />
                  </a>
                </li>
                <li>
                  <a role="link">
                    <img
                      src="./src/assets/icons/follow-us/Twitter.svg"
                      alt="Twitter"
                    />
                  </a>
                </li>
                <li>
                  <a role="link">
                    <img
                      src="./src/assets/icons/follow-us/YouTube.svg"
                      alt="YouTube"
                    />
                  </a>
                </li>
                <li>
                  <a role="link">
                    <img
                      src="./src/assets/icons/follow-us/Instagram.svg"
                      alt="Instagram"
                    />
                  </a>
                </li>
                <li>
                  <a role="link">
                    <img
                      src="./src/assets/icons/follow-us/TikTok.svg"
                      alt="TikTok"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <ul class="footer__downloads">
              <li>
                <a role="link"
                  ><img
                    src="./src/assets/icons/follow-us/GooglePlay.svg"
                    alt="Google Play"
                /></a>
              </li>
              <li>
                <a role="link"
                  ><img
                    src="./src/assets/icons/follow-us/AppStore.svg"
                    alt="App Store"
                /></a>
              </li>
            </ul>
          </div>
          <ul class="footer__legal">
            <li>© 2024 Meetup</li>
            <li>
              <a role="link">Terms of Service</a>
            </li>
            <li>
              <a role="link">Privacy Policy</a>
            </li>
            <li>
              <a role="link">Do Not Sell or Share My Personal Data</a>
            </li>
            <li>
              <a role="link">Cookie Policy</a>
            </li>
            <li>
              <a role="link">Help</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  `;
}
