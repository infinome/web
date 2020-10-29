import React, { FC, useState } from "react";
import styled from "styled-components";
import { BulletIcon } from "../../components/bullet-con";
import { Colors, Fonts } from "../../config/styles";
import BioPhotoRichard from "../../assets/images/Team-Richard.png";
import BioPhotoMike from "../../assets/images/Team-Mike.png";
import BioPhotoAndrew from "../../assets/images/Team-Andrew.png";
import BioPhotoDan from "../../assets/images/Team-Dan.png";
import LinkedInLogo from "../../assets/images/Team-linkedin-icon.png";
import {
  DetailsTextHighlightWrapper,
  DetailsTextWrapperRow,
  View
} from "../../components/layout";

const TeamLink = styled.a`
  border: none;
  color: inherit;
  text-decoration: none;
  &:hover {
    color: ${Colors.TURQUOISE};
    text-decoration: underline;
  }
`;

const TeamImage = styled.img`
  border: none;
  width: 14rem;
  height: 14rem;
`;

const TeamLinkedinImage = styled.img`
  border: none;
  outline: none;
  width: 2rem;
  margin: 0;
  transition: margin 0.25s;
  &:hover {
    margin-right: -0.125rem;
  }
`;

const TeamContent = styled.div`
  border-top: 0.5rem solid ${Colors.WHITE_87};
  display: flex;
  flex-direction: row;
  flex-grow: 5;
  justify-content: space-between;
  padding: 1rem 0 9rem 0;
`;

const TeamContentInner = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 5;
  justify-content: space-between;
`;

const TeamList = styled.ul`
  list-style-type: square;
  padding: 0 1rem 1 rem 1 rem;
  width: 100%;
`;

const TeamListItem = styled.li`
  padding-left: 0.5rem;
  font-family: ${Fonts.SOURCE_SERIF_PRO};
  font-size: 1rem;
`;

const TeamTitle = styled.div`
  background-color: transparent;
  border: none 0 transparent;
  color: ${Colors.BLACK_BLUE};
  font-family: ${Fonts.BARLOW_CONDENSED};
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0.75rem 0 0.5rem 0;
`;

const TeamSubTitle = styled(TeamTitle)`
  font-weight: normal;
  font-family: ${Fonts.BARLOW};
  color: ${Colors.DARK_BLUE};
  font-size: 1.25rem;
  padding-left: 1rem;
`;

const BlueText = styled.div`
  font-family: ${Fonts.BARLOW};
  color: ${Colors.TURQUOISE};
  font-weight: bold;
