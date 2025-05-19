import React from "react";
import CustomButton from "../../../reuseable/CustomButton.jsx";
import styles from "./login.module.css";
import {Link} from "react-router";

const Login = () => {
    const handleChange = (event) => {
        const {name, value} = event.target;
        setLoginData((prevState) => ({...prevState, [name] : value.trim()}));
        console.log(loginData)
    }

    const loginDetails = {email : "", password : ""};
    const [loginData, setLoginData] = React.useState({loginDetails})

    return (
        <>
            <section className={styles.container}>
                <header>Login here</header>
                <form action="">
                    <input type="email" name="email" id="" placeholder="Email"
                           onChange={handleChange}/>
                    <input type="password" name="password" id="" placeholder="Password"
                           onChange={handleChange}/>
                    <CustomButton text="Log in"/>
                    <span>Create new account: </span><Link to="/signup">Sign up</Link>
                </form>
            </section>
        </>
    )
}

export default Login;

