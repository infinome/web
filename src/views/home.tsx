import React, { FC, useState } from "react";
import styled from "styled-components";
import {
  DetailsTextHighlightWrapper,
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

export const HomeContent: FC = () => {
  return (
    <>
      {/* <BgOverlayContainer />
      <BgOverlayContainer2 /> */}
      {/* <View contentTitle="&nbsp;"> */}
      <ViewContainer>
        <DetailsTextWrapper>
          <p>{"Harnessing the infinite potential of the genome"}</p>
          <p>
            {
              "Infinome Biosciences leverages state-of-the-art technologies including high-throughput CRISPR-based genome editing, machine learning/AI, directed evolution, smart automation & analytics, and lean integrated teams to usher in a new era of the bioeconomy and uniquely deliver high-value biological products to the market.            "
            }
          </p>
          <p>&nbsp;</p>
        </DetailsTextWrapper>
      </ViewContainer>
      {/* </View> */}
    </>
  );
};
