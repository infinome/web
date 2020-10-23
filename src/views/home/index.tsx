import React, { FC, useState } from "react";
import styled from "styled-components";
import {
  DetailsTextHighlightWrapper,
  DetailsTextWrapper,
  View
} from "../../components/layout";

export const HomeView: FC = () => {
  return (
    <View contentTitle="Harnessing the Infinite Potential of the Genome">
      <DetailsTextHighlightWrapper>
        {"If the Natural World allows it, evolution can achieve it."}
      </DetailsTextHighlightWrapper>
      <DetailsTextWrapper>
        <p>
          {
            "At Infinome Biosciences, we harness the awesome power of evolution to develop and deliver biological solutions to many of the world’s most important problems."
          }
        </p>
        <p>
          {
            "From health and medicine, to agriculture and consumer products, Infinome Bio is here to define and lead the realization of opportunities of critical impact for society and the planet in the Bioeconomy in the coming decade and beyond."
          }
        </p>
      </DetailsTextWrapper>
    </View>
  );
};
