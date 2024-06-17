import React, { useEffect, useState } from "react";
import RecipeList from "../components/RecipeList";
import { pullFavorites } from "../services/favoriteService";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";
import { getUser } from "../services/authService";

const Favorites = () => {
  // const [favoritesArray, setFavoritesArray] = useState([])

  // const { isAuthenticated } = useContext(AuthContext);
  // const user = getUser();

  // const fetchFavorites = async () => {

  //   const favorites = await pullFavorites(user);
  //   setFavoritesArray(favorites.data.favorites);
  //   console.log("FA",favoritesArray)
  // };

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     fetchFavorites();
  //   }
  // }, [isAuthenticated]);

  return (
    <>
      {/* <div className="ui segment">
        <RecipeList recipes={favoritesArray} />
      </div> */}
    </>
  );
};

export default Favorites;
