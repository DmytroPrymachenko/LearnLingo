import HeartLike from "../../images/svg/HeartLike";
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
  TeachersItemReadMore,
  TeachersItemTitleDiv,
  TeachersItemlanguagesParamsUl,
  TeachersListImageDiv,
  TeachersListImageTeacher,
  TeachersListLi,
  TeachersListStatusDiv,
  TeachersListStatusDivInternal,
  TeachersListStatusLi,
  TeachersListStatusUl,
} from "../TeachersList/TeachersList.Styles";
import TeachersListImageActive from "../../images/svg/TeachersListImageActive";
import LessonsOnlineSVG from "../../images/svg/LessonsOnlineSVG";
import StarSVG from "../../images/svg/StarSVG";
import HeartLikeActive from "../../images/svg/HeartLikeActive";
import { useState } from "react";

const favArray = JSON.parse(localStorage.getItem("favorites")) ?? [];

const TeachersItem = ({ item }) => {
  const [heart, setHeart] = useState(false);
  // console.log(favArray);
  function handleToggleFavorite({ id }) {
    if (JSON.parse(localStorage.getItem("favorites"))?.includes(id)) {
      const index = favArray.indexOf(id);
      favArray.splice(index, 1);
      localStorage.setItem("favorites", JSON.stringify(favArray));
      setHeart(!heart);
      console.log("favArray1", favArray);
    } else {
      favArray.push(id);
      localStorage.setItem("favorites", JSON.stringify(favArray));
      setHeart(!heart);
    }

    console.log("id", id);
  }

  // function addToFav(id) {
  //   if (JSON.parse(localStorage.getItem("favorites"))?.includes(id)) {
  //     const index = favArray.indexOf(id);
  //     favArray.splice(index, 1);
  //     localStorage.setItem("favorites", JSON.stringify(favArray));
  //     setHeart(!heart);
  //   } else {
  //     favArray.push(id);
  //     localStorage.setItem("favorites", JSON.stringify(favArray));
  //     setHeart(!heart);
  //   }
  // }
  const checked = JSON.parse(localStorage.getItem("favorites"))?.includes(
    item.id
  )
    ? true
    : null;
  return (
    <>
      <TeachersListLi>
        <div>
          <TeachersListImageDiv>
            <TeachersListImageTeacher src={item.avatar_url} alt="Teacher" />
            <TeachersListImageActive />
          </TeachersListImageDiv>
        </div>
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
              <ButtonTeachersFavorite
                onClick={() => handleToggleFavorite(item)}
              >
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
                <TeachersItemParameters>Lesson Info:</TeachersItemParameters>
                <p>{item.lesson_info}</p>
              </TeachersItemContentParamsLi>
              <TeachersItemContentParamsLi>
                <TeachersItemParameters>Conditions:</TeachersItemParameters>
                <p>{item.conditions}</p>
              </TeachersItemContentParamsLi>
            </ul>
            <TeachersItemReadMore>Read more</TeachersItemReadMore>
          </TeachersItemContentParams>
          <div>
            <TeachersItemContentlevelsUl>
              {item.levels.map((language, index) => (
                <TeachersItemContentlevelsLi key={index}>
                  #{language}
                </TeachersItemContentlevelsLi>
              ))}
            </TeachersItemContentlevelsUl>
          </div>
        </TeachersItemContent>
      </TeachersListLi>
    </>
  );
};

export default TeachersItem;
