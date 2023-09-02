import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const emailChange = (event) => {
    setEmail(event.target.value);
  };
  const passChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`http://localhost:3000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    console.log(response);

    const json = await response.json();
    console.log(json);

    if (json.success === true) {
      localStorage.setItem("token", json.authtoken);
      navigate("/");
      alert("Logged in successfully");
    } else {
      alert("Invalid details");
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-form">
        <form action="/" method="post" className="login-form-body">
          <h3
            style={{
              fontSize: "2.5rem",
              marginTop: "-1rem",
              marginBottom: "2rem",
            }}
          >
            User Login
          </h3>
          <input
            type="email"
            onChange={emailChange}
            placeholder="Email"
            className="box"
          />
          <input
            type="password"
            onChange={passChange}
            placeholder="Password"
            className="box"
          />
          <p style={{ marginTop: "1rem", fontSize: "1.3rem" }}>
            Forget password? <Link to="/login">Click here!</Link>
          </p>
          <button className="btn" onClick={handleSubmit}>
            Submit
          </button>
          <p style={{ marginTop: "1rem", fontSize: "1.3rem" }}>Or Login With</p>
          <div className="buttons">
            <i className="fa-brands fa-google"></i>
            <i className="fa-brands fa-facebook"></i>
          </div>
          <div
            style={{
              marginTop: "2rem",
              borderTop: "1px solid rgb(216, 216, 216) ",
            }}
          ></div>
          <p style={{ marginTop: "2rem", fontSize: "1.3rem" }}>
            Don't have an account? <Link to="/signup">Create one!</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
