import React from "react";
import { useProductContext } from "../../hooks/ProductContext";
import "./home.css";
import Card from "../../components/main/CardItem";

const Home = () => {
  const products = useProductContext(); 
  return (
    <section className="home">
      <div className="container">
        <div className="home_cards_container">
          {products.map((item) => (
            <Card key={item.id} items={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
