import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NewsView } from "./news";
import { HomeView } from "./home";

export const ViewRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomeView} />
        <Route path="/news" exact component={NewsView} />
      </Switch>
    </Router>
  );
};
