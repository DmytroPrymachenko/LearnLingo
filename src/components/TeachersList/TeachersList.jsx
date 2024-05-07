import {
  TeachersListDiv,
  TeachersListImageDiv,
  TeachersListImageTeacher,
  TeachersListLi,
  TeachersListStatusDiv,
  TeachersListStatusDivInternal,
  TeachersListStatusLi,
  TeachersListStatusUl,
  TeachersListUl,
} from "./TeachersList.Styles";
import TeachersListImageActive from "../../images/svg/TeachersListImageActive";
import LessonsOnlineSVG from "../../images/svg/LessonsOnlineSVG";
import StarSVG from "../../images/svg/StarSVG";
import HeartLike from "../../images/svg/HeartLike";
import { useState } from "react";

const TeachersList = ({ data }) => {
  const [teachersFavorites, setTeachersFavorites] = useState(
    JSON.parse(localStorage.getItem("teachersFavorites")) || []
  );

  const handleToggleFavorite = (teacher) => {
    const updatedFavorites = [...teachersFavorites];
    const index = updatedFavorites.findIndex(
      (favTeacher) => favTeacher.id === teacher.id
    );
    if (index !== -1) {
      updatedFavorites.splice(index, 1);
    } else {
      updatedFavorites.push(teacher);
    }
    setTeachersFavorites(updatedFavorites);

    const updatedFavoritesJSON = JSON.stringify(updatedFavorites);
    localStorage.setItem("teachersFavorites", updatedFavoritesJSON);
  };

  console.log(data);

  return (
    <section>
      <TeachersListDiv>
        <TeachersListUl>
          {data &&
            data.map((item) => (
              <TeachersListLi key={item.id}>
                <div>
                  <TeachersListImageDiv>
                    <TeachersListImageTeacher
                      src={item.avatar_url}
                      alt="Teacher"
                    />
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
                          <span>Lessons done: 1098</span>
                        </TeachersListStatusLi>
                        <TeachersListStatusLi>
                          <StarSVG />
                          <span>Rating: 4.8</span>
                        </TeachersListStatusLi>
                        <TeachersListStatusLi>
                          <span>Price / 1 hour:</span>
                          <span>30$</span>
                        </TeachersListStatusLi>
                      </TeachersListStatusUl>
                      <button onClick={() => handleToggleFavorite(item)}>
                        {teachersFavorites.some(
                          (favTeacher) => favTeacher.id === item.id
                        )
                          ? "видалити"
                          : "додати"}
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
            ))}
        </TeachersListUl>
        <button>Load more</button>
      </TeachersListDiv>
    </section>
  );
};

export default TeachersList;
