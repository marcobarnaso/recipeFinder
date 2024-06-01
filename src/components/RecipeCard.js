import React from "react";
import AccordionStandard from "./Accordion";

const RecipeCard = (recipe, onRecipeSelect) => {
  if (!recipe) {
    return <div></div>;
  }
  return (
    <>
      <div className="card">
        <div className="ui medium rounded image">
          <div className="ui blue ribbon label">
            <i className="spoon icon"></i> {recipe.recipe.recipe.label}
          </div>
          <img
            src={recipe.recipe.recipe.image}
            alt={recipe.recipe.label}
            onClick={() => onRecipeSelect(recipe)}
          />
        </div>
        <AccordionStandard ingredients={recipe} />
      </div>
    </>
  );
};

export default RecipeCard;
