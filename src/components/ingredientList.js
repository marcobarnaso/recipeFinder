import React from "react";

const IngredientList = ({ ingredients }) => {
  const renderedIngredients = ingredients.ingredients.map((ingredient) => {
    return <div className="item" key={ingredient}>{ingredient}</div>;
  });
  return <div className="ui bulleted list">{renderedIngredients}</div>;
};

export default IngredientList