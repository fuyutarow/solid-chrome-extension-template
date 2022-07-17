import { render } from 'solid-js/web'
import "@pages/popup/index.css";
import Popup from "@pages/popup/Popup";

function init() {
  const appContainer = document.querySelector("#app-container");
  if (!appContainer) {
    throw new Error("Can not find AppContainer");
  }

  render(Popup, appContainer);
}

init();
