import React, { FC, useState } from "react";
import styled from "styled-components";
import {
  Colors,
  HEADER_HEIGHT_REM,
  HEADER_HOME_HEIGHT_REM
} from "../config/styles";
import islandMountains from "../assets/images/infinome-island-mountains.png";

import {
  DetailsTextHighlightWrapper,
  DetailsTextWrapperRow,
  DetailsTextWrapper,
  ViewContainer
} from "../components/layout";
import { BackgroundAngleOverlay } from "../components/background-angle-overlay";

const BgOverlayContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 7vw;
  right: 0;
  width: 0;
  height: 0;
  border-top: 100vh solid transparent;
  border-bottom: 100vh solid transparent;
  border-right: 100vw solid rgba(80, 172, 115, 0.23);
`;

const BgOverlayContainer2 = styled(BgOverlayContainer)`
  left: 3vw;
  border-right: 100vw solid rgba(171, 176, 126, 0.21);
`;

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
      {/* <BgOverlayContainer />
      <BgOverlayContainer2 /> */}
      {/* <View contentTitle="&nbsp;"> */}
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
      {/* </View> */}
    </>
  );
};
