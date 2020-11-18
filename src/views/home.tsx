import React, { FC } from "react";
import styled from "styled-components";
import { Colors, getFontSize } from "../config/styles";
// import islandMountains from "../assets/images/infinome-island-mountains.png";

import {
  DetailsTextHighlightWrapper,
  DetailsTextWrapperRow,
  ViewContainer
} from "../components/layout";

const HomeDetailsTextWrapperRow = styled(DetailsTextWrapperRow)`
  background: ${Colors.INFINOME_CHARCOAL_97};
  color: ${Colors.WHITE};
  padding: 4rem 3rem 5rem 3rem;
`;

const HomeTitleText = styled.div`
  text-align: center;
  width: 100%;
  font-size: ${getFontSize(2)};
  text-shadow: 0 0.05rem 0 ${Colors.BLACK_BLUE};
`;

const HomeDetailsTextHighlightWrapper = styled(DetailsTextHighlightWrapper)`
  color: ${Colors.WHITE};
  /* text-shadow: 0.05rem 0.05rem 0 ${Colors.WHITE_87}; */
  height: 83vh;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

// const HomeViewImageSpacer = styled.div`
//   background: transparent;
//   width: 55%;
//   height: 30rem;
// `;

const HomeViewContainer = styled(ViewContainer)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const HomeContent: FC = () => {
  return (
    <>
      <HomeViewContainer>
        <HomeDetailsTextHighlightWrapper>
          <HomeTitleText>
            {"Infinite Genomic Opportunities for a Better World"}
          </HomeTitleText>
        </HomeDetailsTextHighlightWrapper>
        <HomeDetailsTextWrapperRow>
          {
            "Infinome Biosciences leverages state-of-the-art technologies including high-throughput CRISPR-based genome editing, machine learning/AI, directed evolution, smart automation & analytics, and lean integrated teams to usher in a new era of the bioeconomy and uniquely deliver high-value biological products to the market."
          }
          {/* <HomeViewImageSpacer /> */}
        </HomeDetailsTextWrapperRow>
      </HomeViewContainer>
    </>
  );
};
