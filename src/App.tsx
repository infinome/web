import React, { useState } from "react";
// import logo from "./logo.svg";
// import "./App.css";
import { BackgroundImageComponent } from "./components/layout";
import { InfinomeLogo } from "./components/infinome-logo";
import {
  ElementPositions,
  useScrollPosition
} from "./hooks/use-scroll-position";
import { ViewRouter } from "./views/view-router";

function App() {
  const [hideOnScroll, setHideOnScroll] = useState(true);

  useScrollPosition(
    ({ previousPosition, currentPosition }: ElementPositions) => {
      const isShow = currentPosition.y > previousPosition.y;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll]
  );

  return (
    // <BackgroundImageComponent className="App">
    //   <InfinomeLogo />
    //   <div style={{ height: "50rem" }}>{"hideOnScroll: " + hideOnScroll}</div>
    // </BackgroundImageComponent>
    <ViewRouter />
  );
}

export default App;
