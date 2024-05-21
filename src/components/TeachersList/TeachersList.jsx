import {
  TeachersListDiv,
  TeachersListLoadMore,
  TeachersListUl,
} from "./TeachersList.Styles";

import { nanoid } from "nanoid";
import TeachersItem from "../TeachersItem/TeachersItem";
import { useEffect, useState } from "react";

import BackdropActive from "../Backdrop/BackdropActive";
import AbsentTeachers from "../Modal/AbsentTeachers/AbsentTeachers";
// import {
//   getDatabase,
//   limitToFirst,
//   onValue,
//   query,
//   ref,
// } from "firebase/database";

const TeachersList = ({ dataList }) => {
  const [teachersList, setTeachersList] = useState(null);
  const [loadedItems, setLoadedItems] = useState(4);

  useEffect(() => {
    if (dataList) {
      console.log(dataList);
      setTeachersList(dataList);
    }
  }, [dataList]);

  const handleLoadMore = () => {
    setLoadedItems((prevLoadedItems) => prevLoadedItems + 4);
  };

  return (
    <>
      {!teachersList ? (
        <>
          <AbsentTeachers />
          <BackdropActive />
        </>
      ) : (
        <TeachersListDiv>
          <TeachersListUl>
            {teachersList.slice(0, loadedItems).map((item) => (
              <TeachersItem key={nanoid()} item={item} />
            ))}
          </TeachersListUl>
          {teachersList.length > loadedItems && (
            <TeachersListLoadMore onClick={handleLoadMore}>
              Load more
            </TeachersListLoadMore>
          )}
        </TeachersListDiv>
      )}
    </>
  );
};
export default TeachersList;
