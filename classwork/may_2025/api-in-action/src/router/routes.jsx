import {createBrowserRouter} from "react-router";
import MovieLayout from "../components/layout/MovieLayout.jsx";
import AuthLayout from "../components/layout/AuthLayout.jsx";
import ProductLayout from "../components/layout/ProductLayout.jsx";
import RecipeLayout from "../components/layout/RecipeLayout.jsx";

import NowPlaying from "../components/movies/NowPlaying.jsx";

import Login from "../components/auth/login/Login.jsx";
import SignUp from "../components/auth/signUp/SignUp.jsx";

import Product from "../reusable/Product.jsx"
import Products from "../components/product/Products.jsx"
import CreateProduct from "../components/product/CreateProduct.jsx"

import Recipes from "../components/Receipe/Recipes.jsx"
import Recipe from "../reusable/Recipe.jsx"

const router = createBrowserRouter([
    {
        path : "/movies",
        element : <MovieLayout/>,
        children : [
            {
                path : "/movies",
                element : <NowPlaying/>,
            }
        ]
    }, {
        path : "/auth",
        element : <AuthLayout/>,
        children : [
            {
                path : "/auth/login",
                element : <Login/>,
            }, {
                path : "/auth/signup",
                element : <SignUp/>,
            }
        ]
    }, {
        path : "/products",
        element : <ProductLayout/>,
        children : [
            {
                path : "/products/:id",
                element : <Product/>
            }, {
                path : "/products",
                element : <Products/>
            }, {
                path : "/products/add",
                element : <CreateProduct/>
            }
        ]
    }, {
        path : "/recipes",
        element : <RecipeLayout/>,
        children : [
            {
                path : "/recipes",
                element : <Recipes/>
            }, {
                path : "/recipes/:id",
                element : <Recipe/>
            }, {
                path : "/recipes/search",
                element : <Recipes/>
            }
        ]
    }
]);

export default router;