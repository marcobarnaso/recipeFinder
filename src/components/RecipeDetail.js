import React from "react";

const RecipeDetail = ({ recipe }) => {
    if(!recipe){
        return <div></div>
    }
    return (
        <div>
          {/* <img className="ui image" alt={"Joa"} src={recipe.recipe.image} /> */}
            <img className="ui medium rounded image"
              src={recipe.recipe.images.REGULAR.url}
              alt="Recipe Imgage"
            />
          <div className="ui segment">
            <div>
              <h4 className="ui header">{recipe.recipe.label}</h4>
              <p>{recipe.recipe.ingredientLines}</p>
            </div>
          </div>
        </div>
      );
};

export default RecipeDetail