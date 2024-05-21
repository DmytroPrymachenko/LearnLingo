import styled from "styled-components";
export const ModalRegisterFormDiv = styled.div`
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
    transform: translate(-50%, -50%) scale(1.05);
  }
`;
export const ModalRegisterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  max-width: 438px;
`;
export const ModalRegisterInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding-bottom: 40px;
`;
export const ModalRegisterDivTitle = styled.div`
  padding-bottom: 40px;
`;
export const ModalRegisterSpan = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 137%;
  color: rgba(18, 20, 23, 0.8);
  padding-bottom: 40px;
`;
