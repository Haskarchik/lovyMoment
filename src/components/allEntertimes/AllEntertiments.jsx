import React, { useState } from "react";

import EntertimentLabel from "./EntertimentLabel";
import allEntirementsStyle from "../../styles/allEntertiments.module.css";
import ProductCard from "./ProductCard";
import { db } from "../../constants/firebase";
import { onValue, ref } from "firebase/database";
import { useEffect } from "react";

export default function AllEntertiments() {
  const [todos, setTodos] = useState([]);
  const [isInitialRender, setIsInitialRender] = useState(true);
  //read
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (isInitialRender) {
        setIsInitialRender(false);
        setTodos([]);
      }
      if (data !== null && data !== 0) {
        Object.values(data).map((todo) => {
          if (isInitialRender) {
            setIsInitialRender(false);
            setTodos((oldArray) => [...oldArray, todo]);
          }
        });
      }
    });
  });

  const [moreCards, setMoreCard] = useState(" ");

  function moreCard() {
    //   let card = [];
    //
    //   CATALOG.forEach((item) => {
    //     card.push(
    //       <a key={item.id + Math.random()} href={item.id}>
    //         <div className={allEntirementsStyle.entertiment_card}>
    //           <img src={item.img}></img>
    //           <div className={allEntirementsStyle.gradiant}>
    //             <div className={allEntirementsStyle.more_btn}>Деталі</div>
    //             <div className={allEntirementsStyle.entertiment_card_label}>
    //               <p> {item.name} </p>
    //               <div className={allEntirementsStyle.price}>{item.price}</div>
    //             </div>
    //           </div>
    //         </div>
    //       </a>
    //     );
    //   });
    //
    //   setMoreCard(card);
    //
    //   const button = document.getElementById("entertiment_button");
    //
    //   button.className =
    //     allEntirementsStyle.entertiment_button +
    //     " " +
    //     allEntirementsStyle._disabled;
  }

  return (
    <div id="entertiment" className={allEntirementsStyle.container}>
      <EntertimentLabel counter={todos.length}></EntertimentLabel>

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
