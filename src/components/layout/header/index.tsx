import React, { FC } from "react";
import styled from "styled-components";
import { Breadcrumb, IBreadcrumb } from "./breadcrumb";
// import { BurnminuteLogoTitle } from "./logo-title";
import { InfinomeLogo } from "../../infinome-logo";
import { NavMenu } from "./nav-menu";
import { LogoLink } from "../";
import { Colors } from "../../../config/styles";
import { IHomePageAware } from "../../../config/definitions";

export interface IHeader extends IBreadcrumb, IHomePageAware {
  sectionTitle?: string;
}

const HeaderWrapperOuter = styled.div`
  background-color: rgba(255, 255, 255, 0.37);
  padding: 0 0 0.74rem 0;
`;
const HeaderWrapper = styled.div<IHomePageAware>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${Colors.WHITE_87};
  background-repeat: no-repeat;
  padding: 0.75rem 0 0 2rem;
  height: ${(props) => (props.isHome ? "3.75rem" : "2.5rem")};
  margin-top: 0.25rem;
  /* border-top: 0.25rem solid ${Colors.TITLE_BLUE}; */
`;

export const Header: FC<IHeader> = ({
  breadcrumbTrail,
  isHome,
  sectionTitle
}) => {
  return (
    <HeaderWrapperOuter>
      <HeaderWrapper isHome={isHome}>
        <LogoLink to="/" title="Infinome Home">
          <InfinomeLogo isHome={isHome} />
        </LogoLink>
        <NavMenu isHome={isHome} currentTitle={sectionTitle} />
      </HeaderWrapper>
    </HeaderWrapperOuter>
  );
};
