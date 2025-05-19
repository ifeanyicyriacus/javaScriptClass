import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";

import {userAuthApiSlice} from "../service/userAuthApi.jsx";
import {movieApiSlice} from "../service/movieAPI.jsx";
import {productStoreApiSlice} from "../service/productStoreApi.jsx";
import {recipesApiSlice} from "../service/recipesApi.jsx";
// import {llamaAiApiSlice} from "../service/llamaAiApi.jsx";

export const store = configureStore({
    reducer : {
        [userAuthApiSlice.reducerPath] : userAuthApiSlice.reducer,
        [movieApiSlice.reducerPath] : movieApiSlice.reducer,
        [productStoreApiSlice.reducerPath] : productStoreApiSlice.reducer,
        [recipesApiSlice.reducerPath] : recipesApiSlice.reducer,
        // [llamaAiApiSlice.reducerPath]: llamaAiApiSlice.reducer,
    },
    middleware : (getDefaultMiddleware) => (
        getDefaultMiddleware().concat(
            userAuthApiSlice.middleware,
            movieApiSlice.middleware,
            productStoreApiSlice.middleware,
            recipesApiSlice.middleware,
            // llamaAiApiSlice.middleware,
            ))
});

setupListeners(store.dispatch);