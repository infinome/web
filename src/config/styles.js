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
  DARK_BLUE: "rgba(3, 33, 39, 1)",
  TITLE_BLUE: "rgba(40, 0, 155, 1)",
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
  SOURCE_SERIF_PRO: `Source Serif Pro, serif;`
};

export const GlobalStyle = createGlobalStyle`
  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${Colors.WHITE};
    font-family: ${Fonts.SOURCE_SERIF_PRO};
    font-size: 16px;
    margin: 0;
    overflow: hidden;
    width: 100%;
  }
`;
