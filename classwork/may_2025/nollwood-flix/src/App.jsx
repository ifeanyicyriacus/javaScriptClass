import Login from "./components/auth/login/login.jsx";
import SignUp from "./components/auth/signUp/SignUp.jsx";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";

function App() {
    return (
        <>
            <Header/>
            <br/>
            <Login/>
            <br/>
            <SignUp/>
            <br/>
            <Footer/>
        </>

    )
}


export default App
