import styled from "styled-components";
import mountains from "../../assets/images/boulder-mountains.png";
// import { Link } from "react-router-dom";

export { PanelView, ScrollableViewContainer, View } from "./view";
export {
  CenteredContentWrapper,
  Content,
  Footer,
  ContentPanel,
  ContentTitle
} from "./content";
export {
  DetailsContentWrapper,
  DetailsFooterWrapper,
  DetailsHeaderWrapper,
  DetailsBodyWrapper,
  DetailsTextHighlightWrapper,
  DetailsTextWrapper,
  DetailsTextWrapperRow
} from "./details";

export const BackgroundImageComponent = styled.div`
  background: url(${mountains});
  background-color: rgba(157, 181, 203, 1);
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position-x: 25%;
  transition: all ease-in-out 1sec;
  bottom: 0;
  display: flex;
  flex-direction: column;
  left: 0;
  margin: 0;
  overflow: hidden;
  /* padding: 1rem 1rem 2rem 1rem; */
  position: absolute;
  right: 0;
  top: 0;
`;

export const AppComponent = styled.div`
  background: linear-gradient(
    220.68deg,
    rgba(255, 255, 255, 0.99) 4.51%,
    rgba(255, 255, 255, 0.3267) 17.12%
  );
  bottom: 0;
  display: flex;
  flex-direction: column;
  left: 0;
  margin: 0;
  overflow: hidden;
  /* padding: 1rem 1rem 2rem 1rem; */
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

// export const LogoLink = styled(Link)`
export const LogoLink = styled("div")`
  width: fit-content;
  z-index: 17;
  cursor: pointer;
`;

export const ViewContainer = styled.div`
  width: 100%;
  min-height: 83vh;
`;
