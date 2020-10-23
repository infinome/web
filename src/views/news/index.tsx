import React, { FC, useState } from "react";
import styled from "styled-components";
import { BulletIcon } from "../../components/bullet-con";
import { Colors } from "../../config/styles";
import {
  DetailsTextHighlightWrapper,
  DetailsTextWrapperRow,
  View
} from "../../components/layout";

const NewsLink = styled.a`
  border: none;
  color: inherit;
  text-decoration: none;
  &:hover {
    color: ${Colors.TURQUOISE};
    text-decoration: underline;
  }
`;

export const NewsView: FC = () => {
  return (
    <View contentTitle="News">
      <DetailsTextHighlightWrapper>
        {"Articles and links from our team and the larger industry"}
      </DetailsTextHighlightWrapper>
      <DetailsTextWrapperRow>
        <BulletIcon />
        <NewsLink
          href="https://www.youtube.com/watch?v=5dauF7JhHiY"
          title="Rapid Forward Engineering at the Genome Scale, SEED 2019"
          target="_blank"
        >
          Rapid Forward Engineering at the Genome Scale, SEED 2019
        </NewsLink>
      </DetailsTextWrapperRow>
      <DetailsTextWrapperRow>
        <BulletIcon />
        <NewsLink
          href="https://www.youtube.com/watch?v=M-2bL9Tb1r4"
          title="SynBioBeta Webinar: Precision editing for genome scale directed evolution"
          target="_blank"
        >
          SynBioBeta Webinar: Precision editing for genome scale directed
          evolution
        </NewsLink>
      </DetailsTextWrapperRow>
      <DetailsTextWrapperRow>
        <BulletIcon />
        <NewsLink
          href="https://www.youtube.com/watch?v=9QLaQ8Vt2F8"
          title="Rapid Genome Scale Engineering by Richard Fox, Inscripta"
          target="_blank"
        >
          Rapid Genome Scale Engineering by Richard Fox, Inscripta
        </NewsLink>
      </DetailsTextWrapperRow>
      <DetailsTextWrapperRow>
        <BulletIcon />
        <NewsLink
          href="https://www.youtube.com/watch?v=n6GDGuVuFAw"
          title="Genome Scale Mapping of Genotype to Phenotype Relationships by Richard Fox, Inscripta"
          target="_blank"
        >
          Genome Scale Mapping of Genotype to Phenotype Relationships by Richard
          Fox, Inscripta
        </NewsLink>
      </DetailsTextWrapperRow>
      <DetailsTextWrapperRow>
        <BulletIcon />
        <NewsLink
          href="https://youtu.be/Aoxif1-s5uk"
          title="A benchtop platform for massively parallel CRISPR-based microbial genome engineering"
          target="_blank"
        >
          A benchtop platform for massively parallel CRISPR-based microbial
          genome engineering
        </NewsLink>
      </DetailsTextWrapperRow>
    </View>
  );
};
