import React, { FC } from "react";
import styled from "styled-components";
import { Colors, Fonts } from "../config/styles";
import {
  DetailsTextHighlightWrapper,
  DetailsTextWrapper,
  // DetailsTextWrapperRow,
  ViewContainer,
  Footer
} from "../components/layout";

const ContactViewContainer = styled(ViewContainer)`
  display: flex;
  flex-direction: column;
`;
const ContactDetailsTextHighlightWrapper = styled(DetailsTextHighlightWrapper)`
  flex-grow: 1;
`;
const ContactDetailsTextWrapper = styled(DetailsTextWrapper)`
  flex-grow: 1;
`;

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
    <ContactViewContainer>
      <ContactDetailsTextHighlightWrapper>
        {"Please reach out for more information"}
      </ContactDetailsTextHighlightWrapper>
      <ContactDetailsTextWrapper>
        <ContactLabel>{"Email: "}</ContactLabel>
        <ContactLink href="mailto:info@infinomebio.com?Subject=Infinome Website Contact">
          info@infinomebio.com
        </ContactLink>
      </ContactDetailsTextWrapper>
      <Footer />
    </ContactViewContainer>
  );
};
