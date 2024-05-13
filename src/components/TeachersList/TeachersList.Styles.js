import styled from "styled-components";

export const TeachersListDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
`;
export const TeachersListUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;
export const TeachersListLi = styled.li`
  display: flex;
  background: #fff;
  border-radius: 24px;
  padding: 24px;
`;

export const TeachersListImageTeacher = styled.img`
  border-radius: 100px;
  width: 96px;
  height: 96px;
`;
export const TeachersListImageDiv = styled.div`
  position: relative;
  border: 3px solid #fbe9ba;
  border-radius: 100px;
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TeachersListImageSvg = styled.svg`
  position: absolute;
`;

export const TeachersListStatusDiv = styled.div`
  display: flex;
  flex-direction: row;

  align-items: flex-start;
  gap: 149px;
`;
export const TeachersListStatusDivInternal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 64px;
`;
export const TeachersListStatusUl = styled.ul`
  display: flex;
  flex-direction: row;
  > li:not(:last-child) {
    border-right: 1px solid rgba(18, 20, 23, 0.2);
    padding-right: 16px;
  }
  > li:not(:first-child) {
    padding-left: 16px;
  }
`;
export const TeachersListStatusLi = styled.li`
  display: flex;
`;

export const ButtonTeachersFavorite = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background: none;
`;

export const TeachersItemParameters = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #8a8a89;
`;
