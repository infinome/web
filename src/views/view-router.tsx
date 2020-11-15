import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ContactContent } from "./contact";
import { NewsContent } from "./news";
import { TeamContent } from "./team";
import { HomeContent } from "./home";
import { Routes } from "../config/definitions";

export const ContentRouter = () => {
  const { CONTACT, NEWS, TEAM, HOME, DEFAULT } = Routes;
  // const { CONTACT, NEWS, TEAM } = Routes;
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path={CONTACT} exact component={ContactContent} />
        <Route path={NEWS} exact component={NewsContent} />
        <Route path={TEAM} exact component={TeamContent} />
        <Route path={HOME} exact component={HomeContent} />
        <Route path={DEFAULT} component={HomeContent} />
      </Switch>
    </Router>
  );
};
