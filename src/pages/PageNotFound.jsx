import React from "react";
import NavBar from "../components/header/NavBar";
import HeaderButtons from "../components/header/HeaderButtons";
import ProductCard from "../components/allEntertimes/ProductCard";
import header from '../styles/header.module.css'
import allEntertimentsStyle from '../styles/allEntertiments.module.css'
const PageNotFound  = () => {
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
        <h2>Ви потрапили нетуди,
            Такої сторінки наразі не існує.
        </h2>
      </div>
      
      </div>
    </div>
  );
};

export default PageNotFound;
