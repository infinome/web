import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ContactView } from "./contact";
import { NewsView } from "./news";
import { TeamView } from "./team";
import { HomeView } from "./home";

export const ViewRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomeView} />
        <Route path="/contact" exact component={ContactView} />
        <Route path="/news" exact component={NewsView} />
        <Route path="/team" exact component={TeamView} />
        <Route path="/*" component={HomeView} />
      </Switch>
    </Router>
  );
};