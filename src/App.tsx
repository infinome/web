import React from "react";
import { ViewRouter } from "./views/view-router";
// import { ViewScroller } from "./views/view-scroller";
import { GlobalStyle } from "./config/styles";

function App() {
  return (
    <>
      <GlobalStyle />
      {/* <ViewScroller /> */}
      <ViewRouter />
    </>
  );
}

export default App;
