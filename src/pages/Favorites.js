import React, { useEffect, useState } from "react";
import RecipeList from "../components/RecipeList";
import { pullFavorites } from "../services/favoriteService";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";

const Favorites = () => {
  const [favoritesArray, setFavoritesArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isAuthenticated, user, token } = useContext(AuthContext);

  const fetchFavorites = async () => {
    const favorites = await pullFavorites(user, token);
    setFavoritesArray(favorites.data.favorites);
  };

  console.log(favoritesArray[0])

  useEffect(() => {
    if (isAuthenticated) {
      fetchFavorites();
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [isAuthenticated]);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <>
      <div className="ui segment">
        <RecipeList recipes={favoritesArray} />
      </div>
    </>
  );
};

export default Favorites;
