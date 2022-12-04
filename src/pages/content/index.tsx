// console.log("content loaded");

// /**
//  * @description
//  * Chrome extensions don't support modules in content scripts.
//  */
// import("./components/Demo");

import "@src/styles/index.css";
import { render } from "solid-js/web";
import App from "./components/Demo/app";

const root = document.createElement("div");
root.id = "extension-root";
document.body.append(root);

// render(App, root);
render(() => <App />, root);
