import styled from "styled-components";

export const ModalTrialLessonDiv = styled.div`
  position: fixed;
  top: 25%;
  left: 25%;
  display: flex;
  /* position: relative; */
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 24px;

  background-color: red;
  border-radius: 30px;
  z-index: 10;
`;

export const ModalTrialAvatarImg = styled.img`
  border-radius: 100px;
  width: 44px;
  height: 44px;
`;

export const RadioInput = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;

  opacity: 0;
`;
export const RadioInputDiv = styled.div`
  position: relative;
`;

export const RadioInputIconDiv = styled.div`
  position: absolute;
  top: -3px;
  left: -3px;
  z-index: -1;
`;
