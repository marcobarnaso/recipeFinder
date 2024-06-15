import React, { useEffect, useState, useContext } from "react";
import AccordionStandard from "./Accordion";
import { Rating } from "semantic-ui-react";
import {
  addFavorites,
  pullFavorites,
  removeFavorites,
} from "../services/favoriteService";
import { getUser } from "../services/authService";
import { AuthContext } from "../context/authContext";
///!!!!!IMPORTANT had to import the context instead of
///!!!!!running isAuthenticated, putting the context
/// useEffect makes sure the authentication is ready
/// using the function made the app pull the recipes
/// from the backen without actually being authenticated
/// making the global context is the way to go from now on

const RecipeCard = (recipe) => {
  const [addFavorite, setAddFavorite] = useState(0);
  const { isAuthenticated } = useContext(AuthContext);
  const user = getUser();

  const favoriteRecipe = {
    id: recipe.recipe.recipe.uri,
    user: user._id,
    title: recipe.recipe.recipe.label,
    ingredients: recipe.recipe.recipe.ingredientLines,
    picture: recipe.recipe.recipe.image,
  };
  const onFavoriteClick = async () => {
    //I forgot to use async/await here when updating the backend
    if (addFavorite === 0) {
      setAddFavorite(1);
      await addFavorites(favoriteRecipe);
    } else if (addFavorite === 1) {
      setAddFavorite(0);
      await removeFavorites(favoriteRecipe);
    }
  };
  const fetchFavorites = async () => {
    const favorites = await pullFavorites(favoriteRecipe);

    const findFavoriteById = (favorites, id) => {
      return favorites.data.favorites.find((favorite) => favorite.id === id);
    };
    const recipeFound = findFavoriteById(favorites, favoriteRecipe.id);
    if (recipeFound) {
      setAddFavorite(1);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchFavorites();
    }
  }, [isAuthenticated]); //-> use effect only runs once after load
  // I originally forgot to add the empty array

  return (
    <>
      <div className="card">
        <div className="ui medium rounded image">
          {isAuthenticated && (
            <a className="ui blue right corner label">
              <Rating
                icon="heart"
                onRate={onFavoriteClick}
                rating={addFavorite}
                //I was using default rating instead of rating
                //thats why the hearts were not lighting up
                //even if I changed their state
                maxRating={1}
                //this max rating should be there to ensure
                //only one heaart rating
              />
            </a>
          )}
          <div className="ui grey ribbon label">
            <i className="utensils icon"></i> {recipe.recipe.recipe.label}
          </div>
          <img src={recipe.recipe.recipe.image} alt={recipe.recipe.label} />
        </div>
        <AccordionStandard ingredients={recipe} />
      </div>
    </>
  );
};

export default RecipeCard;
