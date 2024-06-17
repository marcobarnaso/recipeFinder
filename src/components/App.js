import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import edamam from "../services/Edamam";
import "../styles/App.css";
import Header from "./Header";
import MenuStackable from "./Menu";
import Home from "../pages/home";
import Authentication from "../pages/signIn";
import About from "../pages/about";
import SignUp from "../pages/signup";
import Favorites from "../pages/Favorites";
import AuthProvider from "../context/authContext";
import { ProtectedRoute } from "./ProtectedRoute";
import cleanRecipes from "../utils/cleanRecipes";

function App() {
  const [searchTerm, setSearchTerm] = useState("beef");
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async (term) => {
    const {
      data: { hits },
    } = await edamam.get("", {
      params: {
        q: term,
      },
    });
    const info = cleanRecipes(hits)
    setRecipes(info);
    setSearchTerm(term);
  };

  useEffect(() => {
    fetchRecipes(searchTerm);
  }, [searchTerm]);
  return (
    <AuthProvider>
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
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/favorites"
              element={
                <ProtectedRoute>
                  <Favorites recipes={recipes}/>
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
