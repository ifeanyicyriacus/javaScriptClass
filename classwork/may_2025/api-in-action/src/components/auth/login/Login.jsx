import React, {useState} from "react";
import CustomButton from "../../../reusable/CustomButton.jsx";
import styles from "./login.module.css";
import {Link, useNavigate} from "react-router";
import {useSignInMutation} from "../../../service/userAuthApi.jsx";


const Login = () => {
    const navigate = useNavigate();
    const loginDetails = {
        username : "",
        password : ""
    };
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setLoginData((prevState) => ({...prevState, [name] : value.trim()}));
        console.log(loginData)
    };

    const [loginData, setLoginData] = useState([loginDetails])
    const [login, {isLoading, isError}] = useSignInMutation();

    const submitHandler = async (event) => {
        event.preventDefault();
        try {
            const response = await login(loginDetails).unwrap();
            if (response.id) navigate("/movies");
            console.log(response);
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <section className={styles.container}>
                <header>Login here</header>
                <form action="" className={"formContainer"}
                      onSubmit={submitHandler}>
                    <input className={styles.formField}
                           type="text"
                           name="username"
                           id=""
                           placeholder="Email"
                           onChange={handleInputChange}/>
                    <input className={styles.formField}
                           type="password"
                           name="password"
                           id=""
                           placeholder="Password"
                           onChange={handleInputChange}/>
                    <CustomButton text="Log in"/>
                    <span>Create new account: </span><Link to="/auth/signup">Sign up</Link>
                </form>
            </section>
        </>
    );
}

export default Login;