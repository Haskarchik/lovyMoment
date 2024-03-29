import React from "react";
import allEntirementsStyle from "../../styles/allEntertiments.module.css";
import { db } from "../../constants/firebase";
import { onValue, ref } from "firebase/database";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Image from "../Image";

export default function ProductCard(props) {
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

  let card = [];
  let tagName = props.props.tag;

  for (let i = 0; i < todos.length; i++) {
  if ( todos[i].tags.includes(tagName)) {
      card.push(
        <NavLink key={todos[i].id + Math.random()} to={"/Page/" + todos[i].id} >
          <div id={todos[i].id} className={allEntirementsStyle.entertiment_card}>
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
  for (let i = 0; i < 10; i++) {
    if (todos.length > 0) {
      if (tagName === "all") {
        card.push(
          <NavLink key={todos[i].id + Math.random()} to={"/Page/" + todos[i].id} >
            <div id={todos[i].id} className={allEntirementsStyle.entertiment_card}>
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
  }

  return (
    <div id="entertiment-row" className={allEntirementsStyle.entertiment_row}>
      {card}
      {props.props.more}
    </div>
  );
}
