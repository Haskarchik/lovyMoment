import React from "react";
import HeaderButtons from "../../components/header/HeaderButtons";
import NavBar from "../../components/header/NavBar";
import ProductPage from "../../components/productPage/ProductPage";
import header from "../../styles/header.module.css";
import "../../styles/entirementsPage.css";

export default function Briz() {
  return (
    <div>
      <div className={header.header}>
        <div className={header.container}>
          <NavBar></NavBar>
          <HeaderButtons></HeaderButtons>
        </div>
      </div>
      <main className="main">
        <div className="container">
          <div className="contant">
            <ProductPage />
          </div>
        </div>
      </main>
    </div>
  );
}
