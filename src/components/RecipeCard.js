import React from "react";
import { useState } from "react";
import AccordionStandard from "./Accordion";
import { Rating } from "semantic-ui-react";

const RecipeCard = (recipe) => {
  const [addFavorite, setAddFavorite] = useState(0);

  const onFavoriteClick = (e) => {
    console.log(addFavorite);
    if (addFavorite === 0) {
      setAddFavorite(1);
      console.log("added to favorites");
    } else if (addFavorite === 1) {
      setAddFavorite(0);
      console.log("removed from favorites");
    }
  };
  return (
    <>
      <div className="card">
        <div className="ui medium rounded image">
          <a className="ui blue right corner label">
            <Rating
              icon="heart"
              onRate={onFavoriteClick}
              defaultRating={addFavorite}
            />
          </a>
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
