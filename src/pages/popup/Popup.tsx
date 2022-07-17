import logo from "@assets/img/logo.svg";
import "@pages/popup/Popup.css";

const Popup = () => {
  return (
    <div class="App">
      <header class="App-header">
        <img src={logo} class="App-logo" alt="logo" />
        <p>
          Edit <code>src/pages/popup/Popup.jsx</code> and save to reload.
        </p>
        <a
          class="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn SolidJS!
        </a>
      </header>
    </div>
  );
};

export default Popup;
