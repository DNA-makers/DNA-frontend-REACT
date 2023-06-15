import ImageComponent from "../components/ImageComponent";
import logo from "../img/logo-donker.png";
import "./LoginPage.css";

function LoginPage() {
    return (
        <section className="form-container">
            <section className="logo">
                <ImageComponent className="logo-image" src={logo} alt={"dit is het logo"} style={{ width: '150px'}}/>
                <h3>Welkom terug admin!</h3>
            </section>
            <section>
                <form>
                    <div className="form-field">
                        <label>Email</label>
                        <input type="email" id="email" />
                    </div>
                    <div className="form-field">
                        <label>Wachtwoord</label>
                        <input type="password" id="password" />
                    </div>
                    <div className="form-field">
                        <button className="submit-btn" type="submit">Log in</button>
                    </div>
                </form>
            </section>
        </section>
    );
}

export  default LoginPage;