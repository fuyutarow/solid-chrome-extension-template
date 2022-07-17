import { render } from 'solid-js/web'
import Options from "@pages/options/Options";
import "@pages/options/index.css";

function init() {
  const appContainer = document.querySelector("#app-container");
  if (!appContainer) {
    throw new Error("Can not find AppContainer");
  }
  render(Options, appContainer);
}

init();
