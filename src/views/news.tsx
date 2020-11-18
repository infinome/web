import React, { FC } from "react";
import styled from "styled-components";
// import { BulletIcon } from "../components/bullet-con";
import { Colors, getFontSize } from "../config/styles";
import {
  DetailsTextHighlightWrapper,
  DetailsTextWrapperRow,
  ViewContainer
} from "../components/layout";
import Thumbnail_RapidGenome from "../assets/images/thumbnail-rapid-genome-scale-engineering.png";
import Thumbnail_RapidForward from "../assets/images/thumbnail-rapid-forward-engineering.png";
import Thumbnail_SynBioBeta from "../assets/images/thumbnail-SynBioBeta-Inscripta-Webinar-Precision.png";
import Thumbnail_GenomeScale from "../assets/images/thumbnail-genome-scale-mapping-of-genotype.png";
import Thumbnail_BenchtopPlatform from "../assets/images/thumbnail-a-benchtop-platform-for-massively.png";

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
  margin: 0 1rem 0 0;
  padding: 0 1rem 1.5rem 1rem;
  background: linear-gradient(
    180deg,
    rgba(247, 247, 248, 0.87) 0%,
    rgba(255, 255, 255, 0) 100%
  );
`;

const NewsTextSubHighlightWrapper = styled(DetailsTextHighlightWrapper)`
  font-size: ${getFontSize(1.325)};
  color: ${Colors.INFINOME_CHARCOAL};
  border-top: solid 0.125rem ${Colors.TURQUOISE_67};
  padding: 2rem 0 2rem 1rem;
`;

export const NewsContent: FC = () => {
  return (
    <ViewContainer>
      <DetailsTextHighlightWrapper>
        {"News and Links"}
      </DetailsTextHighlightWrapper>
      <NewsTextSubHighlightWrapper>
        {"Talks and presentations by members of our Founding Team"}
      </NewsTextSubHighlightWrapper>
      <DetailsTextWrapperRow>
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

      <NewsTextSubHighlightWrapper>{"Media Links"}</NewsTextSubHighlightWrapper>
      <DetailsTextWrapperRow>
        <NewsLink
          href="https://synbiobeta.com/gene-editing-reborn-a-conversation-with-inscriptas-richard-fox/"
          title="synbiobeta - Gene editing reborn: A conversation with Inscripta’s Richard Fox"
          target="_blank"
        >
          [synbiobeta] - Gene editing reborn: A conversation with Inscripta’s
          Richard Fox
        </NewsLink>
      </DetailsTextWrapperRow>
      <DetailsTextWrapperRow>
        <NewsLink
          href="https://www.genengnews.com/insights/single-cell-writing-may-unlock-crisprs-full-potential/"
          title="Genetic Engineering & Biotechnology News - Single Cell Writing May Unlock CRISPR’s Full Potential"
          target="_blank"
        >
          [Genetic Engineering & Biotechnology News] - Single Cell Writing May
          Unlock CRISPR’s Full Potential
        </NewsLink>
      </DetailsTextWrapperRow>
      <DetailsTextWrapperRow>
        <NewsLink
          href="https://www.liebertpub.com/doi/full/10.1089/crispr.2019.0015"
          title=" [The CRISPR Journal] - Too Much Compromise in Today's CRISPR Pipelines"
          target="_blank"
        >
          [The CRISPR Journal] - Too Much Compromise in Today's CRISPR Pipelines
        </NewsLink>
      </DetailsTextWrapperRow>
      <DetailsTextWrapperRow>
        <NewsLink
          href="https://biotechcomms.com/2019/06/30/inscripta-looks-to-combine-crispr-single-cell-genomics-synthetic-biology-in-new-platform/"
          title="Biotech Communications - Inscripta Looks to Combine CRISPR, Single-Cell Genomics, Synthetic Biology in New Platform"
          target="_blank"
        >
          [Biotech Communications] - Inscripta Looks to Combine CRISPR,
          Single-Cell Genomics, Synthetic Biology in New Platform
        </NewsLink>
      </DetailsTextWrapperRow>
      <DetailsTextWrapperRow>
        <NewsLink
          href="https://www2.inscripta.com/Forward-Engineering_webinar.html"
          title="Inscripta Webinar - Forward Engineering in Biological Systems"
          target="_blank"
        >
          [Inscripta Webinar] - Forward Engineering in Biological Systems
        </NewsLink>
      </DetailsTextWrapperRow>
    </ViewContainer>
  );
};
