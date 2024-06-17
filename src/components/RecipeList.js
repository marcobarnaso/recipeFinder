import RecipeCard from "./RecipeCard";
import PlaceholderExampleGrid from "./Placeholder";
//import useVideos from "../hooks/useVideos";

const RecipeList = ({ recipes }) => {
  if (recipes.length===0) {
    return (
      <>
      <PlaceholderExampleGrid/>
      </>
    );
  }
  const eightRecipes = recipes.slice(0, 8);
  const renderedList = eightRecipes.map((recipe) => {
    //search(recipe.label)
    return <RecipeCard key={recipe.id} recipe={recipe} />;
  });
  return <div className="ui four stackable cards">{renderedList}</div>;
};

export default RecipeList;
