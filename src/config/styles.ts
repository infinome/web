import { createGlobalStyle } from "styled-components";

/**
 * Color constants
 * @enum {string}
 */
export const Colors = {
  BLACK_BLUE: "#101F27",
  PALE_GREEN: "rgba(190, 204, 184, 1)",
  BLUE: "#14219C",
  TURQUOISE: "rgba(0, 126, 154, 1)",
  TURQUOISE_67: "rgba(0, 126, 154, 0.67)",
  DARK_BLUE: "rgba(3, 33, 39, 1)",
  TITLE_BLUE: "rgba(23, 3, 87, 1)",
  WHITE: "rgba(255,255,255,1)",
  WHITE_87: "rgba(255,255,255,0.87)",
  INFINOME_RED: "rgba(153,1,2,1)"
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

export const HEADER_HEIGHT_REM: number = 2.5;
export const HEADER_HOME_HEIGHT_REM: number = 3.75;
