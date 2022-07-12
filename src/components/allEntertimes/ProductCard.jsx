import React from "react";
import { CATALOG } from "../../constants/Catalog.constant";
import allEntirementsStyle from "../../styles/allEntertiments.module.css";
import { NavLink } from "react-router-dom";


import Image from "../Image";

export default function ProductCard(props) {
  let card = [];
  let tagName = props.props.tag;

  CATALOG.forEach((item, index) => {
    if ((item.tags.includes(tagName) || tagName === "all") && index < 16) {
      card.push(
        <NavLink  key={item.id + Math.random()} to={item.id}>
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
        </NavLink>
      );
    }
  });

  return (
    <div id="entertiment-row" className={allEntirementsStyle.entertiment_row}>
      {card}
      {props.props.more}
    </div>
  );
}
