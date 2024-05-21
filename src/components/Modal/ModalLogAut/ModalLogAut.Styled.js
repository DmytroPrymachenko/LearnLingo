import styled from "styled-components";

export const ModalLogAutDiv = styled.div`
  background-color: #fff;
  padding: 64px;
  border-radius: 30px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;
export const LogAutDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
export const LogAutH1 = styled.h1`
  font-weight: 500;
  font-size: 40px;
  line-height: 120%;
  letter-spacing: -0.02em;
  padding-bottom: 20px;
`;
export const LogAutSpan = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 137%;
  color: rgba(18, 20, 23, 0.8);
  padding-bottom: 40px;
`;
export const LogAutButtonDiv = styled.div`
  display: flex;
  gap: 50px;
`;

export const LogAutButtonlogAut = styled.button`
  font-weight: 700;
  font-size: 18px;
  line-height: 156%;
  color: #121417;
  background: #f4c550;
  border-radius: 12px;
  padding: 16px;
  cursor: pointer;
  width: 100%;
  border: none;
  transition: transform 0.3s ease, background 0.3s ease;

  &:focus,
  &:hover {
    background: #ffdc86;
    transform: scale(1.05);
  }
`;
export const LogAutButtonClose = styled.button`
  font-weight: 700;
  font-size: 18px;
  line-height: 156%;
  color: #121417;
  background: #f4c550;
  border-radius: 12px;
  padding: 16px;
  cursor: pointer;
  width: 100%;
  border: none;
  transition: transform 0.3s ease, background 0.3s ease;

  &:focus,
  &:hover {
    background: #ffdc86;
    transform: scale(1.05);
  }
`;
