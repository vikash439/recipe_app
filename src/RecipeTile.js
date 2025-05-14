import React from "react";
import { FaUtensils, FaMapMarkerAlt, FaConciergeBell } from "react-icons/fa"; // Import FontAwesome icons

function capitalize(str) {
  return str ? str[0].toUpperCase() + str.slice(1) : "N/A";
}

function RecipeTile({ recipe }) {
  return (
    <div className="flex items-baseline">
      <div className="max-w-xs bg-white border-2 border-gray-200 rounded-2xl shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:border-orange-600 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-orange-600">
        <img
          className="rounded-t-2xl m-auto rounded-2xl w-full"
          src={recipe.image}
          alt={recipe.title}
        />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            {recipe.title}
          </h5>

          <div className="flex flex-col items-center justify-center">
            <p className="font-normal text-gray-700 dark:text-gray-400 text-center mb-2">
              <span className="flex items-center mb-1">
                <FaUtensils className="mr-2 text-orange-500" /> Dish Type:{" "}
                {capitalize(recipe.dishTypes?.[0])}
              </span>
              <span className="flex items-center mb-1">
                <FaMapMarkerAlt className="mr-2 text-orange-500" /> Cuisine:{" "}
                {capitalize(recipe.cuisines?.[0])}
              </span>
              <span className="flex items-center mb-1">
                <FaConciergeBell className="mr-2 text-orange-500" /> Diet:{" "}
                {capitalize(recipe.diets?.[0]) || "N/A"}
              </span>
              <span className="flex items-center">
                ⏱️ Ready in: {recipe.readyInMinutes} min
              </span>
            </p>
          </div>

          <a
            href={recipe.sourceUrl}
            className="font-mono inline-flex relative items-center px-3 py-2 text-[18px] md:font-sm font-semibold text-center text-black bg-orange-400 rounded-lg shadow-sm transition-colors duration-300 ease-in-out hover:bg-orange-500 hover:shadow-md focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-400 dark:hover:bg-orange-500 dark:focus:ring-orange-600"
            rel="noreferrer"
            target="_blank"
          >
            Get Recipe
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default RecipeTile;
