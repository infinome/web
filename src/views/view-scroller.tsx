import React, { useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useRecoilState } from "recoil";
import {
  selectedViewState
  // homeScrollPositionState,
  // newsScrollPositionState,
  // teamScrollPositionState,
  // contactScrollPositionState
} from "../config/recoil-state";
import { ContactContent } from "./contact";
import { ScrollHeader } from "../components/layout/header";
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
import { HEADER_HOME_HEIGHT_REM, HEADER_HEIGHT_REM } from "../config/styles";

const ScrollableView = styled.div<{
  show: boolean;
  label: string;
  bgColor?: string;
}>`
  background-color: ${({ bgColor }) => bgColor || `transparent`};
  min-height: 93vh;
  padding: 2rem 2rem;
  padding-top: ${({ label }) =>
    4 + (label === "Home" ? HEADER_HOME_HEIGHT_REM : HEADER_HEIGHT_REM)}rem;
  transform: translateX(${({ show }) => (show ? "0" : "-50vw")});
  opacity: ${({ show }) => (show ? 1 : 0.25)};
  transition: transform 0.3s, opacity 0.25s;
  width: 100%;
`;

const emptyDOORect: DOMRect = {
  height: 0,
  width: 0,
  x: 0,
  y: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  toJSON: () => ""
};

const getRefClientRect = (el: Element | null): DOMRect => {
  if (!el) {
    return emptyDOORect;
  }
  return !el ? emptyDOORect : el.getBoundingClientRect();
};

const getScrollPosition = (el: Element | null): number => {
  if (!el) {
    return 0;
  }
  return !el ? 0 : getRefClientRect(el).top;
};

const isElementInViewport = (el: Element | null, threshold: number = 0.17) => {
  return getPercentVisible(el) >= threshold;
};

export const ViewScroller = () => {
  const [isHome, setIsHome] = useState(true);

  const [visibleViews, setVisibleViews] = useState({
    showHome: true,
    showNews: false,
    showTeam: false,
    showContact: false
  });

  const homeViewRef = useRef<HTMLDivElement>(null);
  const newsViewRef = useRef<HTMLDivElement>(null);
  const contactViewRef = useRef<HTMLDivElement>(null);
  const teamViewRef = useRef<HTMLDivElement>(null);

  // const [homeScrollPosition, setHomeScrollPosition] = useRecoilState(
  //   homeScrollPositionState
  // );
  // const [newsScrollPosition, setNewsScrollPosition] = useRecoilState(
  //   newsScrollPositionState
  // );
  // const [teamScrollPosition, setTeamScrollPosition] = useRecoilState(
  //   teamScrollPositionState
  // );
  // const [contactScrollPosition, setContactScrollPosition] = useRecoilState(
  //   contactScrollPositionState
  // );

  // Update section scroll positions.
  // useLayoutEffect(() => {
  // const scrollage = getRefClientRect(viewScrollerRef.current);
  // const hoem = getRefClientRect(homeViewRef.current);
  // const neus = getRefClientRect(newsViewRef.current);
  // const taem = getRefClientRect(teamViewRef.current);
  // const cont = getRefClientRect(contactViewRef.current);
  // console.log(`useLayoutEffect:\n
  // - scrolleur: ${scrollage.top}, ${scrollage.height}\n
  // - home: ${hoem.top}, ${hoem.height}\n
  // - news: ${neus.top}, ${neus.height}\n
  // - taem: ${taem.top}, ${taem.height}\n
  // - cont: ${cont.top}, ${cont.height}\n
  //  `);

  // setHomeScrollPosition(getScrollPosition(homeViewRef.current));
  // setNewsScrollPosition(getScrollPosition(newsViewRef.current));
  // setTeamScrollPosition(getScrollPosition(teamViewRef.current));
  // setContactScrollPosition(getScrollPosition(contactViewRef.current));
  // }, [
  //   homeViewRef,
  //   setHomeScrollPosition,
  //   newsViewRef,
  //   setNewsScrollPosition,
  //   teamViewRef,
  //   setTeamScrollPosition,
  //   contactViewRef,
  //   setContactScrollPosition
  // ]);

  // const topPos = (element: HTMLElement | null) => {
  //   // console.log("element", element?.tagName);
  //   if (!element) {
  //     return 0;
  //   }
  //   return element.getBoundingClientRect().bottom;
  // };

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

    // console.log("handleWindowScroll - window.scrollY", window.scrollY);
  };

  useScrollPosition(handleWindowScroll, 200);

  const scrollToView = (viewId: string) => {
    let viewRef;
    switch (viewId) {
      case "Home":
        viewRef = homeViewRef;
        break;
      case "News":
        viewRef = newsViewRef;
        break;
      case "Team":
        viewRef = teamViewRef;
        break;
      case "Contact":
        viewRef = contactViewRef;
        break;
      default:
    }
    if (viewRef?.current) {
      viewRef.current.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <ScrollHeader
        navigationHandler={scrollToView}
        // breadcrumbTrail={breadcrumbTrail}
        isHome={isHome}
        // sectionTitle={sectionTitle}
      />
      {/* <div>
        <span onClick={testTeamScroll}>Scroll to TEAM</span>
        <span onClick={testNewsScroll}>Scroll to NEWS</span>
      </div> */}
      {/* <HomeView />
      <NewsView />
      <TeamView />
      <ContactView /> */}
      <ScrollableView
        show={visibleViews.showHome}
        ref={homeViewRef}
        key="home"
        label="Home"
      >
        <HomeContent />
      </ScrollableView>
      <ScrollableView
        key="news"
        label="News"
        show={visibleViews.showNews}
        ref={newsViewRef}
        // bgColor={"blue"}
      >
        <NewsContent />
      </ScrollableView>
      <ScrollableView
        key="team"
        label="Team"
        show={visibleViews.showTeam}
        ref={teamViewRef}
        // bgColor={"lightblue"}
      >
        <TeamContent />
      </ScrollableView>
      <ScrollableView
        key="contact"
        label="Contact"
        show={visibleViews.showContact}
        ref={contactViewRef}
        // bgColor={"lightgreen"}
      >
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
