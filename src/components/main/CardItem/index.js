import React from "react";
import "./card-item.css";
import { useCartContext } from "../../../hooks/CartContext";

const Card = (props) => {
  const { price, url, name } = props.items;
  const { addToCart } = useCartContext();
  return (
    <div className="card">
      <img src={url} alt="card" />
      <div className="card_content">Rs:{price}/=</div>
      <h3>{name}</h3>
      <button className="cart_button" onClick={() => addToCart(props.items)}>
        Add To Cart
      </button>
    </div>
  );
};

export default Card;
