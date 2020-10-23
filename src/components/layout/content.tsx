import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { IContent, IContentPanel } from "../../config//definitions";
import { Colors, Fonts } from "../../config//styles";
import { Link } from "react-router-dom";
import { InfinomeLogoIcon } from "../infinome-logo-icon";

export interface IContentWrapperProps {
  panelCount?: number;
}

export const CenteredContentWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const ContentWrapper = styled("div")<IContentWrapperProps>`
  display: flex;
  flex-direction: ${(props) => (props.panelCount ? "row" : "column")};
  overflow: hidden;
  z-index: 0;
  height: 100%;
`;

export const ContentPanelWrapper = styled("div")<IContentPanel>`
  background: linear-gradient(
      188.79deg,
      rgba(241, 252, 248, 0.25) 12.88%,
      rgba(255, 255, 255, 0) 88.9%
    ),
    ${(props) =>
      props.background ? props.background : "rgba(255, 255, 255, 0.27);"};
  display: flex;
  flex-direction: column;
  max-height: calc(100% - 7rem);
  height: 100%;
  margin: 7rem 0 0 0;
`;

export interface IContentTitleProps {
  color?: any;
}

export const ContentTitle = styled("div")<IContentTitleProps>`
  color: ${(props) => (props.color ? `${props.color}` : Colors.TITLE_BLUE)};
  font-family: ${Fonts.BARLOW_CONDENSED};
  font-size: 4rem;
  font-weight: 900;
  line-height: 4rem;
  margin-top: -2rem;
  padding: 0 4rem 0 6rem;
  text-shadow: 0 0.05rem 0 ${Colors.WHITE_87};
  z-index: 11;
`;

export const ContentBody = styled.div`
  display: flex;
  background-color: rgba(251, 253, 255, 0.87);
  flex-direction: column;
  padding: 4rem 7.5rem;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
  margin-bottom: 0.75rem;
  font-family: ${Fonts.SOURCE_SERIF_PRO};
  font-size: 1.15rem;
  line-height: 1.5rem;
`;

export const ContentPanel: FC<IContentPanel> = ({
  background,
  children,
  contentTitle,
  pctWidth
}) => {
  const TitleElement: ReactNode = contentTitle ? (
    typeof contentTitle === "string" ? (
      <ContentTitle>{contentTitle}</ContentTitle>
    ) : (
      contentTitle
    )
  ) : (
    <ContentTitle />
  );
  return (
    <ContentPanelWrapper background={background} pctWidth={pctWidth}>
      {TitleElement}
      <ContentBody>{children}</ContentBody>
    </ContentPanelWrapper>
  );
};

export const Content: FC<IContent> = ({ children, contentTitle }) => {
  return (
    <ContentWrapper>
      <ContentPanel contentTitle={contentTitle}>
        <>{children}</>
      </ContentPanel>
    </ContentWrapper>
  );
};
