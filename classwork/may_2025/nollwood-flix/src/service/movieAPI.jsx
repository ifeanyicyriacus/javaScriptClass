import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const movieApiKey = import.meta.env.VITE_MOVIE_API_KEY;
const movieApiUrl = import.meta.env.VITE_MOVIE_API_URL;


export const movieApi = createApi({
    reducerPath : "movieApi",
    baseQuery : fetchBaseQuery({
        baseUrl : `${movieApiUrl}`
    }),
    endpoints:(builder) => ({
        getNowPlayingMovies:builder.query({
            query: () => "/now_playing?api_key=" + movieApiKey
        })
    })

})
export const {useGetNowPlayingMoviesQuery} = movieApi

/*
*

const url = "http://127.0.0.1:5050/api/v1";
export const userAuthApiSlice = createApi({
    reducerPath : "userAuth",
    baseQuery : fetchBaseQuery({baseUrl : `${url}`}),
    endpoints : (builder) => ({
        signUp : builder.mutation({
            query : (data) => ({
                url : "/signUp",
                method : "POST",
                // mode : "cors",
                headers : { "Content-Type": "application/json"},
                body : JSON.stringify(data),
            })
        })
    })
})
*
* */
