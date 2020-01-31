import * as React from "react";
import { hot } from "react-hot-loader/root";

import reactLogo from "../assets/img/react_logo.svg";
import styles from "./App.module.scss";

const App = () => {
  const test: string | null = "hi";

  const hello = { what: "yes", test };
  const what = { ...hello };

  return (
    <div className={`${styles.yoloWhat} ${styles.app}`}>
      <h1>Hello2ssssssssss !</h1>
      <p>Foo to the {what.what} sssssss22rz256sssse56</p>
      <img src={reactLogo} height="480" />
    </div>
  );
};

export default hot(App);
