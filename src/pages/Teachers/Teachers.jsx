import { useEffect, useState } from "react";
import TeachersFilter from "../../components/TeachersFilter/TeachersFilter";
import TeachersList from "../../components/TeachersList/TeachersList";

import { getDatabase, ref, onValue } from "firebase/database";
import { query } from "firebase/database";

const Teachers = () => {
  const [teachersData, setTeachersData] = useState(null);

  const db = getDatabase();

  console.log(db);
  useEffect(() => {
    const countRef = query(ref(db, "teachers"));
    onValue(countRef, (snapshot) => {
      const data = snapshot.val();
      setTeachersData(data);
    });
  }, [db]);
  console.log(teachersData);
  return (
    <section>
      <TeachersFilter />
      <TeachersList data={teachersData} />
    </section>
  );
};

export default Teachers;
