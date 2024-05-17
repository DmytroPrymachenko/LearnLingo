import {
  TeachersListDiv,
  TeachersListLoadMore,
  TeachersListUl,
} from "./TeachersList.Styles";

import { nanoid } from "nanoid";
import TeachersItem from "../TeachersItem/TeachersItem";
import { useEffect, useState } from "react";
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
      <TeachersListDiv>
        <TeachersListUl>
          {teachersList &&
            teachersList
              .slice(0, loadedItems)
              .map((item) => <TeachersItem key={nanoid()} item={item} />)}
        </TeachersListUl>
        {teachersList && teachersList.length > loadedItems && (
          <TeachersListLoadMore onClick={handleLoadMore}>
            Load more
          </TeachersListLoadMore>
        )}
      </TeachersListDiv>
    </>
  );
};

export default TeachersList;
