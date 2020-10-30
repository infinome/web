import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ContactView } from "./contact";
import { NewsView } from "./news";
import { TeamView } from "./team";
import { HomeView } from "./home";
import { Routes } from "../config/definitions";

export const ViewRouter = () => {
  const { CONTACT, NEWS, TEAM, HOME, DEFAULT } = Routes;
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path={CONTACT} exact component={ContactView} />
        <Route path={NEWS} exact component={NewsView} />
        <Route path={TEAM} exact component={TeamView} />
        <Route path={HOME} exact component={HomeView} />
        <Route path={DEFAULT} component={HomeView} />
      </Switch>
    </Router>
  );
};
