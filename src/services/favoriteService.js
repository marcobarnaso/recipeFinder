import axios from "axios";
import { getToken } from "./authService";

const API_URL = process.env.REACT_APP_RECIPE_FINDER_URL_DEV;
const token = getToken();

export const addFavorites = async (favoriteRecipe) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/recipes/favorites/${favoriteRecipe.user}`,
      favoriteRecipe,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);
  } catch (error) {
    console.error("Error adding favorite recipe:", error);
  }
};

export const removeFavorites = async (favoriteRecipe) => {
  try {
    const response = await axios.delete(
      `${API_URL}/api/recipes/favorites/${favoriteRecipe.user}`,
      {
        headers: { Authorization: `Bearer ${token}` },
        data: favoriteRecipe,
        //if we need to send data instead of a body we use
        //the data header for DELETE
      }
    );
    console.log(response);
  } catch (error) {
    console.error("Error removing favorite recipe:", error);
  }
};

export const pullFavorites = async (favoriteRecipe) => {
  const response = await axios.get(
    `${API_URL}/api/auth/fetchFavorites/${favoriteRecipe.user}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response;
};
