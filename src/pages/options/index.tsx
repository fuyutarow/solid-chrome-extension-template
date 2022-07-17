import { render } from "solid-js/web";
import Option from "./Options";
import "./index.css";

const appContainer = document.querySelector("#app-container");
if (!appContainer) {
  throw new Error("Can not find AppContainer");
}

render(Option, appContainer);
