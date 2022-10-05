import {React, useState} from "react";
import HeaderButtons from "../../components/header/HeaderButtons";
import NavBar from "../../components/header/NavBar";
import ProductPage from "../../components/productPage/ProductPage";
import "../../styles/entirementsPage.css";
import header from "../../styles/header.module.css";
import { useParams } from "react-router-dom";
import Modal from "../../components/UI/Modal";

export default function Page() {
const [modalActive, setModalActive] = useState();
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
            <ProductPage id = {{params:useParams(), modal:setModalActive}} />
          </div>
        </div>
      </main>
      <Modal active={modalActive} setActive={setModalActive} params={useParams()} ></Modal>
    </div>
  );
}
