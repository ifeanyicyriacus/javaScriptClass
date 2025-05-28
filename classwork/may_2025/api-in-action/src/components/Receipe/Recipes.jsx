import React from 'react';
import { useGetAllRecipesQuery } from "../../service/recipesApi.jsx";
import Recipe from "../../reusable/Recipe.jsx";

const Recipes = () => {
    const data = useGetAllRecipesQuery();
    console.log(data);
    return (
        <div className="recipes">
            <Recipe data={data}/>
        </div>
    )
}

export default Recipes;