import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ isHomePage }) => (isHomePage ? "#fff" : "#f8f8f8")};
  }
`;
// #f8f8f8
