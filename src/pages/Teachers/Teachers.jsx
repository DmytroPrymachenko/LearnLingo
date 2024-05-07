import TeachersFilter from "../../components/TeachersFilter/TeachersFilter";
import TeachersList from "../../components/TeachersList/TeachersList";

import {
  getDatabase,
  ref,
  onValue,
  orderByChild,
  orderByValue,
  orderByKey,
} from "firebase/database";
import { query, limitToFirst } from "firebase/database";

const Teachers = () => {
  const db = getDatabase();
  console.log(db);
  const countRef = query(ref(db, "teachers"));
  onValue(countRef, (snapshot) => {
    const data = snapshot.val();
    console.log("====================================");
    console.log(data);
    console.log("====================================");
    // setDataFromDB(data);
  });

  return (
    <section>
      <TeachersFilter />
      <TeachersList />
    </section>
  );
};

export default Teachers;
