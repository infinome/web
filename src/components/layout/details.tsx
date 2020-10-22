import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { CenteredContentWrapper } from "../layout/";
import { Colors, Fonts } from "../../config/styles";

// export const DetailsContentWrapper = styled(CenteredContentWrapper)`
export const DetailsContentWrapper = styled("div")`
  /* background-color: rgba(251, 253, 255, 0.37); */
  border: green dashed 0.5rem;
  justify-content: space-between;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 1rem 0;
  position: relative;
`;

export const DetailsFooterWrapper = styled.div`
  /* background-color: rgba(251, 253, 255, 0.37); */
  /* border-radius: 0 0 0.5rem 0.5rem; */
  display: flex;
  flex-direction: row;
  justify-content: right;
  margin: 1.5rem 0 1.5rem 0;
  padding: 1rem;
  width: 100%;
`;
export const DetailsHeaderWrapper = styled(DetailsFooterWrapper)`
  /* background-color: rgba(251, 253, 255, 0.37); */
  background-color: yellow;
  border-radius: 0.5rem 0.5rem 0 0;
  color: rgba(41, 53, 57, 0.51);
  font-family: ${Fonts.BARLOW_CONDENSED};
  font-size: 1.25rem;
  font-weight: 700;
  justify-content: flex-end;
  margin: 0 0 1.5rem 0;
  text-align: end;
  width: 100%;
`;
export const DetailsBodyWrapper = styled(DetailsContentWrapper)`
  border-radius: 0;
  flex-direction: row;
  font-family: ${Fonts.SOURCE_SERIF_PRO};
  font-size: 1.5rem;
  height: unset;
  justify-content: space-between;
  margin: 0;
  padding: 0 1rem;
  text-align: center;
  width: 100%;
`;

export const DetailsTextWrapper = styled.div`
  background-color: rgba(254, 253, 255, 0.67);
  border-bottom: 0.5rem solid ${Colors.WHITE_87};
  border-top: 0.5rem solid ${Colors.WHITE_87};
  display: flex;
  flex-direction: column;
  font-family: ${Fonts.SOURCE_SERIF_PRO};
  font-size: 1.25rem;
  justify-content: flex-start;
  line-height: 2.5rem;
  padding: 0.5rem 4rem;
  text-overflow: ellipsis;
`;

export const DetailsTextHighlightWrapper = styled(DetailsTextWrapper)`
  background-color: transparent;
  border: none 0 transparent;
  color: ${Colors.TURQUOISE};
  font-family: ${Fonts.BARLOW};
  font-size: 1.75rem;
  padding: 0.5rem 2rem 2rem 0;
`;
