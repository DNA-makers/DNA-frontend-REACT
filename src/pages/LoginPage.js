import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageComponent from "../components/ImageComponent";
import logo from "../img/logo-donker.png";
import "./LoginPage.css";

function LoginPage() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password})
            });

            if (response.ok) {
                localStorage.setItem('isLoggedIn', 'true');
                navigate('/adminpanel');
                console.log("Succesfully logged in");
            } else {
                const errorRespnse = await response.json();
                console.error("Login failed", errorRespnse.message);
                setErrorMessage(errorRespnse.message);
            }
        } catch (error) {
            console.error("Error occured during login", error);
            setErrorMessage("An error occurred during login.");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin();
    }

    return (
        <section className="form-container">
            <section className="logo">
                <ImageComponent className="logo-image" src={logo} alt={"dit is het logo"} style={{ width: '150px'}}/>
                <h3>Welkom terug admin!</h3>
            </section>
            <section>
                <form onSubmit={handleSubmit}>
                    <div className="form-field">
                        <label>Email</label>
                        <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className="form-field">
                        <label>Wachtwoord</label>
                        <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    {errorMessage && 
                        <div className="error-message">
                            {errorMessage}
                        </div>
                    }
                    <div className="form-field">
                        <button className="submit-btn" type="submit">Log in</button>
                    </div>
                </form>
            </section>
        </section>
    );
}

export  default LoginPage;