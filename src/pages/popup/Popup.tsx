import logo from "@assets/img/logo.svg";
import "@src/styles/index.css";
import styles from "./Popup.module.css";

const Popup = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p class="font-bold">
          Edit <code>src/pages/popup/Popup.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
};

export default Popup;
