import { render } from "solid-js/web";
import Newtab from "./Newtab";
import "./index.css";

const appContainer = document.querySelector("#app-container");
if (!appContainer) {
  throw new Error("Can not find AppContainer");
}

render(Newtab, appContainer);
