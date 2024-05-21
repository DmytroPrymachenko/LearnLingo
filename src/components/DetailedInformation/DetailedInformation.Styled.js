import styled from "styled-components";

export const DetailedInformationDiv = styled.div`
  position: fixed;
  top: 20%;
  left: 20%;
  display: flex;
  /* position: relative; */
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 24px;

  /* background-color: #fff; */
  background-color: #fff;
  border-radius: 30px;
  z-index: 10;
`;
export const DetailedInformationForm = styled.div`
  display: flex;

  gap: 48px;
`;

export const DetailedInformationExperience = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #121417;
  max-width: 968px;
`;

export const ImageForComentDiv = styled.div`
  border-radius: 100px;
  width: 44px;
  height: 44px;
`;

export const DetailedReviewsDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 12px;
`;
export const DetailedReviewsStarRatingDiv = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-direction: row;
`;
export const DetailedReviewsRatingSpan = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: #121417;
`;
export const DetailedReviewsName = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #8a8a89;
`;

export const DetailedReviewsComment = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #121417;
`;

export const BookLessonButton = styled.button`
  font-weight: 700;
  font-size: 18px;
  line-height: 156%;
  color: #121417;
  background: #f4c550;
  border-radius: 12px;
  padding: 16px 48px;
  border: none;
`;
