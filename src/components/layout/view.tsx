import React, { FC } from "react";
import styled from "styled-components";
// import { useLocation } from "react-router-dom";
import { AppComponent } from "./";
import { Header, IHeader } from "./header";
import { Footer } from "./footer";
import { IBreadcrumb } from "./header/breadcrumb";
import { Content, ContentPanel, ContentWrapper } from "./content";
import {
  IContent,
  IContentPanel,
  IHomePageAware
  // Routes
} from "../../config//definitions";

export interface IView extends IHeader, IBreadcrumb, IContent, IHomePageAware {}
export interface IPanelView extends IView {
  panels: IContent[];
}

export interface IAnimatable {
  animate?: boolean;
}

export const ScrollableViewContainer = styled.div<IAnimatable>`
  transform: translateX(${({ animate }) => (animate ? "0" : "-100vw")});
  transition: transform 1s;
  height: 900px;
  width: 300px;
  background-color: orange;
`;

// export const ScrollableView: FC<IView> = ({
//   breadcrumbTrail,
//   contentTitle,
//   navigationHandler,
//   sectionTitle,
//   children
// }) => {
//   const { pathname } = useLocation();

//   const isHomePage = pathname === Routes.HOME;
//   return (
//     <ScrollableViewContainer>
//       <Header
//         breadcrumbTrail={breadcrumbTrail}
//         isHome={isHomePage}
//         sectionTitle={sectionTitle}
//         navigationHandler={navigationHandler}
//       />
//       <Content contentTitle={contentTitle} isHome={isHomePage}>
//         {children}
//       </Content>
//       <Footer />
//     </ScrollableViewContainer>
//   );
// };

export const View: FC<IView> = ({
  breadcrumbTrail,
  contentTitle,
  navigationHandler,
  sectionTitle,
  children
}) => {
  const isHomePage = true;
  return (
    <AppComponent>
      <Header
        breadcrumbTrail={breadcrumbTrail}
        isHome={isHomePage}
        sectionTitle={sectionTitle}
        navigationHandler={navigationHandler}
      />
      <Content contentTitle={contentTitle} isHome={isHomePage}>
        {children}
      </Content>
      <Footer />
    </AppComponent>
  );
};

export const PanelView: FC<IPanelView> = ({
  breadcrumbTrail,
  isHome,
  navigationHandler,
  panels,
  sectionTitle
}) => {
  return (
    <AppComponent>
      <Header
        breadcrumbTrail={breadcrumbTrail}
        sectionTitle={sectionTitle}
        navigationHandler={navigationHandler}
      />
      <ContentWrapper panelCount={panels.length}>
        {panels.map((panel: IContentPanel, index) => (
          <ContentPanel
            background={panel.background}
            contentTitle={panel.contentTitle}
            isHome={isHome}
            key={index}
            pctWidth={panel.pctWidth}
          >
            {panel.children}
          </ContentPanel>
        ))}
      </ContentWrapper>
      <Footer />
    </AppComponent>
  );
};
