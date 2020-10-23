import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { Colors, Fonts } from "../../config//styles";
import { Link } from "react-router-dom";
import { InfinomeLogoIcon } from "../infinome-logo-icon";

export const ContentFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  font-family: ${Fonts.BARLOW_CONDENSED};
  color: ${Colors.INFINOME_RED};
  padding: 1rem 2.5rem;
`;

const FooterLogoLink = styled(Link)`
  margin-left: 1rem;
`;

export const Footer: FC = () => {
  return (
    <ContentFooter>
      &copy; 2020 Infinome Biosciences
      <FooterLogoLink to="/" title="Infinome Home">
        <InfinomeLogoIcon />
      </FooterLogoLink>
    </ContentFooter>
  );
};
