import React from "react";

const IngredientList = ({ ingredients }) => {
  const renderedIngredients = ingredients.recipe.recipe.ingredientLines.map((ingredient) => {
    return <div className="item" key={ingredient}>{ingredient}</div>;
  });
  return <div className="ui bulleted list">{renderedIngredients}</div>;
};

export default IngredientList