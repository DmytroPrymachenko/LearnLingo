import HeartLike from "../../images/svg/HeartLike";
import {
  ButtonTeachersFavorite,
  TeachersItemParameters,
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

const TeachersItem = ({ item }) => {
  const [favArray, setFavArray] = useState(
    JSON.parse(localStorage.getItem("favorites")) ?? []
  );

  function handleToggleFavorite({ id }) {
    if (favArray.includes(id)) {
      const updatedFavArray = favArray.filter((favId) => favId !== id);
      setFavArray(updatedFavArray);
      localStorage.setItem("favorites", JSON.stringify(updatedFavArray));
    } else {
      const updatedFavArray = [...favArray, id];
      setFavArray(updatedFavArray);
      localStorage.setItem("favorites", JSON.stringify(updatedFavArray));
    }
  }

  return (
    <>
      <TeachersListLi>
        <div>
          <TeachersListImageDiv>
            <TeachersListImageTeacher src={item.avatar_url} alt="Teacher" />
            <TeachersListImageActive />
          </TeachersListImageDiv>
        </div>
        <div>
          <TeachersListStatusDiv>
            <div>
              <TeachersItemParameters>Languages</TeachersItemParameters>
              <h3>{item.name}</h3>
            </div>
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
                  <span>{item.price_per_hour}$</span>
                </TeachersListStatusLi>
              </TeachersListStatusUl>
              <ButtonTeachersFavorite
                onClick={() => handleToggleFavorite(item)}
              >
                {favArray.some((favTeacher) => favTeacher === item.id) ? (
                  <HeartLikeActive />
                ) : (
                  <HeartLike />
                )}
              </ButtonTeachersFavorite>
            </TeachersListStatusDivInternal>
          </TeachersListStatusDiv>

          <div>
            <ul>
              <li>
                <TeachersItemParameters>Speaks:</TeachersItemParameters>
                <ul>
                  {item.languages.map((language, index) => (
                    <li key={index}>{language}</li>
                  ))}
                </ul>
              </li>
              <li>
                <TeachersItemParameters>Lesson Info:</TeachersItemParameters>
                <p>{item.lesson_info}</p>
              </li>
              <li>
                <TeachersItemParameters>Conditions:</TeachersItemParameters>
                <p>{item.conditions}</p>
              </li>
            </ul>
            <button>Read more</button>
          </div>
          <div>
            <ul>
              {item.levels.map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
          </div>
        </div>
      </TeachersListLi>
    </>
  );
};

export default TeachersItem;
