import React from "react";
import { Link, useNavigate } from "react-router-dom";
import HamburgerMenu from "./Hamburger";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <header className="header">
        <HamburgerMenu />
        <Link to="/" className="logo" style={{ letterSpacing: "-1px" }}>
          <span>Gururaj</span>Spares
        </Link>
        <nav className="navbar">
          <Link to="/" style={{ fontSize: "1.6rem" }}>
            Home
          </Link>
          <Link to="/services" style={{ fontSize: "1.6rem" }}>
            Services
          </Link>
          <Link to="/about" style={{ fontSize: "1.6rem" }}>
            About
          </Link>
          <Link to="/contact" style={{ fontSize: "1.6rem" }}>
            Contact Us
          </Link>
        </nav>

        {!localStorage.getItem("token") ? (
          <Link to="/login">
            <button className="btn">
              <i
                className="fa-solid fa-user"
                style={{ marginRight: "1rem" }}
              ></i>
              Login
            </button>
          </Link>
        ) : (
          <div style={{ display: "flex", gap: "1rem" }}>
            <button className="btn" onClick={handleLogout}>
              <i
                className="fa-solid fa-user"
                style={{ marginRight: "1rem" }}
              ></i>
              Logout
            </button>

            <Link to="/mycart">
              <button
                className="btn"
                style={{
                  background: "white",
                  color: "red",
                  border: ".3px solid red",
                }}
              >
                <i
                  className="fa-solid fa-cart-shopping"
                  style={{ marginRight: "1rem" }}
                ></i>
                My Cart
              </button>
            </Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
