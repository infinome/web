import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ContactContent } from "./contact";
import { ScrollHeader } from "../components/layout/header";
import { NewsContent } from "./news";
import { TeamContent } from "./team";
import { HomeContent } from "./home";
import { SCROLL_DELAY_MS, Routes } from "../config/definitions";
import { getPercentVisible } from "element-visible-percentage";
import islandMountains from "../assets/images/infinome-island-mountains.png";

import { useParams } from "react-router-dom";

import {
  ElementPositions,
  ScrollEffectCallback,
  useScrollPosition
} from "../hooks/use-scroll-position";
import {
  HEADER_HOME_HEIGHT_REM,
  HEADER_HEIGHT_REM,
  Colors
} from "../config/styles";

type ScrollableViewProps = {
  show: boolean;
  label: string;
  bgColor?: string;
  bgImage?: any;
};

const ScrollableView = styled.div<ScrollableViewProps>`
  background-color: ${({ bgColor }) => bgColor || `transparent`};
  min-height: 93vh;
  padding: 2rem 3rem;
  padding-top: ${({ label }) =>
    4 + (label === "Home" ? HEADER_HOME_HEIGHT_REM : HEADER_HEIGHT_REM)}rem;
  // transform: translateX(${({ show }) => (show ? "0" : "-50vw")});
  opacity: ${({ show }) => (show ? 1 : 0.83)};
  // transition: transform 0.3s, opacity 0.25s;
  transition: opacity 0.25s;
  ${({ bgImage }) =>
    bgImage
      ? `background: url(${bgImage});
  background-size: cover;
  background-repeat: no-repeat;`
      : ``}
`;

const ScrollableViewHome = styled(ScrollableView)`
  padding: 0;
  ${({ bgImage }) =>
    bgImage
      ? `background: url(${bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: 300%;
  `
      : ``}
`;

interface IRouterParams {
  ["0"]?: string;
}

const isElementInViewport = (el: Element | null, threshold: number = 0.17) => {
  return getPercentVisible(el) >= threshold;
};

const isSelectedByURI = (viewID: string, currentViewID: string) => {
  return viewID.toLocaleLowerCase() === currentViewID.toLocaleLowerCase();
};

export const ViewScroller = () => {
  const params = useParams<IRouterParams>();
  const currentViewId = params["0"] || "";

  // console.log("params", JSON.stringify(params, null, 2));
  // console.log("viewId", currentViewId);
  const [isHome, setIsHome] = useState(true);

  const [visibleViews, setVisibleViews] = useState({
    showHome: true,
    showNews: false,
    showTeam: false,
    showContact: false
    // showHome: isSelectedByURI(``, currentViewId),
    // showNews: isSelectedByURI(`news`, currentViewId),
    // showTeam: isSelectedByURI(`team`, currentViewId),
    // showContact: isSelectedByURI(`contact`, currentViewId)
  });

  const homeViewRef = useRef<HTMLDivElement>(null);
  const newsViewRef = useRef<HTMLDivElement>(null);
  const contactViewRef = useRef<HTMLDivElement>(null);
  const teamViewRef = useRef<HTMLDivElement>(null);

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
    setVisibleViews((state) => ({ ...newState }));
  };

  useScrollPosition(handleWindowScroll, SCROLL_DELAY_MS);

  const scrollToView = (viewId: string) => {
    let viewIdLowerCase = viewId.toLocaleLowerCase();
    let viewRef;
    switch (viewIdLowerCase) {
      case "home":
        viewRef = homeViewRef;
        break;
      case "news":
        viewRef = newsViewRef;
        break;
      case "team":
        viewRef = teamViewRef;
        break;
      case "contact":
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

  // Navigatte to view on page load.

  useEffect(() => {
    // console.log("useEffect - currentViewId", currentViewId);
    // console.log("newsViewRef", newsViewRef);
    setTimeout(() => {
      scrollToView(currentViewId);
    }, 250);
  }, [currentViewId]);

  return (
    <>
      <ScrollHeader navigationHandler={scrollToView} isHome={isHome} />
      <ScrollableViewHome
        show={visibleViews.showHome}
        ref={homeViewRef}
        key="home"
        label="Home"
        bgImage={islandMountains}
      >
        <HomeContent />
      </ScrollableViewHome>
      <ScrollableView
        bgColor={Colors.WHITE}
        key="news"
        label="News"
        show={visibleViews.showNews}
        ref={newsViewRef}
      >
        <NewsContent />
      </ScrollableView>
      <ScrollableView
        key="team"
        label="Team"
        show={visibleViews.showTeam}
        ref={teamViewRef}
      >
        <TeamContent />
      </ScrollableView>
      <ScrollableView
        bgColor={Colors.WHITE}
        key="contact"
        label="Contact"
        show={visibleViews.showContact}
        ref={contactViewRef}
      >
        <ContactContent />
      </ScrollableView>
    </>
  );
};
