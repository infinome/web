import styled from "styled-components";
import { Colors } from "../../config/styles";
import mountains from "../../assets/images/boulder-mountains-blur.png";

export { PanelView, View } from "./view";
export {
  CenteredContentWrapper,
  Content,
  ContentPanel,
  ContentTitle
} from "./content";
export {
  DetailsContentWrapper,
  DetailsFooterWrapper,
  DetailsHeaderWrapper,
  DetailsBodyWrapper,
  DetailsTextWrapper
} from "./details";

export const BackgroundImageComponent = styled.div`
  background: url(${mountains});
  background-color: rgba(157, 181, 203, 1);
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position-x: 25%;
  bottom: 0;
  display: flex;
  flex-direction: column;
  left: 0;
  margin: 0;
  overflow: hidden;
  padding: 1rem 1rem 2rem 1rem;
  position: absolute;
  right: 0;
  top: 0;
`;

export const AppComponent = styled.div`
  background: linear-gradient(
    217deg,
    rgba(194, 225, 254, 1),
    rgba(255, 255, 255, 0) 70.71%
  );
  background-color: rgba(157, 181, 203, 1);
  bottom: 0;
  display: flex;
  flex-direction: column;
  left: 0;
  margin: 0;
  overflow: hidden;
  padding: 1rem 1rem 2rem 1rem;
  position: absolute;
  right: 0;
  top: 0;
`;

export const BackgroundColumnLeft = styled.div`
  position: absolute;
  width: 33%;
  left: 1rem;
  top: 1rem;
  bottom: 1rem;
  background: rgba(25, 26, 28, 0.37);
  border-radius: 1rem 0px 0px 1rem;
`;
