import React, { useRef, useState } from "react";
import styled from "styled-components";
import { ContactContent } from "./contact";
import { ScrollHeader } from "../components/layout/header";
import { NewsContent } from "./news";
import { TeamContent } from "./team";
import { HomeContent } from "./home";
import { SCROLL_DELAY_MS } from "../config/definitions";
import { getPercentVisible } from "element-visible-percentage";
import islandMountains from "../assets/images/infinome-island-mountains.png";

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
