import { render } from "solid-js/web";
import Panel from "./Panel";
import "./index.css";

const appContainer = document.querySelector("#app-container");
if (!appContainer) {
  throw new Error("Can not find AppContainer");
}

render(Panel, appContainer);
