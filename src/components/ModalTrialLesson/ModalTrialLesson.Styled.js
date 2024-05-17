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
  height: 18px;
`;

export const RadioInputIconDiv = styled.div`
  position: absolute;
  top: -3px;
  left: -3px;
  z-index: -1;
`;
export const RadioLabel = styled.label`
  font-weight: 400;
  font-size: 16px;
  line-height: 137%;
  text-align: center;
  color: #121417;
  cursor: pointer;
  &:hover {
    color: #f4c550;
  }

  &:focus {
    color: #f4c550;
  }
  &:checked {
    color: red;
  }
`;
export const RadioLi = styled.li`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 8px;
`;
export const RadioUl = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 17px;
  justify-content: center;
`;
export const ModalTrialExperienced = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 137%;
  color: rgba(18, 20, 23, 0.8);
`;

export const ModalTrialForm = styled.div`
  max-width: 472px;
`;
