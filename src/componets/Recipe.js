import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import axios from "axios";

const Recipe = () => {
  //useEffectHook

  useEffect(() => {
    Recipeinfo();
  }, []);

  //useState hook
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  //handlChage Fucntions

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const ID = "";
  const KEY = "";
  const URL = `https://api.edamam.com/search?q=${query} &app_id=${ID}&app_key=${KEY}`;
  //Api call functions
  const Recipeinfo = async () => {
    const resp = await axios(URL);
    console.log(resp.data.hits);
    setRecipes(resp.data.hits);
  };

  return (
    <div className="Recipe_wraper">
      <div className="input_wraper">
        <form onSubmit={getSearch}>
          <input type="text" value={search} onChange={updateSearch} />
          <button type="submit">Search</button>
        </form>
      </div>

      {recipes.map((item) => {
        return (
          <div key={item.recipe.label}>
            <Layout
              label={item.recipe.label}
              calories={item.recipe.calories}
              image={item.recipe.image}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Recipe;
