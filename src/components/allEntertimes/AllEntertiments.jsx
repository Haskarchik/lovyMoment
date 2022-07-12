import React, { useState } from "react";

import EntertimentLabel from "./EntertimentLabel";
import allEntirementsStyle from "../../styles/allEntertiments.module.css";
import ProductCard from "./ProductCard";
import { CATALOG } from "../../constants/Catalog.constant";
import Image from "../Image";

export default function AllEntertiments() {
  const [moreCards, setMoreCard] = useState(" ");

  function moreCard() {
    let card = [];

    CATALOG.forEach((item) => {
      card.push(
        <a key={item.id + Math.random()} href={item.id}>
          <div className={allEntirementsStyle.entertiment_card}>
            <Image link={item.img}></Image>
            <div className={allEntirementsStyle.gradiant}>
              <div className={allEntirementsStyle.more_btn}>Деталі</div>
              <div className={allEntirementsStyle.entertiment_card_label}>
                <p> {item.name} </p>
                <div className={allEntirementsStyle.price}>{item.price}</div>
              </div>
            </div>
          </div>
        </a>
      );
    });

    setMoreCard(card);

    const button = document.getElementById("entertiment_button");

    button.className =
      allEntirementsStyle.entertiment_button +
      " " +
      allEntirementsStyle._disabled;
  }

  return (
    <div id="entertiment" className={allEntirementsStyle.container}>
      <EntertimentLabel counter={CATALOG.length}></EntertimentLabel>

      <div id="entertiment-row" className={allEntirementsStyle.entertiment_row}>
        <ProductCard props={{ tag: "all", more: moreCards }} />
      </div>
      <div
        id="entertiment_button"
        className={allEntirementsStyle.entertiment_button}
      >
        <a onClick={moreCard}>Показати ще</a>
      </div>
    </div>
  );
}
