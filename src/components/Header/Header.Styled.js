import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderSection = styled.div`
  display: flex;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 48px;
  margin-top: 20px;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: grayscale(1);
  z-index: -1;
`;

export const HeaderDivLink = styled.div`
  display: flex;
  gap: 28px;
`;

export const HeaderLink = styled(NavLink)`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #121417;
`;

export const HeaderSpanLogin = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  color: #121417;
`;

export const HeaderDivAuthorization = styled.div`
  display: flex;
  gap: 16px;
`;

export const HeaderButtonLogin = styled.button`
  display: flex;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const HeaderButtonRegistration = styled.button`
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  color: #fff;
  border-radius: 12px;
  padding: 14px 39px;
  width: 166px;
  height: 48px;
  background: #121417;
  border: none;

  outline: none;
  cursor: pointer;
`;
