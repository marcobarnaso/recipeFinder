import React from "react";
import Searchbar from "../components/SearchBar";
import RecipeList from "../components/RecipeList";

const Home = ({searchTerm, recipes}) => {
  return (
    <>
      <Searchbar searchTerm={searchTerm} />
      <div className="ui segment">
        <RecipeList recipes={recipes}/>
      </div>
    </>
  );
};

export default Home;
