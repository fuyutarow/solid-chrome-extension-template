import { render } from 'solid-js/web'
import Newtab from "@pages/newtab/Newtab";
import "@pages/newtab/index.css";

function init() {
  const appContainer = document.querySelector("#app-container");
  if (!appContainer) {
    throw new Error("Can not find AppContainer");
  }
  render(Newtab, appContainer);
}

init();
