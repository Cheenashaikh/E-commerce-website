import React from "react";
import { useCartContext } from "../../hooks/CartContext";
import { useEffect } from "react";
import { useState } from "react";
import "./checkout.css";
import Form from "../../components/form";

const Checkout = () => {
  const { cart } = useCartContext();
  const [total, setTotal] = useState(0);
  const [showCom, setShowcom] = useState(false);
  useEffect(() => {
    setTotal(
      cart.map((item) => item.price).reduce((total, value) => total + value, 0)
    );
  }, [cart]);

  const hanndleClick = () => {
    setShowcom(true);
  };
  return (
    <section>
      <div className="container">
        {cart?.map((cartItems) => {
          return (
            <div className="checkout">
              <img src={cartItems.url} />
              <h5>
                <span> {cartItems.name}</span>
                <span> {cartItems.quantity}</span>
                <span>Rs {cartItems.price}</span>
              </h5>
            </div>
          );
        })}
        <h3>Total {total}</h3>
        <button className="button" onClick={hanndleClick}> proceed</button>
        {showCom && <Form total={total} />}
      </div>
    </section>
  );
};

export default Checkout;
