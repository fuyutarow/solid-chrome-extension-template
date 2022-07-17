import { render } from 'solid-js/web'
import Panel from "@pages/panel/Panel";
import "@pages/panel/index.css";

function init() {
  const appContainer = document.querySelector("#app-container");
  if (!appContainer) {
    throw new Error("Can not find AppContainer");
  }

  render(Panel, appContainer);
}

init();
