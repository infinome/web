import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  ElementPositions,
  useScrollPosition
} from "./hooks/use-scroll-position";

function App() {
  const [hideOnScroll, setHideOnScroll] = useState(true);
  // const rendersCount = useRef(0)

  useScrollPosition(
    ({ previousPosition, currentPosition }: ElementPositions) => {
      const isShow = currentPosition.y > previousPosition.y;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll]
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React and
        </a>
      </header>
      <div style={{ height: "50rem" }}>{"hideOnScroll: " + hideOnScroll}</div>
    </div>
  );
}

export default App;
