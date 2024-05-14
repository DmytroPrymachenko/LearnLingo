import { useEffect, useState } from "react";

const Favorites = () => {
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

  return <div>Favorites</div>;
};

export default Favorites;
