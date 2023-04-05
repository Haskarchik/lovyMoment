import React, { useState } from "react";

import EntertimentLabel from "./EntertimentLabel";
import allEntirementsStyle from "../../styles/allEntertiments.module.css";
import ProductCard from "./ProductCard";
import { db } from "../../constants/firebase";
import { onValue, ref } from "firebase/database";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Image from "../Image";

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

  const [moreCards, setMoreCard] = useState([]);

  function moreCard() {
       let card = [];
       if (moreCards.length != 10) {
        for (let i = 10; i < 20; i++) {
          if (todos.length > 0) {
              card.push(
                <NavLink key={todos[i].id + Math.random()} to={"/Page/" + todos[i].id} >
                  <div className={allEntirementsStyle.entertiment_card}>
                    <Image link={todos[i].img}></Image>
                    <div className={allEntirementsStyle.gradiant}>
                      <div className={allEntirementsStyle.more_btn}>Деталі</div>
                      <div className={allEntirementsStyle.entertiment_card_label}>
                        <p> {todos[i].name} </p>
                        <div className={allEntirementsStyle.price}>
                          {todos[i].price}
                        </div>
                      </div>
                    </div>
                  </div>
                </NavLink>
              );
            
          }
        }
       }else{

       
      for (let i = 20; i < todos.length; i++) {
        card.push(
          <NavLink key={todos[i].id + Math.random()} to={"/Page/" + todos[i].id} >
            <div className={allEntirementsStyle.entertiment_card}>
              <Image link={todos[i].img}></Image>
              <div className={allEntirementsStyle.gradiant}>
                <div className={allEntirementsStyle.more_btn}>Деталі</div>
                <div className={allEntirementsStyle.entertiment_card_label}>
                  <p> {todos[i].name} </p>
                  <div className={allEntirementsStyle.price}>
                    {todos[i].price}
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
        );
        
      }
       const button = document.getElementById("entertiment_button");
    
       button.className =
         allEntirementsStyle.entertiment_button +
         " " +
         allEntirementsStyle._disabled;
    }
      
       setMoreCard(card);
    
      
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
