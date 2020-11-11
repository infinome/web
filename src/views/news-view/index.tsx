import React, { FC, useState } from "react";
import styled from "styled-components";
import { BulletIcon } from "../../components/bullet-con";
import { Colors } from "../../config/styles";
import {
  DetailsTextHighlightWrapper,
  DetailsTextWrapperRow,
  View
} from "../../components/layout";
import Thumbnail_RapidGenome from "../../assets/images/thumbnail-rapid-genome-scale-engineering.png";
import Thumbnail_RapidForward from "../../assets/images/thumbnail-rapid-forward-engineering.png";
import Thumbnail_SynBioBeta from "../../assets/images/thumbnail-SynBioBeta-Inscripta-Webinar-Precision.png";
import Thumbnail_GenomeScale from "../../assets/images/thumbnail-genome-scale-mapping-of-genotype.png";
import Thumbnail_BenchtopPlatform from "../../assets/images/thumbnail-a-benchtop-platform-for-massively.png";

const NewsImage = styled.img`
  border: none;
  width: 14rem;
  height: auto;
  margin-right: 1rem;
  outline-style: none;
  &:hover {
    outline-style: solid;
    outline-width: 0.125rem;
    outline-color: ${Colors.TURQUOISE_67};
    outline-offset: 0.0625rem;
  }
`;

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
    <View contentTitle="News and Media">
      <DetailsTextHighlightWrapper>
        {"Talks and presentations by members of our Founding Team"}
      </DetailsTextHighlightWrapper>
      <DetailsTextWrapperRow>
        <BulletIcon />
        <NewsLink
          href="https://www.youtube.com/watch?v=5dauF7JhHiY"
          title="Rapid Forward Engineering at the Genome Scale, SEED 2019"
          target="_blank"
        >
          <NewsImage src={Thumbnail_RapidForward} />
        </NewsLink>
        Rapid Forward Engineering at the Genome Scale, SEED 2019
      </DetailsTextWrapperRow>
      <DetailsTextWrapperRow>
        <BulletIcon />
        <NewsLink
          href="https://www.youtube.com/watch?v=M-2bL9Tb1r4"
          title="SynBioBeta Webinar: Precision editing for genome scale directed evolution"
          target="_blank"
        >
          <NewsImage src={Thumbnail_SynBioBeta} />
        </NewsLink>
        SynBioBeta Webinar: Precision editing for genome scale directed
        evolution (video)
      </DetailsTextWrapperRow>
      <DetailsTextWrapperRow>
        <BulletIcon />
        <NewsLink
          href="https://www.youtube.com/watch?v=9QLaQ8Vt2F8"
          title="Rapid Genome Scale Engineering by Richard Fox, Inscripta"
          target="_blank"
        >
          <NewsImage src={Thumbnail_RapidGenome} />
        </NewsLink>
        Rapid Genome Scale Engineering by Richard Fox, Inscripta (video)
      </DetailsTextWrapperRow>
      <DetailsTextWrapperRow>
        <BulletIcon />
        <NewsLink
          href="https://www.youtube.com/watch?v=n6GDGuVuFAw"
          title="Genome Scale Mapping of Genotype to Phenotype Relationships by Richard Fox, Inscripta"
          target="_blank"
        >
          <NewsImage src={Thumbnail_GenomeScale} />
        </NewsLink>
        Genome Scale Mapping of Genotype to Phenotype Relationships by Richard
        Fox, Inscripta (video)
      </DetailsTextWrapperRow>
      <DetailsTextWrapperRow>
        <BulletIcon />
        <NewsLink
          href="https://youtu.be/Aoxif1-s5uk"
          title="A benchtop platform for massively parallel CRISPR-based microbial genome engineering"
          target="_blank"
        >
          <NewsImage src={Thumbnail_BenchtopPlatform} />
        </NewsLink>
        A benchtop platform for massively parallel CRISPR-based microbial genome
        engineering (video)
      </DetailsTextWrapperRow>
    </View>
  );
};
