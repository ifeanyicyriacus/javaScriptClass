import {Outlet} from "react-router";
import Header from "../header/Header.jsx";
import Sidebar from "../sidebar/Sidebar.jsx";
import Footer from "../footer/Footer.jsx";
import styles from "./layout.module.css";

const Layout = () => {
    return (
        <div className={styles.layOutMainWrapper}>
            <Header />
            <div className={styles.sideBarOutlet}>
                <Sidebar />
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout;