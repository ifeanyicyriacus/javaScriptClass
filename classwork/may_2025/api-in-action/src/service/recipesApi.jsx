import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const url = "https://dummyjson.com";
export const recipesApiSlice = createApi({
    reducerPath : "recipesApi", baseQuery : fetchBaseQuery({
        baseUrl : `${url}`
    }), endpoints : (builder) => ({
        getRecipesById : builder.query({
            query : () => `/recipes/`,
        }),
        getAllRecipes : builder.query({
            query : () => `/recipes`,
        }),
        findRecipesByName : builder.query({
            query : () => "/search?q=",
        }),
    })
})

export const {
    useGetRecipesByIdQuery,
    useGetAllRecipesQuery,
    useFindRecipesByNameQuery
} = recipesApiSlice


//fetch('https://dummyjson.com/recipes')
// .then(res => res.json())
// .then(console.log);

//fetch('https://dummyjson.com/recipes/1')
// .then(res => res.json())
// .then(console.log);

//Search recipes
// fetch('https://dummyjson.com/recipes/search?q=Margherita')
// .then(res => res.json())
// .then(console.log);