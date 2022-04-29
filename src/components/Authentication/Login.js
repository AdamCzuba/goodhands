import React, { useRef, useState } from "react";
import { useAuth } from "./authcontext";
import { Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Menus from "../Home/homecontent/HomeMenu";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("Nie udało się zalogować");
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
          <h1 className="primary_title">Zaloguj się</h1>
          <div className="decoration"></div>
        </header>
        <section className="login_section">
          <div className="login_container">
            <form className="login_form" onSubmit={handleSubmit}>
              <div className="login_typer">
                {error && (
                  <Alert className="signup_alert" variant="danger">
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
              </div>
              <div className="login_buttons_container">
              <div className="main_menu_element">
                 <Link to="/signup">Załóż konto</Link>
                </div>
                <button
                  disabled={loading}
                  type="submit"
                  id="login"
                  name="login"
                  value="Zaloguj się"
                  className="main_menu_element"
                ><span>Zaloguj się</span></button>
              </div>
            </form>
          </div>
        </section>
      </section>
    </section>
  );
}
