import { getUser } from "../services/authService";

const cleanRecipes = (recipes) => {
  const data = [];
  const user = getUser();

  recipes.map((singleRecipe) => {
    const recipe = {
      id: singleRecipe.recipe.uri,
      user: user._id,
      title: singleRecipe.recipe.label,
      ingredients: singleRecipe.recipe.ingredientLines,
      picture: singleRecipe.recipe.image,
    };
    return data.push(recipe);
  });
  return data;
};

export default cleanRecipes;
