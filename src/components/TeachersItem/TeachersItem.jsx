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
  TeachersitemLTitleDiv,
} from "../TeachersList/TeachersList.Styles";
import TeachersListImageActive from "../../images/svg/TeachersListImageActive";
import LessonsOnlineSVG from "../../images/svg/LessonsOnlineSVG";
import StarSVG from "../../images/svg/StarSVG";
import HeartLikeActive from "../../images/svg/HeartLikeActive";
import { useEffect, useState } from "react";
import DetailedInformation from "../Modal/DetailedInformation/DetailedInformation";

import { useSelector } from "react-redux";
import { selectUser } from "../../store/selected";

import ModalTrialLesson from "../Modal/ModalTrialLesson/ModalTrialLesson";
import Backdrop from "../Backdrop/Backdrop";
import ModalLogin from "../Modal/ModalAuth/ModalLogin";
import ModalRegister from "../Modal/ModalAuth/ModalRegister";
import AuthorizationMessage from "../Modal/AuthorizationMessage/AuthorizationMessage";
import BackdropActive from "../Backdrop/BackdropActive";
const favArray = JSON.parse(localStorage.getItem("favorites")) ?? [];

const TeachersItem = ({ item }) => {
  const [heart, setHeart] = useState(false);
  const [detailedInformationItem, setDetailedInformationItem] = useState(null);
  const [showModal, setshowModal] = useState(null);
  const user = useSelector(selectUser);
  const [isUserActive, setIsUserActive] = useState(false);
  const [trialLessonModal, setTrialLessonModal] = useState(false);
  const [isAuthorizationMessage, setIsAuthorizationMessage] = useState(false);
  const [isModalLogin, setIsModalLogin] = useState(false);
  const [isModalRegister, setIsModalRegister] = useState(false);
  const openModalLogin = () => {
    setIsModalLogin(true);
    setIsAuthorizationMessage(false);
  };
  const openModalRegister = () => {
    setIsModalRegister(true);
    setIsAuthorizationMessage(false);
  };
  const handleTrialLesson = () => {
    setTrialLessonModal(true);
    setshowModal(false);
  };

  const handleShowModalItem = () => {
    if (user) {
      setDetailedInformationItem(item);
      setshowModal(true);
    } else {
      setIsUserActive(true);
    }
  };

  const closeModal = () => {
    setshowModal(false);
    setTrialLessonModal(false);
    setIsUserActive(false);
    setIsAuthorizationMessage(false);
    setIsModalRegister(false);
    setIsModalLogin(false);
  };
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  const needAuth = () => {
    setIsAuthorizationMessage(true);
  };
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
  }

  const checked = JSON.parse(localStorage.getItem("favorites"))?.includes(
    item.id
  )
    ? true
    : null;
  return (
    <>
      {isModalLogin && (
        <>
          <ModalLogin closeModal={closeModal} />
          <Backdrop closeModal={closeModal} />
        </>
      )}
      {isModalRegister && (
        <>
          <ModalRegister closeModal={closeModal} />
          <Backdrop closeModal={closeModal} />
        </>
      )}
      {isAuthorizationMessage && (
        <>
          <AuthorizationMessage
            openModalLogin={openModalLogin}
            item={detailedInformationItem}
            openModalRegister={openModalRegister}
            closeModal={closeModal}
          />
          <Backdrop closeModal={closeModal} />
        </>
      )}
      {trialLessonModal && (
        <>
          <ModalTrialLesson
            item={detailedInformationItem}
            closeModal={closeModal}
          />
          <BackdropActive closeModal={closeModal} />
        </>
      )}
      <>
        {isUserActive && (
          <>
            <AuthorizationMessage closeModal={closeModal} />
            <Backdrop closeModal={closeModal} />
          </>
        )}
      </>
      <TeachersListLi>
        <div>
          <TeachersListImageDiv>
            <TeachersListImageTeacher src={item.avatar_url} alt="Teacher" />
            <TeachersListImageActive />
          </TeachersListImageDiv>
        </div>
        <TeachersItemContent>
          <TeachersitemLTitleDiv>
            <TeachersListStatusDiv>
              <TeachersItemTitleDiv>
                <TeachersItemParameters>Languages</TeachersItemParameters>
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
                  onClick={user ? () => handleToggleFavorite(item) : needAuth}
                >
                  {checked ? <HeartLikeActive /> : <HeartLike />}
                </ButtonTeachersFavorite>
              </TeachersListStatusDivInternal>
            </TeachersListStatusDiv>
            <TeachersItemNameSpan>
              {item.name} {item.surname}
            </TeachersItemNameSpan>
          </TeachersitemLTitleDiv>
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
            <>
              <TeachersItemReadMore onClick={handleShowModalItem}>
                Read more
              </TeachersItemReadMore>

              {showModal && (
                <>
                  <DetailedInformation
                    item={detailedInformationItem}
                    checked={checked}
                    handleToggleFavorite={handleToggleFavorite}
                    handleTrialLesson={handleTrialLesson}
                    trialLesson={trialLessonModal}
                    closeModal={closeModal}
                  />
                  <BackdropActive closeModal={closeModal} />
                </>
              )}
            </>
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
