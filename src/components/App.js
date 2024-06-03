import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import edamam from "../services/Edamam";
import "../styles/App.css";
import Header from "./Header";
import MenuStackable from "./Menu";
import Home from "../pages/home";
import Authentication from "../pages/authentication";
import About from "../pages/about";

function App() {
  const [searchTerm, setSearchTerm] = useState("beef");
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async (term) => {
    console.log("corrio fetch recipes");
    const {
      data: { hits },
    } = await edamam.get("", {
      params: {
        q: term,
      },
    });
    setRecipes(hits);
    setSearchTerm(term);
  };

  useEffect(() => {
    fetchRecipes(searchTerm);
  }, [searchTerm]);

  if (recipes.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="ui container">
        <Header />
        <MenuStackable />
        <Routes>
          <Route
            path="/"
            element={<Home searchTerm={fetchRecipes} recipes={recipes} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/authentication" element={<Authentication />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
