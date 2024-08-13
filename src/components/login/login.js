import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "../../firebase/auth";
import { FaGoogle } from "react-icons/fa";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithEmailAndPassword(email, password);
        navigate("/appointment"); // Replace '/services' with the actual path to your service page
      } catch (err) {
        setIsSigningIn(false);
        setErrorMessage(err.message);
      }
    }
  };

  const onGoogleSignIn = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithGoogle();
        navigate("/appointment"); // Replace '/services' with the actual path to your service page
      } catch (err) {
        setIsSigningIn(false);
        setErrorMessage(err.message);
      }
    }
  };

  return (
    <div className="main-container">
      <main className="login-card">
        <div>
          <h1>Login</h1>
        </div>
        <form onSubmit={onSubmit} className="login-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" disabled={isSigningIn}>
            {isSigningIn ? "Logging In..." : "Login"}
          </button>
        </form>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button
          onClick={onGoogleSignIn}
          disabled={isSigningIn}
          className="google-signin-btn"
        >
          <FaGoogle className="google-icon" />
          {isSigningIn ? "Signing In..." : "Sign in with Google"}
        </button>
      </main>
    </div>
  );
};

export default Login;
