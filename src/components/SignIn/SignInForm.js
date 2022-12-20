import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
// import './styles.css'

const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [invalid, setInvalid] = useState('');
    const navigate = useNavigate();


    async function fetchData() {
        await axios.post('http://localhost:5000/login', {email: email, password: password})
          .then(function (response) {
            console.log("THIS IS MY RESPONSE: ", response.data);
            if (response.data.status_code === 200) {
                console.log("Should be in here")
                navigate('/browse')
            } else {
                //SHOULD POP UP ERROR OR INVALID
                setInvalid("You have invalid credentials")
                console.log("wrong creds")
            }
          })
          .catch(function (error) {
            console.log(error.message);
          });
    }




    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)    }

    const handleSubmit = (event) => {
        console.log("HI")
        fetchData();
        event.preventDefault();
    }


    return (
        <div className="wrapper">
            <div className="header-z"> NETFLIX</div>

            <div className="main-content">
                <h1> Sign in </h1>
                <form onSubmit={handleSubmit}>

                    <div className="inputs">
                        <label>
                            <input className="inputText" type="text" name="email" placeholder="Email" onChange={handleEmailChange}/>
                        </label>
                    </div>

                    <div className="inputs">
                        <label>
                            <input className="inputText" type="password" name="password" placeholder="Password" onChange={handlePasswordChange}/>
                        </label>
                    </div>
                    
                    <button className="submit-button" type="submit" value="Submit"> Sign in </button>
                </form>

                <div className="under-submit">
                    <div>
                        <label>
                            <input type="checkbox" />
                            Remember me
                        </label>
                    </div>
                    <div>
                        <a href="url">Need help?</a>
                    </div>
                </div>
                <div className="sign-up">
                    New to Netflix? <a href="/signup" id="sign-up"> Sign up now</a>.
                </div>
            </div>

            {/* <div className="bottom">
                <div>
                    Questions? Call 1-111-111-1111
                </div>
                <div className="bottom-list">
                    <ul>
                        <li>FAQ</li>
                        <li>Help Center</li>
                        <li>Terms of use</li>
                        <li>Privacy</li>
                        <li>Cookie Preference</li>
                        <li>Corporate Information</li>
                        <li>Do Not Sell Or Share My Personal Information</li>
                    </ul>
                </div> */}
            {/* </div> */}
        </div>
    )
}

export default SignInForm;