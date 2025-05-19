import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const fakeStoreApiUrl = "https://fakestoreapi.com";

export const productStoreApiSlice = createApi({
    reducerPath : "productStoreApi", baseQuery : fetchBaseQuery({
        baseUrl : `${fakeStoreApiUrl}`
    }), endpoints : (builder) => ({
        getProductById : builder.query({
            query : () => `/products/`,
        }),
        getAllProducts : builder.query({
            query : () => `/products`,
        }),
        addProduct : builder.mutation({
            query : (data) => ({
                url : "/products",
                method : "POST",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify(data)
            })
        })
    })
})

export const {
    getProductByIdQuery,
    getAllProductsQuery,
    useAddProductMutation
} = productStoreApiSlice
