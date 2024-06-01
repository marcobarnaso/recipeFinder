import { useState, useEffect } from "react";
import edamam from "../services/Edamam";
import "../styles/App.css";
import Header from "./Header";
import SearchBar from "./SearchBar";
import RecipeList from "./RecipeList";
import youtube from "../services/Youtube";

console.log(process.env);

function App() {
  const [searchTerm, setSearchTerm] = useState("beef");
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const fetchRecipes = async (term) => {
    const {
      data: { hits },
    } = await edamam.get("", {
      params: {
        q: term,
      },
    });
    setSelectedRecipe(hits[0]);
    setRecipes(hits);
    setSearchTerm(term);
  };

  // const fetchvideos = async (videoTerm) => {
  //   const {
  //     data: {videos},
  //   } = await youtube.get("/search", {
  //     params: {
  //       q: videoTerm
  //     }
  //   })
  // }

  useEffect(() => {
    fetchRecipes(searchTerm);
  }, [searchTerm]);

  return (
    <div>
      <div className="ui container">
        <Header />
        <SearchBar searchTerm={fetchRecipes} />
        <div className="ui segment">
          <RecipeList recipes={recipes} onRecipeSelect={setSelectedRecipe} />
        </div>
      </div>
    </div>
  );
}

export default App;
