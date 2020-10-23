import React, { FC } from "react";
import styled from "styled-components";
import { Breadcrumb, IBreadcrumb } from "./breadcrumb";
// import { BurnminuteLogoTitle } from "./logo-title";
import { InfinomeLogo } from "../../infinome-logo";
import { NavMenu } from "./nav-menu";
import { LogoLink } from "../";
import { Colors } from "../../../config/styles";

export interface IHeader extends IBreadcrumb {
  sectionTitle?: string;
}

const HeaderWrapperOuter = styled.div`
  background-color: rgba(255, 255, 255, 0.37);
  padding: 0 0 0.74rem 0;
`;
const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${Colors.WHITE_87};
  background-repeat: no-repeat;
  padding: 1rem 0 0 2rem;
  height: 3.75rem;
`;

export const Header: FC<IHeader> = ({ breadcrumbTrail, sectionTitle }) => {
  return (
    <HeaderWrapperOuter>
      <HeaderWrapper>
        <LogoLink to="/" title="Infinome Home">
          <InfinomeLogo />
        </LogoLink>
        <NavMenu currentTitle={sectionTitle} />
      </HeaderWrapper>
    </HeaderWrapperOuter>
  );
};
