import React, { FC, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ILinkElement } from "../../../config/definitions";
import { Colors, Fonts } from "../../../config/styles";
import { INavMenu, NAVIGATION_ELEMENTS } from "../../../config/navigation";
// import { NavMenuToggleIcon } from "../../icons/nav-menu-toggle";

// const defaultNavMenuItems: ILinkElement[] = [
//   { label: "Activity", path: "/exercises" },
//   { label: "Plan", path: "/exercises" },
//   { label: "Feed", path: "#" }
// ];

// export interface INavMenu {
//   navMenuItems?: ILinkElement[];
//   currentTitle?: string;
// }

const NavTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const NavMenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1.45rem 1rem 0 0;
  z-index: 1;
`;

const NavMenuLink = styled(Link)`
  text-decoration: none;
  user-select: none;
  color: ${Colors.TURQUOISE};
  font-family: ${Fonts.BARLOW_CONDENSED};
  font-size: 1.5rem;
  text-transform: uppercase;
  :hover {
    color: ${Colors.DARK_BLUE};
  }
`;

const NavMenuItem = styled.div`
  padding: 0 1.5rem;
  text-align: right;
`;

interface IRenderNavMenuProps {
  navMenuItems: ILinkElement[];
  showMenu: boolean;
  handleMenuToggle(): void;
}

const NavMenuItemDivider = styled("div")`
  padding: 0 0.25rem;
  color: ${Colors.PALE_GREEN};
  font-size: 1.75rem;
`;

export const NavMenu: FC<INavMenu> = ({ navMenuItems = [], currentTitle }) => {
  return (
    <NavMenuWrapper>
      {(navMenuItems || []).map(({ label, path }, index) => {
        return (
          <>
            <NavMenuLink to={path} key={index} title={label}>
              <NavMenuItem>{label}</NavMenuItem>
            </NavMenuLink>
            {index !== navMenuItems.length - 1 && (
              <NavMenuItemDivider>|</NavMenuItemDivider>
            )}
          </>
        );
      })}
      {/* <NavTitleWrapper onClick={handleMenuToggle}>
        <SectionTitle>{currentTitle}</SectionTitle>
        <IconWrapper title="Navigation Menu">
					<NavMenuToggleIcon />
				</IconWrapper>
      </NavTitleWrapper>
      {menuVisibility && (
        <MenuItemWrapper
          showMenu
          navMenuItems={navMenuItems}
          handleMenuToggle={handleMenuToggle}
        >
          {(navMenuItems || []).map(({ label, path }, index) => {
            return (
              <NavMenuLink to={path} key={index} title={label}>
                <NavMenuItem onClick={handleMenuToggle}>{label}</NavMenuItem>
              </NavMenuLink>
            );
          })}
        </MenuItemWrapper>
      )} */}
    </NavMenuWrapper>
  );
};

NavMenu.defaultProps = {
  navMenuItems: NAVIGATION_ELEMENTS,
  currentTitle: "home"
};
