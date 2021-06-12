import React, {useState} from 'react';
import './LoginPage.css';
import {useHistory} from "react-router-dom";
import './elements.css';
import axios from "axios";

function LoginPage(props) {
    const history = useHistory();
    const [state, setState] = useState({
        username: "",
        password: "",
    })
    const handleChange = (e) => {
        const {id, value} = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }


    const handleSubmitClick = (e) => {
        e.preventDefault();
        axios({
            method: 'get',
            url: "http://localhost:3000/posts",
            validateStatus: (status) => {
                return true;
            },
        }).catch(error => {
            console.log(error)
        }).then(response => {
            var success = false;
            for (var i = 0; i < response.data.length; i++) {
                if (response.data[i].username === state.username && response.data[i].password === state.password)
                    success = true;
            }
            if (success)
                history.push("/entry");
            else
                alert('Wrong password or No user with these information');

        })
    }

    function redirectToRegister() {
        history.push("/register");
    }

    return (
        <div className="container">
            <form className="loginForm">
                <p className="signmsg" align="center">Sign In</p>
                <div className="form-group text-center">
                    <label htmlFor="exampleInputEmail1"/> {/*boşluk hissi için gerekli*/}
                    <input type="username"
                           className="textfields"
                           id="username"
                           aria-describedby="usernameHelp"
                           placeholder="Enter your username"
                           value={state.username}
                           onChange={handleChange}
                    />
                </div>
                <div className="form-group text-lg-center">
                    <label htmlFor="exampleInputPassword1"></label>
                    <input type="password"
                           className="textfields"
                           id="password"
                           placeholder="Enter your password"
                           value={state.password}
                           onChange={handleChange}
                    />
                </div>

                <div className="form-check">
                </div>
                <button
                    type="submit"
                    className="buttons"
                    onClick={handleSubmitClick}
                >Login
                </button>

                <div id="new_register" align="center" className="newAccount">
                    <label htmlFor="newAccount" className="blackText">If you are not registered, </label>
                    <span className="newAccount" id="newAccount" onClick={() => redirectToRegister()}>Create an Account Now</span>
                </div>
            </form>
        </div>

    )
}


export default LoginPage;