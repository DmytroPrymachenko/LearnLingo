import styled from "styled-components";
export const AuthorizationMessageDiv = styled.div`
  background-color: #fff;
  padding: 64px;
  border-radius: 30px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  transition: transform 0.3s ease;
  &:hover {
    transform: translate(-50%, -50%) scale(1.05); /* Enlarge on hover */
  }
`;

export const AuthorizationDiv = styled.div`
  display: flex;

  flex-direction: column;
  max-width: 438px;
  position: relative;
`;

export const AuthorizationMessageH1 = styled.h1`
  font-weight: 500;
  font-size: 40px;
  line-height: 120%;
  letter-spacing: -0.02em;
  padding-bottom: 35px;
`;
export const AuthorizationMessageSpan = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 137%;
  color: rgba(18, 20, 23, 0.8);
`;
export const AuthorizationMessageContentDiv = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;
export const AuthorizationButtonEsc = styled.button`
  position: absolute;
  border: none;
  background-color: transparent;
  top: 4%;
  right: 3%;
  width: 30px;
  height: 30px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;
