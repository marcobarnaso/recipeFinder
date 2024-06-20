import axios from "axios";

const API_URL = process.env.REACT_APP_RECIPE_FINDER_URL_DEV;

export const addFavorites = async (user, favoriteRecipe, token) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/recipes/favorites/${user}`,
      favoriteRecipe,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log({message: "Added to Favorites", status:response.status});
  } catch (error) {
    console.error({ error: "Error adding favorite recipe:" }, error);
  }
};

export const removeFavorites = async (user, favoriteRecipe, token) => {
  try {
    const response = await axios.delete(
      `${API_URL}/api/recipes/favorites/${user}`,
      {
        headers: { Authorization: `Bearer ${token}` },
        data: favoriteRecipe,
        //if we need to send data instead of a body we use
        //the data header for DELETE
      }
    );
    console.log({message: "Removed from Favorites", status:response.status});
  } catch (error) {
    console.error({ error: "Error removing favorite recipe:" }, error);
  }
};

export const pullFavorites = async (user, token) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/auth/fetchFavorites/${user}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error({ error: "An error ocurred" });
  }
};
