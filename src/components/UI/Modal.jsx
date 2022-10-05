import React from "react";
import modal from '../../styles/modal.module.css'
import Swiper from "../swiper/Swiper";
import { useState, useEffect } from "react";
import { db } from "../../constants/firebase";
import { onValue, ref } from "firebase/database";
import '../../styles/entirementsPage.css'

export default function Modal({ active, setActive, params }) {
  const [todos, setTodos] = useState([]);
  const [isInitialRender, setIsInitialRender] = useState(true);

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
  console.log();
  let swiperHtml
  todos.forEach(
    ({
      albom,
      id,
      video,
    }) => {
  
      
   
      if (id == params.id) {
        
        
        swiperHtml =( <Swiper props={{ albom: albom, SwiperClass:modal.Modal,isActive: active }} />)
      
      
      }
    }
    
  );
 
  return (
    <div
      className={active ? modal.modal_active : modal.modal}
      onClick={() => setActive(false)}
    >
      <div className= {modal.modal_content} onClick={(e) => e.stopPropagation()}>

      {swiperHtml}
      </div>
      
    </div>
  );
}
