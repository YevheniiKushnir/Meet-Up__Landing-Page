import { Nav } from "./Nav.js";
import { Header } from "./Header.js";
import { Main } from "./Main.js";
import { Footer } from "./Footer.js";

export function Page() {
  return `
    ${Nav("page__nav")}
    ${Header("page__header")}
    ${Main("page__main")}
    ${Footer("page__footer")}
  `;
}
