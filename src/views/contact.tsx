import React, { FC } from "react";
import styled from "styled-components";
import { Colors, Fonts } from "../config/styles";
import {
  DetailsTextHighlightWrapper,
  DetailsTextWrapper,
  // DetailsTextWrapperRow,
  ViewContainer
} from "../components/layout";

const ContactLink = styled.a`
  border: none;
  color: inherit;
  text-decoration: none;
  &:hover {
    color: ${Colors.TURQUOISE};
    text-decoration: underline;
  }
  padding-left: 1rem;
`;

const ContactLabel = styled.div`
  font-family: ${Fonts.BARLOW_CONDENSED};
  font-weight: bold;
  font-size: 1.5rem;
`;

export const ContactContent: FC = () => {
  return (
    <ViewContainer>
      <DetailsTextHighlightWrapper>
        {"Please reach out for more information"}
      </DetailsTextHighlightWrapper>
      <DetailsTextWrapper>
        <ContactLabel>{"Email: "}</ContactLabel>
        <ContactLink href="mailto:info@infinomebio.com?Subject=Infinome Website Contact">
          info@infinomebio.com
        </ContactLink>
      </DetailsTextWrapper>
    </ViewContainer>
  );
};
