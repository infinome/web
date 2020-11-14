import { createGlobalStyle } from "styled-components";

/**
 * Color constants
 * @enum {string}
 */
export const Colors = {
  BLACK_BLUE: "#101F27",
  BLUE: "#14219C",
  DARK_BLUE: "rgba(3, 33, 39, 1)",
  INFINOME_CHARCOAL: "rgba(32,35,38,1)",
  INFINOME_CHARCOAL_97: "rgba(32,35,38,0.97)",
  INFINOME_RED: "rgba(153,1,2,1)",
  PALE_GREEN: "rgba(190, 204, 184, 1)",
  TITLE_BLUE: "rgba(23, 3, 87, 1)",
  TURQUOISE: "rgba(0, 126, 154, 1)",
  TURQUOISE_67: "rgba(0, 126, 154, 0.67)",
  WHITE: "rgba(255,255,255,1)",
  WHITE_87: "rgba(255,255,255,0.87)"
};

/**
 * Font families
 * @enum {string}
 */
export const Fonts = {
  BARLOW: `Barlow, sans-serif;`,
  BARLOW_CONDENSED: `Barlow Condensed, sans-serif;`,
  SOURCE_SERIF_PRO: `Source Serif Pro, serif;`,
  INTER: `Inter, sans-serif`
};

export const GlobalStyle = createGlobalStyle`
  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${Colors.WHITE};
    font-family: ${Fonts.INTER};
    font-size: 16px;
    margin: 0;
    overflow-x: hidden;
    overflow-y: auto;
    width: 100%;
  }
`;

export const HEADER_HEIGHT_REM: number = 3;
export const HEADER_HOME_HEIGHT_REM: number = 4.25;
