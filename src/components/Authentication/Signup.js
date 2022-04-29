import React, { useRef, useState } from "react";
import { useAuth } from "./authcontext";
import { Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Menus from "../Home/homecontent/HomeMenu";

export default function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };


    async function handleSubmit(e) {
        e.preventDefault();

        if (!validateEmail(emailRef.current.value))
         {
            return setError("Podany adres email jest nieprawidłowy");
        }

        if (passwordRef.current.value.length < 6) {
            return setError("Hasło musi mieć conajmniej 6 znaków");
        }

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Hasła nie są takie same");
        }



        try {
            setError("");
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            navigate("/");
        } catch {
            setError("Nie udało się utworzyć konta");
        }
        setLoading(false);
    }

    return (
        <section className="page_container">
            <div className="auth_menu_container">
                <Menus></Menus>
            </div>

            <section className="signInForm">
                <header className="header_login">
                    <h1 className="primary_title">Załóż konto</h1>
                    <div className="decoration"></div>
                </header>
                <section className="login_section">
                    <div className="login_container">
                        <form noValidate className="login_form" onSubmit={handleSubmit}>
                            <div className="login_typer">
                                {error && (
                                    <Alert variant="danger">
                                        {error}
                                    </Alert>
                                )}
                                <label htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    ref={emailRef}
                                    required
                                />
                                <label htmlFor="password">Hasło</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    ref={passwordRef}
                                    required
                                />
                                <label htmlFor="password-confirm">Powtórz hasło</label>
                                <input
                                    type="password"
                                    id="password-confirm"
                                    name="password-confirm"
                                    ref={passwordConfirmRef}
                                    required
                                />
                            </div>
                            <div className="login_buttons_container">
                                <div className="main_menu_element">
                                    <Link to="/login">Zaloguj się</Link>
                                </div>
                                <button
                                    disabled={loading}
                                    type="submit"
                                    id="login"
                                    name="login"
                                    value="Zaloguj się"
                                    className="main_menu_element"
                                ><span>Zarejestruj się</span></button>
                            </div>
                        </form>
                    </div>
                </section>
            </section>
        </section>
    );
}
