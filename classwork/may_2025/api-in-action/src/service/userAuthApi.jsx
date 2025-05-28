import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


const url = "https://dummyjson.com";
export const userAuthApiSlice = createApi({
    reducerPath : "userAuthApi",
    baseQuery : fetchBaseQuery({
        baseUrl : `${url}`
    }),
    endpoints : (builder) => ({
        signUp : builder.mutation({
            query : (data) => ({
                url : "/users/add",
                method : "POST",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify(data),
            })
        }),
        signIn : builder.mutation({
            query : (data) => ({
                url : "/user/login",
                method : "POST",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify(data),
            })
        })

    })
})

export const {useSignUpMutation, useSignInMutation} = userAuthApiSlice;
