import styled from "styled-components";

export const TeachersListDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  padding-top: 32px;
  padding-bottom: 96px;
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
  gap: 48px;
  width: 100%;
  max-width: 1184px;
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
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  gap: 192px;
`;
export const TeachersListStatusDivInternal = styled.div`
  display: flex;
  align-items: center;

  gap: 64px;
  width: 100%;
  justify-content: space-between;
`;
export const TeachersListStatusUl = styled.ul`
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  > li:not(:last-child) {
    border-right: 1px solid rgba(18, 20, 23, 0.2);
    padding-right: 16px;
    gap: 8px;
  }
  > li:not(:first-child) {
    padding-left: 16px;
  }

  > li {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #121417;
    display: flex;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  > li:last-child {
    gap: 4px;
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
  line-height: 1.5;
  color: #8a8a89;
`;
export const TeachersItemTitleDiv = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
`;
export const TeachersItemNameSpan = styled.span`
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
  color: #121417;
  white-space: nowrap;
`;
export const TeachersItemContent = styled.div`
  display: flex;
  gap: 32px;
  flex-direction: column;
  width: 100%;
`;

export const TeachersItemReadMore = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: #121417;
  background-color: transparent;
  border: none;
`;

export const TeachersItemContentParams = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
`;
export const TeachersItemContentParamsLi = styled.li`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
`;
export const TeachersItemlanguagesParamsUl = styled.ul`
  display: flex;
  flex-direction: row;

  align-items: center;

  text-decoration-skip-ink: none;
  text-decoration: underline;
  color: #121417;
  > li:not(:last-child)::after {
    content: ",";
  }
  > li {
    text-decoration: underline;
  }
`;

export const TeachersItemContentlevelsUl = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  > li:first-child {
    border: none;
    background: #f4c550;
  }
`;
export const TeachersItemContentlevelsLi = styled.li`
  justify-content: center;
  border-radius: 35px;
  padding: 8px 12px;
  border: 1px solid rgba(18, 20, 23, 0.2);
`;

export const TeachersItemPriceSpan = styled.span`
  color: #38cd3e;

  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
`;

export const TeachersListLoadMore = styled.button`
  border-radius: 12px;
  padding: 16px 48px;

  font-weight: 700;
  font-size: 18px;
  line-height: 156%;
  color: #121417;
  justify-content: center;
  background: #f4c550;
  border: none;
`;

export const TeachersitemLTitleDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 8px;
  flex-direction: column;
`;
