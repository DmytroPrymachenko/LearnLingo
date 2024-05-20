import { useEffect, useState } from "react";
import TeachersFilter from "../../components/TeachersFilter/TeachersFilter";
import TeachersList from "../../components/TeachersList/TeachersList";

import { getDatabase, ref, onValue } from "firebase/database";
import { query } from "firebase/database";
import { SectionTeachers } from "./Teachers.Styles";

const Teachers = () => {
  const [teachersData, setTeachersData] = useState(null);
  const [teachersFilter, setTeachersFilter] = useState(null);
  const [filteredList, setFilteredList] = useState(null);

  const db = getDatabase();

  useEffect(() => {
    const countRef = query(ref(db, "teachers"));
    onValue(countRef, (snapshot) => {
      const data = snapshot.val();
      setTeachersData(data);
    });
  }, [db]);

  useEffect(() => {
    if (teachersData) {
      setFilteredList(teachersFilter || teachersData);
    }
  }, [teachersFilter, teachersData]);

  return (
    <>
      <SectionTeachers>
        <TeachersFilter
          data={teachersData}
          setTeachersFilter={setTeachersFilter}
        />
        <TeachersList dataList={filteredList} />
      </SectionTeachers>
    </>
  );
};

export default Teachers;
