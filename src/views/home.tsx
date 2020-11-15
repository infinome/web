import React, { FC } from "react";
import styled from "styled-components";
import { Colors } from "../config/styles";
import islandMountains from "../assets/images/infinome-island-mountains.png";

import {
  DetailsTextHighlightWrapper,
  DetailsTextWrapperRow,
  ViewContainer
} from "../components/layout";

const HomeViewText = styled.div`
  width: 45%;
  padding-right: 3rem;
  text-shadow: 0 0.05rem 0 ${Colors.WHITE_87};
`;

const HomeDetailsTextHighlightWrapper = styled(DetailsTextHighlightWrapper)`
  text-shadow: 0.05rem 0.05rem 0 ${Colors.WHITE_87};
`;

const HomeViewImageSpacer = styled.div`
  background: transparent;
  width: 55%;
  height: 30rem;
`;

const HomeViewContainer = styled(ViewContainer)`
  background: url(${islandMountains});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: 200%;
`;

export const HomeContent: FC = () => {
  return (
    <>
      <HomeViewContainer>
        <HomeDetailsTextHighlightWrapper>
          {"Harnessing the infinite potential of the genome"}
        </HomeDetailsTextHighlightWrapper>
        <DetailsTextWrapperRow>
          <HomeViewText>
            {
              "Infinome Biosciences leverages state-of-the-art technologies including high-throughput CRISPR-based genome editing, machine learning/AI, directed evolution, smart automation & analytics, and lean integrated teams to usher in a new era of the bioeconomy and uniquely deliver high-value biological products to the market."
            }
          </HomeViewText>
          <HomeViewImageSpacer />
        </DetailsTextWrapperRow>
      </HomeViewContainer>
    </>
  );
};
