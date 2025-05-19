import {createBrowserRouter} from "react-router";
import Layout from "../components/layout/Layout.jsx";

import NowPlaying from "../components/movies/NowPlaying.jsx";

import Login from "../components/auth/login/Login.jsx";
import SignUp from "../components/auth/signUp/SignUp.jsx";


const router = createBrowserRouter([
    {
        path : "/movies",
        element : <Layout/>,
        children : [
            {
                path : "",
                element : <NowPlaying/>,
            }
        ]
    }, {
        path : "/auth",
        element : <Layout/>,
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
        element : <Layout/>,
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
        element : <Layout/>,
        children : [
            {
                path : "",
                element : <Receipes/>
            },{
                path: "/:id",
                element : <Receipe/>
            },{
                path:"/search",
                element : <Receipes/>
            }
        ]
    }
]);

export default router;

///movies/:id