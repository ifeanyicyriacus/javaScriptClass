import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


const url = "localhost:8080";
export const userAuthApiSlice = createApi({
    reducerPath : "userAuth",
    baseQuery : fetchBaseQuery({baseUrl : `${url}`}),
    endpoints : (builder) => ({
        signUp : builder.mutation({
            query : (data) => ({
                url : "/signUp",
                method : "POST",
                headers : { "Content-Type": "application/json"},
                body : JSON.stringify(data),
            })
        })
    })
})