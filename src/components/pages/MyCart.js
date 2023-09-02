import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import "./MyCart.css";
import CartCard from "../CartCard";

const MyCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const token = localStorage.getItem("token");

  const fetchCartItems = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/items/allCartItems",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": token,
          },
        }
      );

      const data = await response.json();
      setCartItems(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <>
      <Navbar />
      <div className="mycart-container">
        <h1>
          <span style={{ color: "black" }}>
            {" "}
            <i
              className="fa-solid fa-cart-shopping"
              style={{ marginRight: "1rem" }}
            ></i>{" "}
            My
          </span>{" "}
          Cart
        </h1>
        <div className="card-container">
          {cartItems.map((product) => (
            <CartCard
              ItemKey={product._id}
              title={product.title}
              image={product.image}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MyCart;
