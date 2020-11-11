import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useRecoilState } from "recoil";
import {
  homeScrollPositionState,
  newsScrollPositionState,
  teamScrollPositionState,
  contactScrollPositionState
} from "../config/recoil-state";
import { ContactContent } from "./contact";
import { ScrollHeader, IHeader } from "../components/layout/header";
import { NewsContent } from "./news";
import { TeamContent } from "./team";
import { HomeContent } from "./home";
// import { Routes } from "../config/definitions";
import { getPercentVisible } from "element-visible-percentage";

import {
  ElementPositions,
  ScrollEffectCallback,
  useScrollPosition
} from "../hooks/use-scroll-position";

// const ViewScrollerContainer = styled.div`
//   margin: 0;
//   overflow-x: hidden;
//   overflow-y: auto;
//   width: 100%;
//   height: 100%;
// `;

const ScrollableView = styled.div<{ show: boolean; bgColor?: string }>`
  /* height: 100vh; */
  min-height: 87vh;
  width: 100%;
  transform: translateX(${({ show }) => (show ? "0" : "-100vw")});
  transition: transform 1s;
  background-color: ${({ bgColor }) => bgColor || `transparent`};
  padding: 2rem 0;
`;

const getScrollPosition = (el: Element | null): number => {
  if (el === null) {
    return 0;
  }
  return el === null ? 0 : el.getBoundingClientRect().top;
};

const isElementInViewport = (el: Element | null, threshold: number = 0.17) => {
  return getPercentVisible(el) >= threshold;
};

export const ViewScroller = () => {
  // const { CONTACT, NEWS, TEAM, HOME, DEFAULT } = Routes;

  const [isHome, setIsHome] = useState(true);

  const [visibleViews, setVisibleViews] = useState({
    showHome: true,
    showNews: false,
    showTeam: false,
    showContact: false
  });

  const homeViewRef = useRef(null);
  const newsViewRef = useRef(null);
  const contactViewRef = useRef(null);
  const teamViewRef = useRef(null);

  const [homeScrollPosition, setHomeScrollPosition] = useRecoilState(
    homeScrollPositionState
  );
  const [newsScrollPosition, setNewsScrollPosition] = useRecoilState(
    newsScrollPositionState
  );
  const [teamScrollPosition, setTeamScrollPosition] = useRecoilState(
    teamScrollPositionState
  );
  const [contactScrollPosition, setContactScrollPosition] = useRecoilState(
    contactScrollPositionState
  );

  // Update section scroll positions.
  useLayoutEffect(() => {
    setHomeScrollPosition(0);
    setNewsScrollPosition(getScrollPosition(newsViewRef.current));
    setTeamScrollPosition(getScrollPosition(teamViewRef.current));
    setContactScrollPosition(getScrollPosition(contactViewRef.current));
  }, []);

  // const topPos = (element: HTMLElement | null) => {
  //   // console.log("element", element?.tagName);
  //   if (!element) {
  //     return 0;
  //   }
  //   return element.getBoundingClientRect().bottom;
  // };

  // //added to reduce redundancy
  // const homeViewPos = topPos(homeViewRef.current);
  // console.log("homeViewPos", homeViewPos);
  // const newsViewPos = topPos(newsViewRef.current);
  // console.log("newsViewPos", newsViewPos);
  // const teamViewPos = topPos(teamViewRef.current);
  // console.log("teamViewPos", teamViewPos);
  // const contactViewPos = topPos(contactViewRef.current);
  // console.log("contactViewPos", contactViewPos);

  const handleWindowScroll: ScrollEffectCallback = ({
    previousPosition,
    currentPosition
  }: ElementPositions) => {
    // Determine home status - TODO recoil it
    const showHome = isElementInViewport(homeViewRef.current);
    setIsHome(showHome);

    // Update visibility for each section.
    const newState = {
      showHome: showHome,
      showNews: isElementInViewport(newsViewRef.current),
      showTeam: isElementInViewport(teamViewRef.current),
      showContact: isElementInViewport(contactViewRef.current)
    };
    // console.log(newState);
    setVisibleViews((state) => ({ ...newState }));
  };

  useScrollPosition(handleWindowScroll, 100);

  return (
    <>
      <ScrollHeader
        // breadcrumbTrail={breadcrumbTrail}
        isHome={isHome}
        // sectionTitle={sectionTitle}
      />
      {/* <HomeView />
      <NewsView />
      <TeamView />
      <ContactView /> */}
      <ScrollableView show={visibleViews.showHome} ref={homeViewRef}>
        Hoem
        <HomeContent />
      </ScrollableView>
      <ScrollableView
        show={visibleViews.showNews}
        ref={newsViewRef}
        bgColor={"blue"}
      >
        Neus
        <NewsContent />
      </ScrollableView>
      <ScrollableView
        show={visibleViews.showTeam}
        ref={teamViewRef}
        bgColor={"lightblue"}
      >
        Teaem
        <TeamContent />
      </ScrollableView>
      <ScrollableView
        show={visibleViews.showContact}
        ref={contactViewRef}
        bgColor={"lightgreen"}
      >
        Contax
        <ContactContent />
      </ScrollableView>
      {/* <NewsView />
      <TeamView />
      <ContactView /> */}
    </>
    // <Router basename={process.env.PUBLIC_URL}>
    // <Switch>
    // <Route path={CONTACT} exact component={ContactView} />
    // <Route path={NEWS} exact component={NewsView} />
    // <Route path={TEAM} exact component={TeamView} />
    // <Route path={HOME} exact component={HomeView} />
    // <Route path={DEFAULT} component={HomeView} />
    // </Switch>
    // </Router>
  );
};
