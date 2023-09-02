import React from "react";
import { Link } from "react-router-dom";
import "./Footer2.css";

const Footer2 = () => {
  return (
    <main className="footer2">
      <p style={{ color: "black", fontSize: "16px" }}>
        Developed and Maintain by{" "}
        <Link
          to="https://jainvedant1121.netlify.app/"
          target="_blank"
          style={{ color: "yellow" }}
        >
          Vedant Modi
        </Link>
      </p>
      <p style={{ color: "black", fontSize: "16px" }}>
        All rights reserved. 2023-2024
      </p>
    </main>
  );
};

export default Footer2;
