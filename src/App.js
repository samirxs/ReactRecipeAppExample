import React, { useState, useEffect } from "react";
import "./App.css";
import Recipe from './Views/Recipes';

function App() {
    const APP_ID = "01e2fe8b";
    const APP_KEY = "879dc7d0d428bdc32b3eddf539c205a5";
    
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch]   = useState("");
    const [query, setQuery]     = useState('chicken');

    useEffect(() => {
      getRecipes();
    }, [query]);

    const getRecipes = async () => {
        const response = await fetch(
            `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        const data = await response.json();
        setRecipes(data.hits);
    };

    const updateSearch = e => {
      setSearch(e.target.value);
      console.log(search);
    }

    const getSearch = e => {
      e.preventDefault();
      setQuery(search);
      setSearch('');
    }

    return (
        <div className="App">
            <h1>Recipe App</h1>
            <form onSubmit={getSearch} className="search-form">
                <input className="search-bar" type="text" value={search} onChange={updateSearch} />
                <button className="search-button" type="button">
                    Search
                </button>
            </form>
            {recipes.map( (recipe, key) => (
              <div key={key}>
                <Recipe recipe = {recipe.recipe} />
              </div>
            ))}
        </div>
    );
}

export default App;
