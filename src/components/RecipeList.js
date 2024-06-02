import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
//import useVideos from "../hooks/useVideos";

const RecipeList = ({ recipes, onRecipeSelect }) => {
  console.log(recipes.length == 0);
  if (recipes.length === 0) {
    return (
<div className="ui warning message">
  <div className="header">
    No recipes found.
  </div>
  Please try again.
</div>
    );
  }
  const fiveRecipes = recipes.slice(0, 4);
  const renderedList = fiveRecipes.map((recipe) => {
    //search(recipe.label)
    return (
      <RecipeCard
        key={recipe.recipe.uri}
        onRecipeSelect={onRecipeSelect}
        recipe={recipe}
      />
    );
  });
  return <div className="ui four stackable cards">{renderedList}</div>;
};

export default RecipeList;
