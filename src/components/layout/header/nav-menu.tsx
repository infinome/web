import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import {
  homeScrollPositionState,
  newsScrollPositionState,
  teamScrollPositionState,
  contactScrollPositionState
} from "../../../config/recoil-state";
import { ILinkElement, IHomePageAware } from "../../../config/definitions";
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

const NavMenuWrapper = styled.div<IHomePageAware>`
  display: flex;
  flex-direction: row;
  transition: padding 0.3s;
  padding: ${(props) =>
    props.isHome !== false ? "1.45rem 1rem 0 0" : "1rem 1rem 0 0"};
  z-index: 1;
`;

// const NavMenuLink = styled(Link)`
const NavMenuLink = styled.div<IHomePageAware>`
  text-decoration: none;
  user-select: none;
  color: ${Colors.TURQUOISE};
  /* font-family: ${Fonts.BARLOW_CONDENSED}; */
  transition: font-size 0.3s;
  font-size: ${({ isHome }) => (isHome !== false ? "1.5rem" : "1.25rem")};
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
  font-size: 1.5rem;
`;

export const NavMenu: FC<INavMenu> = ({
  navMenuItems = [],
  currentTitle,
  isHome
}) => {
  const [section, setSection] = useState("home");

  // useEffect(() => {
  //   window.scrollTo(0,300)
  // }, [section]);

  const newsScrollPosition = useRecoilValue(newsScrollPositionState);
  const teamScrollPosition = useRecoilValue(teamScrollPositionState);
  const contactScrollPosition = useRecoilValue(contactScrollPositionState);

  const handleNavClick = (section: string) => () => {
    // window.scrollTo(0, 300);
    switch (section) {
      case "News":
        window.scroll(0, newsScrollPosition);
        break;
      case "Team":
        window.scroll(0, teamScrollPosition);
        break;
      case "Contact":
        window.scroll(0, contactScrollPosition);
        break;
      default:
    }
  };

  return (
    <NavMenuWrapper isHome={isHome}>
      {(navMenuItems || []).map(({ label, path }, index) => {
        return (
          <>
            {/* <NavMenuLink to={path} key={index} title={label}> */}
            <NavMenuLink
              key={index}
              title={label}
              isHome={isHome}
              onClick={handleNavClick(label)}
            >
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
