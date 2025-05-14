import Axios from "axios";
import "./App.css";
import { useState } from "react";
import RecipeTile from "./RecipeTile";

function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [healthLabel, sethealthLabel] = useState("");
  const [dietLabel, setdietLabel] = useState("");

  const YOUR_API_KEY = "695ee778bb504682ad6cca1c910be62b";

  const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&diet=${dietLabel}&intolerances=${healthLabel}&number=20&addRecipeInformation=true&apiKey=${YOUR_API_KEY}`;

  async function getRecipes() {
    try {
      const result = await Axios.get(url);
      setrecipes(result.data.results || []);
    } catch (error) {
      console.error("Failed to fetch recipes", error);
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  return (
    <div className="App">
      <h1 className="text-3xl font-extrabold text-white bg-black bg-opacity-60 border border-white rounded-lg p-2 md:text-5xl lg:text-6xl w-full text-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-sky-400">
          RELICIOUS
        </span>{" "}
        RECIPES
      </h1>
      <h3 className="text-lg font-semibold font-mono text-orange-500 bg-black bg-opacity-60 border border-orange-700 rounded-lg p-2 inline-block text-center mt-4">
        Find Recipes and Meals for your Ingredients
      </h3>

      <form className="recipie-search flex" onSubmit={onSubmit}>
        <div className="relative w-11/12 mx-auto min-w-sm max-w-2xl flex flex-col md:flex-row gap-x-5 mb-12">
          <label className="mt-6 bg-white w-8/12 md:w-12/12 flex flex-col md:flex-row items-center justify-center border py-2 pl-0 pr-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300">
            <input
              id="search-bar"
              placeholder="Search Recipes Here"
              name="q"
              style={{
                color: "#000",
                backgroundColor: "#fff",
                padding: "8px 12px",
                borderRadius: "4px",
              }}
              className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
              required
              value={query}
              onChange={(e) => setquery(e.target.value)}
            />
            <button
              type="submit"
              className="submit w-full md:w-auto px-6 py-3 bg-black border-black text-white rounded-xl transition-all"
            >
              <span className="text-sm font-semibold">Search</span>
            </button>
          </label>

          <select
            value={healthLabel}
            onChange={(e) => sethealthLabel(e.target.value)}
            className="mt-6 bg-white w-8/12 md:w-6/12 max-w-lg border py-4 px-2 rounded-2xl shadow-2xl"
          >
            <option value="">Choose Health Intolerance</option>
            <option value="dairy">Dairy-free</option>
            <option value="egg">Egg-free</option>
            <option value="gluten">Gluten-free</option>
            <option value="peanut">Peanut-free</option>
            <option value="seafood">Seafood-free</option>
            <option value="sesame">Sesame-free</option>
            <option value="shellfish">Shellfish-free</option>
            <option value="soy">Soy-free</option>
            <option value="sulfite">Sulfite-free</option>
            <option value="tree nut">Tree Nut-free</option>
            <option value="wheat">Wheat-free</option>
          </select>

          <select
            value={dietLabel}
            onChange={(e) => setdietLabel(e.target.value)}
            className="mt-6 bg-white w-8/12 md:w-6/12 max-w-lg border py-4 px-2 rounded-2xl shadow-2xl"
          >
            <option value="">Choose Diet Label</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="pescetarian">Pescetarian</option>
            <option value="ketogenic">Ketogenic</option>
            <option value="paleo">Paleo</option>
            <option value="gluten free">Gluten Free</option>
            <option value="dairy free">Dairy Free</option>
            <option value="whole30">Whole30</option>
          </select>
        </div>
      </form>

      <div className="flex flex-wrap w-11/12 m-auto gap-8 justify-center">
        {recipes.map((recipe) => (
          <RecipeTile recipe={recipe} key={recipe.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
