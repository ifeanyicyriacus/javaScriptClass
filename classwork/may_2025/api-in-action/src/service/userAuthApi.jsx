import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


const url = "https://dummyjson.com";
export const userAuthApiSlice = createApi({
    reducerPath : "userAuthApi" +
        "",
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


// fetch('https://dummyjson.com/users/add', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//         firstName: 'Muhammad',
//         lastName: 'Ovi',
//         age: 250,
//         /* other user data */
//     })
// })
//     .then(res => res.json())
//     .then(console.log);


// fetch('https://dummyjson.com/user/login', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//
//         username: 'emilys',
//         password: 'emilyspass',
//         expiresInMins: 30, // optional, defaults to 60
//     }),
// })
//     .then(res => res.json())
//     .then(console.log);