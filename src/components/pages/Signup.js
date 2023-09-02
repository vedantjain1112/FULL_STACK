import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import "./Signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const nameChange = (event) => {
    setName(event.target.value);
  };
  const emailChange = (event) => {
    setEmail(event.target.value);
  };
  const passChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(`http://localhost:3000/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const json = await response.json();
    console.log(json);

    if (json.success === true) {
      localStorage.setItem("token", json.authtoken);
      navigate("/");
      alert("Account Created Successfully");
    } else {
      alert("Invalid Details");
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-form">
        <form action="/" method="post" className="login-form-body">
          <h3
            style={{
              fontSize: "2.3rem",
              marginTop: "-1rem",
              marginBottom: "2rem",
            }}
          >
            Create your account
          </h3>
          <input
            type="text"
            onChange={nameChange}
            placeholder="Full name"
            className="box"
          />
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
          <button className="btn" onClick={handleSubmit}>
            Submit
          </button>
          <p style={{ marginTop: "1rem", fontSize: "1.3rem" }}>
            Or Signup With
          </p>
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
            Already have an account? <Link to="/login">Access it!</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Signup;
