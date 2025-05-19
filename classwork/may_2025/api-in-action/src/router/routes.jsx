import {createBrowserRouter} from "react-router";
import MovieLayout from "../components/layout/MovieLayout.jsx";
import AuthLayout from "../components/layout/AuthLayout.jsx";
import ProductLayout from "../components/layout/ProductLayout.jsx";
import RecipeLayout from "../components/layout/RecipeLayout.jsx";

import NowPlaying from "../components/movies/NowPlaying.jsx";

import Login from "../components/auth/login/Login.jsx";
import SignUp from "../components/auth/signUp/SignUp.jsx";

import Product from "../components/product/Product.jsx"
import Products from "../components/product/Products.jsx"
import CreateProduct from "../components/product/CreateProduct.jsx"

import Recipes from "../components/Receipe/Receipes.jsx"
import Recipe from "../components/Receipe/Receipe.jsx"

const router = createBrowserRouter([
    {
        path : "/movies",
        element : <MovieLayout/>,
        children : [
            {
                path : "",
                element : <NowPlaying/>,
            }
        ]
    }, {
        path : "/auth",
        element : <AuthLayout/>,
        children : [
            {
                path : "/login",
                element : <Login/>,
            }, {
                path : "/signup",
                element : <SignUp/>,
            }
        ]
    }, {
        path : "/products",
        element : <ProductLayout/>,
        children : [
            {
                path : "/:id",
                element : <Product/>
            }, {
                path : "",
                element : <Products/>
            }, {
                path : "/add",
                element : <CreateProduct/>
            }
        ]
    }, {
        path : "/recipes",
        element : <RecipeLayout/>,
        children : [
            {
                path : "",
                element : <Recipes/>
            }, {
                path : "/:id",
                element : <Recipe/>
            }, {
                path : "/search",
                element : <Recipes/>
            }
        ]
    }
]);

export default router;