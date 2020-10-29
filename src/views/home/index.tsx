import React, { FC, useState } from "react";
import styled from "styled-components";
import {
  DetailsTextHighlightWrapper,
  DetailsTextWrapper,
  View
} from "../../components/layout";

export const HomeView: FC = () => {
  return (
    <View contentTitle="&nbsp;">
      {/* <DetailsTextHighlightWrapper>
        {"If the Natural World allows it, evolution can achieve it."}
      </DetailsTextHighlightWrapper> */}
      <DetailsTextWrapper>
        <p>{"Harnessing the infinite potential of the genome"}</p>
        <p>
          {
            "Infinome Biosciences leverages state-of-the-art technologies including high-throughput CRISPR-based genome editing, machine learning/AI, directed evolution, smart automation & analytics, and lean integrated teams to usher in a new era of the bioeconomy and uniquely deliver high-value biological products to the market.            "
          }
        </p>
      </DetailsTextWrapper>
    </View>
  );
};
