import React from "react";
import allEntirementsStyle from "../../styles/allEntertiments.module.css";
import { db } from "../../constants/firebase";
import { onValue, ref } from "firebase/database";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Image from "../Image";


export default function ProductCard(props) {


 
  

  const [todos, setTodos] = useState([]);
  //read
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setTodos([]);
      const data = snapshot.val();

      if (data !== null) {
        Object.values(data).map((todo) => {
          setTodos((oldArray) => [...oldArray, todo]);
  

        });
      }
    });
  }, []);

  let card = [];
  let tagName = props.props.tag;
  console.log(todos);

 setTimeout(() => {
 
   for (let i = 0; i < 1; i++) {
     if (todos[i].tags.includes(tagName) || tagName === "all") {
       card.push(
         <NavLink key={todos[i].id + Math.random()} to={todos[i].id}>
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
 }, 10);
  // CATALOG.forEach((todos[i], index) => {
  //
  // });
  return (
    <div id="entertiment-row" className={allEntirementsStyle.entertiment_row}>
      {todos.map((todo) =>(
        <>
        <h1>{todo.todo} </h1>
        </>
      ))}
      {card}
      {props.props.more}
    </div>
  );
}
