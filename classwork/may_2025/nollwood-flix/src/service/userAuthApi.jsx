import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


// const url = "localhost:8080";
const url = "http://127.0.0.1:5050/api/v1";
export const userAuthApiSlice = createApi({
    reducerPath : "userAuth",
    baseQuery : fetchBaseQuery({
        baseUrl : `${url}`}),
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

export const {useSignUpMutation} = userAuthApiSlice;