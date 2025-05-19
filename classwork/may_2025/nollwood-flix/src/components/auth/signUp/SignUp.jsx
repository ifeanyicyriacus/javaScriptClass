import React, {useState} from "react";
import CustomButton from "../../../reuseable/CustomButton.jsx";
import styles from "./signUp.module.css";
import {useSignUpMutation} from "../../../service/userAuthApi.jsx";
import {Link, useNavigate} from "react-router";

const SignUp = () => {
    const navigate = useNavigate();
    const userDetail = {
        "firstName" : "",
        "lastName" : "",
        "email" : "",
        "password" : "",
    }

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setUserData((prevState) => ({...prevState, [name] : value.trim()}));
        // console.log(userData);
    }

    const [userData, setUserData] = useState([userDetail]);

    const [signUp, {isLoading, isError}] = useSignUpMutation();


    const submitHandler = async(event) => {
        event.preventDefault();
        try {
            const response = await signUp(userData).unwrap()
            if (response.id) {
                navigate("/login")
            }
            console.log(response);
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <>
            <section className={styles.container}>
                Signing Up
                <form action="" className={"formContainer"}
                onSubmit={submitHandler}>
                    <input className={styles.formField}
                           type="text"
                           name="firstName"
                           id=""
                           placeholder="First Name"
                           onChange={handleInputChange}/>
                    <input className={styles.formField}
                           type="text" name="lastName" id="" placeholder="Last Name"
                           onChange={handleInputChange}/>
                    <input className={styles.formField}
                           type="email" name="email" id="" placeholder="Email"
                           onChange={handleInputChange}/>
                    <input className={styles.formField}
                           type="password" name="password" id="" placeholder="Password"
                           onChange={handleInputChange}/>
                    <CustomButton text="Sign up"/>
                    <span>Already have an account: </span><Link to="/login">Log in</Link>
                </form>
            </section>
        </>
    );
}

export default SignUp;