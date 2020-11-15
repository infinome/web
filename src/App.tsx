import React from "react";
// import { BackgroundImageComponent } from "./components/layout";
// import {
//   ElementPositions,
//   useScrollPosition
// } from "./hooks/use-scroll-position";
// import { ViewRouter } from "./views/view-router";
import { ViewScroller } from "./views/view-scroller";
// import { getPercentVisible } from "element-visible-percentage";
import { GlobalStyle } from "./config/styles";
// import { ScrollHeader, IHeader } from "./components/layout/header";

function App() {
  // const [hideOnScroll, setHideOnScroll] = useState(true);

  // useScrollPosition(
  //   ({ previousPosition, currentPosition }: ElementPositions) => {
  //     const isShow = currentPosition.y > previousPosition.y;
  //     if (isShow !== hideOnScroll) setHideOnScroll(isShow);
  //   },
  //   [hideOnScroll]
  // );

  return (
    <>
      <GlobalStyle />
      {/* <BackgroundImageComponent> */}
      {/* <ScrollHeader
        // breadcrumbTrail={breadcrumbTrail}
        isHome={isHome}
        // sectionTitle={sectionTitle}
      /> */}
      <ViewScroller />
      {/* </BackgroundImageComponent> */}
    </>
  );
}

export default App;
