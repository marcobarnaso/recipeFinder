const cleanRecipes = (recipes) => {
  const data = [];
  recipes.map((singleRecipe) => {
    const recipe = {
      id: singleRecipe.recipe.uri,
      title: singleRecipe.recipe.label,
      ingredients: singleRecipe.recipe.ingredientLines,
      picture: singleRecipe.recipe.image,
    };
    return data.push(recipe);
  });
  return data;
};

export default cleanRecipes;
