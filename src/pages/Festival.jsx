import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import NavBar from "../components/header/NavBar";
import HeaderButtons from "../components/header/HeaderButtons";
import ProductCard from "../components/allEntertimes/ProductCard";
import header from "../styles/header.module.css";
import allEntertimentsStyle from "../styles/allEntertiments.module.css";
import Briz from "./productPages/Briz";
import Minion from "./productPages/Minion";

const Festival = () => {
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
          <h2>Розваги для Фестивалю</h2>
        </div>
        <ProductCard props={{ tag: "festival" }} />
      </div>
      
    </div>
  );
};

export default Festival;
