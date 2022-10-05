import React from "react";
import NavBar from "../components/header/NavBar";
import HeaderButtons from "../components/header/HeaderButtons";
import ProductCard from "../components/allEntertimes/ProductCard";
import header from '../styles/header.module.css'
import allEntertimentsStyle from '../styles/allEntertiments.module.css'
const Trampoline = () => {
  return (
    <div>
      <div className={header.header}>
        <div className={header.container}>
          <NavBar></NavBar>
          <HeaderButtons></HeaderButtons>
        </div>
      </div>

      <div className={allEntertimentsStyle.container}>
      <div className={allEntertimentsStyle.entertiment_label}>
        <h2>Надувні Гірки та Батути</h2>
      </div>
      <ProductCard props={{tag:"Trampoline"}} />
    </div>
    </div>
  );
};

export default Trampoline;
