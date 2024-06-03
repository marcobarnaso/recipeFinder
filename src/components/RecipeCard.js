import React from "react";
import AccordionStandard from "./Accordion";

const RecipeCard = (recipe) => {
    
  if (!recipe) {
    return <div></div>;
  }
  return (
    <>
      <div className="card">
        <div className="ui medium rounded image">
          <div className="ui grey ribbon label">
            <i className="utensils icon"></i> {recipe.recipe.recipe.label}
          </div>
          <img
            src={recipe.recipe.recipe.image}
            alt={recipe.recipe.label}
          />
        </div>
        <AccordionStandard ingredients={recipe} />
      </div>
    </>
  );
};

export default RecipeCard;
