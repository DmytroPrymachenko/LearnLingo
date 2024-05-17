import styled from "styled-components";
export const BackdropDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: grayscale(100%) blur(2px);
  z-index: 1;
`;
