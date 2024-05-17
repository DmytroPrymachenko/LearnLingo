import { useEffect, useState } from "react";

import TeachersFilter from "../../components/TeachersFilter/TeachersFilter";
import TeachersList from "../../components/TeachersList/TeachersList";

import { getDatabase, ref, onValue } from "firebase/database";
import { query } from "firebase/database";
import { SectionTeachers } from "../Teachers/Teachers.Styles";

const Favorites = () => {
  const [teachersData, setTeachersData] = useState(null);
  const [favoritesData, setFavoritesData] = useState(null);
  const [teachersFilter, setTeachersFilter] = useState(null);
  const [filteredList, setFilteredList] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const getFavoritesFromLocalStorage = () => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  };

  useEffect(() => {
    getFavoritesFromLocalStorage();
  }, []);
  console.log(favorites);

  const db = getDatabase();

  useEffect(() => {
    const countRef = query(ref(db, "teachers"));
    onValue(countRef, (snapshot) => {
      const data = snapshot.val();
      setFavoritesData(data);
    });
  }, [db]);

  useEffect(() => {
    if (teachersData) {
      console.log("teachersData", teachersData);
      console.log("teachersFilter", teachersFilter);
      // setFilteredList(teachersFilter);
      setFilteredList(teachersFilter || teachersData);
    }
  }, [teachersFilter, teachersData]);

  useEffect(() => {
    if (favorites.length > 0 && favoritesData) {
      const filteredTeachers = favorites
        .map((favoriteId) =>
          favoritesData.find((teacher) => teacher && teacher.id === favoriteId)
        )
        .filter((teacher) => teacher !== undefined);
      setTeachersData(filteredTeachers);
    }
  }, [favoritesData, favorites]);
  // Фільтрація
  useEffect(() => {
    getFavoritesFromLocalStorage();
  }, []);

  return (
    <SectionTeachers>
      <TeachersFilter
        data={teachersData}
        setTeachersFilter={setTeachersFilter}
      />
      <TeachersList dataList={filteredList} />
    </SectionTeachers>
  );
};

export default Favorites;
