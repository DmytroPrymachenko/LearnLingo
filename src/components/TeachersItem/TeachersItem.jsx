import HeartLike from "../../images/svg/HeartLike";
import {
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

const favArray = JSON.parse(localStorage.getItem("favorites")) ?? [];

const TeachersItem = ({ item }) => {
  function handleToggleFavorite({ id }) {
    if (JSON.parse(localStorage.getItem("favorites"))?.includes(id)) {
      const index = favArray.indexOf(id);
      favArray.splice(index, 1);
      localStorage.setItem("favorites", JSON.stringify(favArray));
    } else {
      favArray.push(id);
      localStorage.setItem("favorites", JSON.stringify(favArray));
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
            <span>Languages</span>
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
                  <span>30$</span>
                </TeachersListStatusLi>
              </TeachersListStatusUl>
              <button onClick={() => handleToggleFavorite(item)}>
                {favArray.some((favTeacher) => favTeacher.id === item.id)
                  ? "є в улюблених"
                  : "нема в улюблених"}
                <HeartLike />
              </button>
            </TeachersListStatusDivInternal>
          </TeachersListStatusDiv>
          <div>
            <h3>{item.name}</h3>
          </div>
          <div>
            <ul>
              <li>
                <span>Speaks:</span>
                <p></p>
              </li>
              <li>
                <span>Lesson Info:</span>
                <p></p>
              </li>
              <li>
                <span>Conditions:</span>
                <p></p>
              </li>
            </ul>
            <button>Read more</button>
          </div>
          <div>
            <span>#A1 Beginner</span>
            <span>#A2 Elementary</span>
            <span>#B1 Intermediate</span>
            <span>#B2 Upper-Intermediate</span>
          </div>
        </div>
      </TeachersListLi>
    </>
  );
};

export default TeachersItem;
