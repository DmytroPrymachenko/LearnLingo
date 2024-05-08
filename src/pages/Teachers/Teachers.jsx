import { useEffect, useState } from "react";
import TeachersFilter from "../../components/TeachersFilter/TeachersFilter";
import TeachersList from "../../components/TeachersList/TeachersList";

import { getDatabase, ref, onValue } from "firebase/database";
import { query } from "firebase/database";

const Teachers = () => {
  const [teachersData, setTeachersData] = useState(null);
  const [teachersFilter, setTeachersFilter] = useState(null);
  const [filteredList, setFilteredList] = useState(null);

  console.log(teachersFilter);
  const db = getDatabase();

  console.log(db);
  useEffect(() => {
    const countRef = query(ref(db, "teachers"));
    onValue(countRef, (snapshot) => {
      const data = snapshot.val();
      setTeachersData(data);
    });
  }, [db]);
  // console.log(teachersData);

  useEffect(() => {
    if (teachersFilter === null) {
      setFilteredList(teachersData);
    } else {
      setFilteredList(teachersFilter);
    }
  }, [teachersFilter, teachersData]);

  return (
    <section>
      <TeachersFilter
        data={teachersData}
        setTeachersFilter={setTeachersFilter}
      />
      <TeachersList data={filteredList} />
    </section>
  );
};

export default Teachers;
