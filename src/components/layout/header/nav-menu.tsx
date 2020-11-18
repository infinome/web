import React, { FC, Fragment } from "react";
import styled from "styled-components";
import { ILinkElement, IHomePageAware } from "../../../config/definitions";
import { Colors } from "../../../config/styles";
import { INavMenu, NAVIGATION_ELEMENTS } from "../../../config/navigation";

const NavMenuWrapper = styled.div<IHomePageAware>`
  display: flex;
  flex-direction: row;
  transition: padding 0.3s;
  padding: ${(props) =>
    props.isHome !== false ? "2rem 1rem 0 0" : "1.25rem 1rem 0 0"};
  z-index: 1;
`;

// const NavMenuLink = styled(Link)`
const NavMenuLink = styled.div<IHomePageAware>`
  cursor: pointer;
  text-decoration: none;
  user-select: none;
  color: ${Colors.TURQUOISE};
  transition: font-size 0.3s;
  font-size: ${({ isHome }) => (isHome !== false ? "1.675rem" : "1.25rem")};
  text-transform: uppercase;
  text-shadow: 0 0.05rem 0 ${Colors.BLACK};
  :hover {
    color: ${Colors.WHITE};
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

const NavMenuItemDivider = styled.div<IHomePageAware>`
  padding: 0.25rem 0.25rem;
  color: ${Colors.PALE_GREEN};
  font-size: ${({ isHome }) => (isHome ? "1.25rem" : "0.75rem")};
`;

export const NavMenu: FC<INavMenu> = ({
  navMenuItems = [],
  currentTitle,
  navigationHandler,
  isHome
}) => {
  const handleNavClick = (viewId: string) => () => {
    if (navigationHandler) {
      navigationHandler(viewId);
    }
  };

  return (
    <NavMenuWrapper isHome={isHome}>
      {(navMenuItems || []).map(({ label, path }, index) => {
        return (
          <Fragment key={index}>
            {/* <NavMenuLink to={path} key={index} title={label}> */}
            <NavMenuLink
              title={label}
              isHome={isHome}
              onClick={handleNavClick(label)}
            >
              <NavMenuItem>{label}</NavMenuItem>
            </NavMenuLink>
            {index !== navMenuItems.length - 1 && (
              <NavMenuItemDivider>|</NavMenuItemDivider>
            )}
          </Fragment>
        );
      })}
    </NavMenuWrapper>
  );
};

NavMenu.defaultProps = {
  navMenuItems: NAVIGATION_ELEMENTS,
  currentTitle: "home"
};
