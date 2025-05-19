import {Outlet} from "react-router";
import Header from "../header/Header";
import SideBar from "../sidebar/Sidebar.jsx";
import Footer from "../footer/Footer.jsx";
import style from "./recipeLayout.module.css";


const RecipeLayout = () => {
    return (
        <div className={style.layOutWrapper}>
            <Header/>
            <div className={style.sideBarOutlet}>
                <SideBar/>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}

export default RecipeLayout;
