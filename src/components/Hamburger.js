import React, { useState } from "react";
import "./Hamburger.css";
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hamburger-menu">
      <button className="hamburger-button" onClick={() => setIsOpen(!isOpen)}>
        <i class="fa-solid fa-bars"></i>
      </button>
      <ul className={isOpen ? "menu open" : "menu"}>
        <li>
          <i class="fa-solid fa-house"></i>{" "}
          <Link to="/" style={{ color: "red" }}>
            Home
          </Link>
        </li>
        <li>
          <i class="fas fa-cog"></i>{" "}
          <Link to="/services" style={{ color: "red" }}>
            Services
          </Link>
        </li>
        <li>
          <i class="fa-regular fa-star"></i>{" "}
          <Link to="/about" style={{ color: "red" }}>
            About
          </Link>
        </li>
        <li>
          <i class="fa-solid fa-address-book"></i>{" "}
          <Link to="/contact" style={{ color: "red" }}>
            Contacts
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
