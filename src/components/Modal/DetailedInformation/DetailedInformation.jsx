import TeachersListImageActive from "../../../images/svg/TeachersListImageActive";
import {
  ButtonTeachersFavorite,
  TeachersItemContent,
  TeachersItemContentParams,
  TeachersItemContentParamsLi,
  TeachersItemContentlevelsLi,
  TeachersItemContentlevelsUl,
  TeachersItemNameSpan,
  TeachersItemParameters,
  TeachersItemPriceSpan,
  TeachersItemTitleDiv,
  TeachersItemlanguagesParamsUl,
  TeachersListImageDiv,
  TeachersListImageTeacher,
  TeachersListStatusDiv,
  TeachersListStatusDivInternal,
  TeachersListStatusLi,
  TeachersListStatusUl,
} from "../../TeachersList/TeachersList.Styles";

import HeartLike from "../../../images/svg/HeartLike";
import LessonsOnlineSVG from "../../../images/svg/LessonsOnlineSVG";
import StarSVG from "../../../images/svg/StarSVG";
import HeartLikeActive from "../../../images/svg/HeartLikeActive";

import {
  BookLessonButton,
  DetailedInformationDiv,
  DetailedInformationExperience,
  DetailedInformationForm,
  DetailedReviewsComment,
  DetailedReviewsDiv,
  DetailedReviewsName,
  DetailedReviewsRatingSpan,
  DetailedReviewsStarRatingDiv,
  ImageForComentDiv,
} from "./DetailedInformation.Styled";
import Star from "../../../images/svg/Star";
import ImageForComent from "../../../images/png/imageForComent.png";

const DetailedInformation = ({
  item,
  checked,
  handleToggleFavorite,

  handleTrialLesson,
}) => {
  const test = () => {
    handleToggleFavorite(item);
  };

  console.log(item);
  return (
    <>
      <DetailedInformationDiv>
        <DetailedInformationForm>
          <div>
            <TeachersListImageDiv>
              <TeachersListImageTeacher src={item.avatar_url} alt="Teacher" />
              <TeachersListImageActive />
            </TeachersListImageDiv>
          </div>
          <>
            <TeachersItemContent>
              <TeachersListStatusDiv>
                <TeachersItemTitleDiv>
                  <TeachersItemParameters>Languages</TeachersItemParameters>

                  <TeachersItemNameSpan>
                    {item.name} {item.surname}
                  </TeachersItemNameSpan>
                </TeachersItemTitleDiv>
                <TeachersListStatusDivInternal>
                  <TeachersListStatusUl>
                    <TeachersListStatusLi>
                      <LessonsOnlineSVG />
                      <span>Lessons online</span>
                    </TeachersListStatusLi>
                    <TeachersListStatusLi>
                      <span>Lessons done: {item.lessons_done}</span>
                    </TeachersListStatusLi>
                    <TeachersListStatusLi>
                      <StarSVG />
                      <span>Rating: {item.rating}</span>
                    </TeachersListStatusLi>
                    <TeachersListStatusLi>
                      <span>Price / 1 hour:</span>

                      <TeachersItemPriceSpan>
                        {item.price_per_hour}$
                      </TeachersItemPriceSpan>
                    </TeachersListStatusLi>
                  </TeachersListStatusUl>
                  <ButtonTeachersFavorite onClick={test}>
                    {checked ? <HeartLikeActive /> : <HeartLike />}
                  </ButtonTeachersFavorite>
                </TeachersListStatusDivInternal>
              </TeachersListStatusDiv>

              <TeachersItemContentParams>
                <ul>
                  <TeachersItemContentParamsLi>
                    <TeachersItemParameters>Speaks:</TeachersItemParameters>
                    <TeachersItemlanguagesParamsUl>
                      {item.languages.map((language, index) => (
                        <li key={index}>{"  " + language} </li>
                      ))}
                      {/* <span>{item.languages.map((el) => el)}</span> */}
                    </TeachersItemlanguagesParamsUl>
                  </TeachersItemContentParamsLi>
                  <TeachersItemContentParamsLi>
                    <TeachersItemParameters>
                      Lesson Info:
                    </TeachersItemParameters>
                    <p>{item.lesson_info}</p>
                  </TeachersItemContentParamsLi>
                  <TeachersItemContentParamsLi>
                    <TeachersItemParameters>Conditions:</TeachersItemParameters>
                    <p>{item.conditions}</p>
                  </TeachersItemContentParamsLi>
                </ul>
                <DetailedInformationExperience>
                  {item.experience}
                </DetailedInformationExperience>
              </TeachersItemContentParams>
              <ul>
                {item.reviews.map((reviews, index) => (
                  <li key={index}>
                    <DetailedReviewsDiv>
                      <ImageForComentDiv>
                        {reviews.avatar_url ? (
                          <img src={reviews.avatar_url} alt="Teacher" />
                        ) : (
                          <img
                            src={ImageForComent}
                            alt="Image Person For Coment "
                          />
                        )}
                      </ImageForComentDiv>
                      <div>
                        <DetailedReviewsName>
                          {reviews.reviewer_name}
                        </DetailedReviewsName>
                        <DetailedReviewsStarRatingDiv>
                          <Star />
                          <DetailedReviewsRatingSpan>
                            {reviews.reviewer_rating}.0
                          </DetailedReviewsRatingSpan>
                        </DetailedReviewsStarRatingDiv>
                      </div>
                    </DetailedReviewsDiv>
                    <DetailedReviewsComment>
                      {reviews.comment}
                    </DetailedReviewsComment>
                  </li>
                ))}
              </ul>
              <div>
                <TeachersItemContentlevelsUl>
                  {item.levels.map((language, index) => (
                    <TeachersItemContentlevelsLi key={index}>
                      #{language}
                    </TeachersItemContentlevelsLi>
                  ))}
                </TeachersItemContentlevelsUl>
              </div>
              <div>
                <BookLessonButton onClick={handleTrialLesson}>
                  Book trial lesson
                </BookLessonButton>
              </div>
            </TeachersItemContent>
          </>
        </DetailedInformationForm>
      </DetailedInformationDiv>
    </>
  );
};

export default DetailedInformation;
