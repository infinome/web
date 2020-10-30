import React, { FC } from "react";
import { useLocation } from "react-router-dom";
import { AppComponent, BackgroundColumnLeft } from "./";
import { Header, IHeader } from "./header";
import { Footer } from "./footer";
import { IBreadcrumb } from "./header/breadcrumb";
import { Content, ContentPanel, ContentWrapper } from "./content";
import {
  IContent,
  IContentPanel,
  IHomePageAware,
  Routes
} from "../../config//definitions";

export interface IView extends IHeader, IBreadcrumb, IContent, IHomePageAware {}
export interface IPanelView extends IView {
  panels: IContent[];
}

export const View: FC<IView> = ({
  breadcrumbTrail,
  contentTitle,
  sectionTitle,
  children
}) => {
  const { pathname } = useLocation();

  const isHomePage = pathname === Routes.HOME;
  return (
    <AppComponent>
      {/* <BackgroundColumnLeft /> */}
      <Header
        breadcrumbTrail={breadcrumbTrail}
        isHome={isHomePage}
        sectionTitle={sectionTitle}
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
  panels,
  sectionTitle
}) => {
  const { pathname } = useLocation();

  const isHomePage = pathname === Routes.HOME;

  return (
    <AppComponent>
      {/* <BackgroundColumnLeft /> */}
      <Header breadcrumbTrail={breadcrumbTrail} sectionTitle={sectionTitle} />
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
