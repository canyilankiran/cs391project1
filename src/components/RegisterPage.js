import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import './elements.css';
import './LoginPage.css';
import axios from 'axios';
import {findRenderedDOMComponentWithClass} from "react-dom/test-utils";
// import {API_BASE_URL} from './jsonApi.js';

function RegisterPage() {
    const history = useHistory();
    const [user, setUser] = useState({
        username: "",
        password: "",
        email: "",
        name: "",
        surname: "",
        sNumber: "",
    })

    const handleChange = (e) => {
        const {id, value} = e.target
        setUser(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    function redirectBackToLogin() {
        history.push("/login");
    }
    function handleRegister() {
        const data = {
            "username:": user.username,
            "password": user.password,
            "email": user.email,
            "name": user.name,
            "surname": user.surname,
            "sNumber": user.sNumber,}

        axios.post("http://localhost:3000/posts", data, undefined).then(function (response) {
            alert(response)
            if(response.data.code === 200){

            }else if (response.data.code === 201) {
                alert("Created")
            }else{
                alert("NON")
            }
        }).catch(function (error){
            alert(error)
        });
        redirectBackToLogin()
    }
        return(
                <div className="container">
                    <form className="loginForm">
                        <p className="signmsg" align="center">Register</p>
                        <div className="form-group text-center">
                            <label htmlFor="exampleInputUsername"/> {/*boşluk hissi için gerekli*/}
                            <input type="username"
                                   className="textfields"
                                   id="username"
                                   aria-describedby="usernameHelp"
                                   placeholder="Enter your username"
                                   value={user.username}
                                   onChange={handleChange}
                            />
                        </div>
                        <div className="form-group text-lg-center">
                            <label htmlFor="exampleInputPassword"/>
                            <input type="password"
                                   className="textfields"
                                   id="password"
                                   placeholder="Enter your password"
                                value={user.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group text-lg-center">
                            <label htmlFor="exampleInputEmail"/>
                            <input type="email"
                                   className="textfields"
                                   aria-describedby="emailHelp"
                                   id="email"
                                   placeholder="Enter your email"
                                value={user.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group text-lg-center">
                            <label htmlFor="exampleInputName"/>
                            <input type="name"
                                   className="textfields"
                                   id="name"
                                   placeholder="Enter your name"
                                value={user.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group text-lg-center">
                            <label htmlFor="exampleInputPassword1"/>
                            <input type="surname"
                                   className="textfields"
                                   id="surname"
                                   placeholder="Enter your surname"
                                value={user.surname}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group text-lg-center">
                            <label htmlFor="exampleInputPassword1"/>
                            <input type="sNumber"
                                   className="textfields"
                                   id="sNumber"
                                   placeholder="Enter your student number"
                                value={user.sNumber}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-check">
                        </div>
                        <button
                            type="submit"
                            className="buttons"
                            onClick={handleRegister}
                        >Register
                        </button>

                        <div id="new_register" align="center" className="newAccount">
                            <label htmlFor="newAccount" className="blackText">If you are already registered, </label>
                            <span className="newAccount" id="newAccount" onClick={() => redirectBackToLogin()}>Log in</span>

                        </div>
                    </form>
                    {/*<div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none'}}*/}
                    {/*     role="alert">*/}
                    {/*    {state.successMessage}*/}
                    {/*</div>*/}
                    {/*<div className="registerMessage">*/}
                    {/*    <span>Dont have an account? </span>*/}
                    {/*    <span className="loginText" onClick={() => redirectToRegister()}>Register</span>*/}
                    {/*</div>*/}
                </div>

            )
}

export default RegisterPage;