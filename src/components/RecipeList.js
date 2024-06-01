import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = ({recipes, onRecipeSelect}) => {
    if(!recipes){
        return <div></div>
    }
    const fiveRecipes = recipes.slice(0,4)
    const renderedList = fiveRecipes.map((recipe)=>{
        return <RecipeCard  key={recipe.recipe.uri} onRecipeSelect={onRecipeSelect} recipe={recipe}/>
    })
    return (

    <div className="ui four stackable cards">{renderedList}</div>

    )
}

export default RecipeList