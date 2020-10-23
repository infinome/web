import React, { useState } from "react";
import { BackgroundImageComponent } from "./components/layout";
import {
  ElementPositions,
  useScrollPosition
} from "./hooks/use-scroll-position";
import { ViewRouter } from "./views/view-router";
import { GlobalStyle } from "./config/styles";

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
    <>
      <GlobalStyle />
      <BackgroundImageComponent>
        <ViewRouter />
      </BackgroundImageComponent>
    </>
  );
}

export default App;
