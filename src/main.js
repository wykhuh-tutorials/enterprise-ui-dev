import "./style.css";
import { init } from "./counter.js";
import javascriptLogo from "./javascript.svg";

let appEl = document.querySelector("#app");
if (appEl) {
  appEl.innerHTML = `
  <div>
    <h1>Hello!</h1>
         <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`;

  init(document.querySelector("#counter"));
}