`;

const TeamSubTitleVision = styled.div`
  background: linear-gradient(270deg, #ffffff 0%, rgba(255, 255, 255, 0) 91.22%),
    linear-gradient(0deg, #e7f0f7, #e7f0f7);
  border: none 0 transparent;
  color: ${Colors.BLACK_BLUE};
  font-family: ${Fonts.BARLOW_CONDENSED};
  font-size: 1.25rem;
  padding: 0.5rem 2.5rem;
  border-radius: 0 0.5rem 0.5rem 0;
`;

export const TeamView: FC = () => {
  return (
    <View contentTitle="Founding Team">
      <DetailsTextHighlightWrapper>
        {"Our Executive team brings a wealth of industry experience"}
      </DetailsTextHighlightWrapper>

      <TeamContent>
        <TeamImage
          src={BioPhotoRichard}
          alt="Richard Fox, PhD - Chief Executive Officer, Chief Technology Officer"
        />
        <TeamContentInner>
          <TeamTitle>Richard Fox, PhD</TeamTitle>
          <TeamSubTitle>
            Chief Executive Officer, Chief Technology Officer
          </TeamSubTitle>
          <TeamList>
            <TeamListItem>
              25 years industry experience with Maxygen, Codexis,
              DuPont-Pioneer, Intrexon, & Inscripta
            </TeamListItem>
            <TeamListItem>
              Inventor of core technologies for bioengineering platforms and
              commercial bioproducts
            </TeamListItem>
            <TeamListItem>
              Builds and utilizes bioinformatics, software, and artificial
              intelligence capabilities
            </TeamListItem>
          </TeamList>
          <TeamSubTitleVision>
            <BlueText>Infinome Vision: </BlueText>
            Lead corporate strategy, forward engineering, data science, & learn
            technologies
          </TeamSubTitleVision>
        </TeamContentInner>
        <TeamLink
          href="https://www.linkedin.com/in/richard-fox-745b8b1"
          target="_blank"
        >
          <TeamLinkedinImage
            src={LinkedInLogo}
            alt="See Richard's LinkedIn profile"
          />
        </TeamLink>
      </TeamContent>

      <TeamContent>
        <TeamImage
          src={BioPhotoMike}
          alt="Mike Clay, PhD - Chief Operations Officer"
        />
        <TeamContentInner>
          <TeamTitle>Mike Clay, PhD</TeamTitle>
          <TeamSubTitle>Chief Operations Officer</TeamSubTitle>
          <TeamList>
            <TeamListItem>
              15 years industry experience with Codexis, LS9, DuPont-Pioneer,
              Zymergen, Intrexon, & Inscripta
            </TeamListItem>
            <TeamListItem>
              Commercialized 3 compounds, fully built 3 synthetic biology labs
            </TeamListItem>
            <TeamListItem>
              Deep professional network across Bay Area Biotech companies,
              organizations, and vendors
            </TeamListItem>
          </TeamList>
          <TeamSubTitleVision>
            <BlueText>Infinome Vision: </BlueText>
            Lead Test technologies, high throughput automation, assays,
            fermentation, and detection
          </TeamSubTitleVision>
        </TeamContentInner>
        <TeamLink
          href="https://www.linkedin.com/in/michael-clay-214b8a1/"
          target="_blank"
        >
          <TeamLinkedinImage
            src={LinkedInLogo}
            alt="See Mike's LinkedIn profile"
          />
        </TeamLink>
      </TeamContent>

      <TeamContent>
        <TeamImage
          src={BioPhotoAndrew}
          alt="Andrew Guest, PhD - Chief Synthetic Biology Officer"
        />
        <TeamContentInner>
          <TeamTitle>Andrew Guest, PhD</TeamTitle>
          <TeamSubTitle>Chief Synthetic Biology Officer</TeamSubTitle>
          <TeamList>
            <TeamListItem>Co-founder of Inscripta</TeamListItem>
            <TeamListItem>
              Inventor of Inscripta’s foundational CRISPR-based CREATE
              technology
            </TeamListItem>
            <TeamListItem>
              Bioinformatics, molecular biology, and assay development
            </TeamListItem>
          </TeamList>
          <TeamSubTitleVision>
            <BlueText>Infinome Vision: </BlueText>
            Lead R&D and technology innovation
          </TeamSubTitleVision>
        </TeamContentInner>
        <TeamLink
          href="https://www.linkedin.com/in/andrew-garst-49570024"
          target="_blank"
        >
          <TeamLinkedinImage
            src={LinkedInLogo}
            alt="See Andrew's LinkedIn profile"
          />
        </TeamLink>
      </TeamContent>

      <TeamContent>
        <TeamImage
          src={BioPhotoDan}
          alt="Dan Held, PhD - Chief Scientific Officer"
        />
        <TeamContentInner>
          <TeamTitle>Dan Held, PhD</TeamTitle>
          <TeamSubTitle>Chief Scientific Officer</TeamSubTitle>
          <TeamList>
            <TeamListItem>
              15 years industry experience with SRI, Codexis, Novozymes,
              Zymergen, AbSci, & Inscripta
            </TeamListItem>
            <TeamListItem>
              Technology scouting, innovation, and implementation on commercial
              and R&D projects across organisms and product lines
            </TeamListItem>
            <TeamListItem>
              Hires and manages high-performing, cohesive teams
            </TeamListItem>
          </TeamList>
          <TeamSubTitleVision>
            <BlueText>Infinome Vision: </BlueText>
            Lead strain engineering and product development
          </TeamSubTitleVision>
        </TeamContentInner>
        <TeamLink
          href="https://www.linkedin.com/in/dan-held-3250b08/"
          target="_blank"
        >
          <TeamLinkedinImage
            src={LinkedInLogo}
            alt="See Dan's LinkedIn profile"
          />
        </TeamLink>
      </TeamContent>
    </View>
  );
};
