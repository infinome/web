import React, { FC } from "react";
import styled from "styled-components";
import { Colors, Fonts } from "../../config//styles";
// import { Link } from "react-router-dom";
// import { InfinomeLogoIcon } from "../infinome-logo-icon";

export const ContentFooter = styled.div`
  flex-grow: 25;
  align-items: flex-end;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  /* font-family: ${Fonts.BARLOW_CONDENSED}; */
  color: ${Colors.INFINOME_CHARCOAL_97};
`;

export const FooterText = styled.div`
  border-top: 0.0625rem solid ${Colors.INFINOME_CHARCOAL_97};
  padding-top: 1rem;
  width: 100%;
  text-align: right;
`;

// const FooterLogoLink = styled(Link)`
// const FooterLogoLink = styled("div")`
//   margin-left: 1rem;
// `;

export const Footer: FC = () => {
  return (
    <ContentFooter>
      <FooterText>&copy; 2020 Infinome Biosciences</FooterText>
    </ContentFooter>
  );
};
