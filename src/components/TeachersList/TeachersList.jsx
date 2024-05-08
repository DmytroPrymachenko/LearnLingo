import { TeachersListDiv, TeachersListUl } from "./TeachersList.Styles";

import { nanoid } from "nanoid";
import TeachersItem from "../TeachersItem/TeachersItem";
import { useEffect, useState } from "react";
import {
  getDatabase,
  limitToFirst,
  onValue,
  query,
  ref,
} from "firebase/database";

const TeachersList = ({ dataList }) => {
  // console.log(data);
  const [teachersList, setTeachersList] = useState(null);
  const [loadedItems, setLoadedItems] = useState(4);

  const db = getDatabase();

  useEffect(() => {
    const countRef = query(ref(db, "teachers"), limitToFirst(4)); // Отримуємо перші 4 об'єкти
    onValue(countRef, (snapshot) => {
      const data = snapshot.val();
      setTeachersList(data);
    });
  }, [db]);
  console.log(teachersList);

  useEffect(() => {
    if (dataList) {
      setTeachersList(dataList);
    }
  }, [dataList]);
  console.log(teachersList);

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
        <button onClick={handleLoadMore}>Load more</button>
      </TeachersListDiv>
    </>
  );
};

export default TeachersList;
