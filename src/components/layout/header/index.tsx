import React, { FC } from "react";
import styled from "styled-components";
import { Breadcrumb, IBreadcrumb } from "./breadcrumb";
// import { BurnminuteLogoTitle } from "./logo-title";
import { InfinomeLogo } from "../../infinome-logo";
import { NavMenu } from "./nav-menu";
import { LogoLink } from "../";
import {
  Colors,
  HEADER_HEIGHT_REM,
  HEADER_HOME_HEIGHT_REM
} from "../../../config/styles";
import { IHomePageAware } from "../../../config/definitions";

import { useRecoilValue } from "recoil";
import { selectedViewState } from "../../../config/recoil-state";
import { INavMenu } from "../../../config/navigation";

export interface IHeader extends IBreadcrumb, IHomePageAware, INavMenu {
  sectionTitle?: string;
}

const HeaderWrapperOuter = styled.div<IHomePageAware>`
  /* background-color: rgba(255, 255, 255, 0.37); */
  padding: 0 0 0.74rem 0;
`;

const ScrollHeaderWrapperOuter = styled(HeaderWrapperOuter)`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 17;
  transition: height 0.3s;
  height: ${(props) =>
    props.isHome ? HEADER_HOME_HEIGHT_REM : HEADER_HEIGHT_REM}rem;
  background-color: ${Colors.WHITE_87};
`;

const HeaderWrapper = styled.div<IHomePageAware>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* background-color: ${Colors.WHITE_87}; */
  background-repeat: no-repeat;
  padding: ${({ isHome }) => (isHome ? "0.75rem 0 0 2rem" : "0.5rem 0 0 2rem")};
  transition: height 1s;
  height: ${({ isHome }) =>
    isHome ? HEADER_HOME_HEIGHT_REM : HEADER_HEIGHT_REM}rem;
  margin: 0; //0.25rem;
  /* border-top: 0.25rem solid ${Colors.TITLE_BLUE}; */
`;

const LogoWrapper = styled.div<IHomePageAware>`
  font-size: ${({ isHome }) => (isHome ? "3rem" : "2.25rem")};
  transition: font-size 0.5s;
`;

export const Header: FC<IHeader> = ({
  breadcrumbTrail,
  isHome,
  navigationHandler,
  sectionTitle
}) => {
  return (
    <HeaderWrapperOuter>
      <HeaderWrapper isHome={isHome}>
        {/* <LogoLink to="/" title="Infinome Home"> */}
        <LogoLink title="Infinome Home">
          <InfinomeLogo isHome={isHome} />
        </LogoLink>
        <NavMenu
          isHome={isHome}
          currentTitle={sectionTitle}
          navigationHandler={navigationHandler}
        />
      </HeaderWrapper>
    </HeaderWrapperOuter>
  );
};

export const ScrollHeader: FC<IHeader> = ({
  breadcrumbTrail,
  isHome,
  navigationHandler,
  sectionTitle
}) => {
  // const homeScrollPosition = useRecoilValue(homeScrollPositionState);

  const handleHomeClick = () => {
    if (navigationHandler) {
      navigationHandler("Home");
    }
  };

  // const handleNavClick = (section?: string) => () => {
  //   navigationHandler(section);
  // };

  return (
    <ScrollHeaderWrapperOuter isHome={isHome}>
      <HeaderWrapper isHome={isHome}>
        {/* <LogoLink to="/" title="Infinome Home"> */}
        <LogoLink title="Infinome Home" onClick={handleHomeClick}>
          <LogoWrapper isHome={isHome}>{"Infinome Biosciences"}</LogoWrapper>
          {/* <InfinomeLogo isHome={isHome} /> */}
        </LogoLink>
        <NavMenu
          isHome={isHome}
          currentTitle={sectionTitle}
          navigationHandler={navigationHandler}
        />
      </HeaderWrapper>
    </ScrollHeaderWrapperOuter>
  );
};
