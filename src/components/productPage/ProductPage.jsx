import React from "react";
import { Link } from "react-router-dom";
import Swiper from "../swiper/Swiper";
import "../../styles/entirementsPage.css";
import { useState, useEffect } from "react";
import { db } from "../../constants/firebase";
import { onValue, ref } from "firebase/database";


export default function ProductPage(props) {
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

  let page = [];

  todos.forEach(
    ({
      name,
      albom,
      price,
      tags,
      id,
      video,
      quantityvar,
      descriptions,
      complactation,
      varning,
    }) => {
      if (id === props.id.params.id) {
        function tagsTranslate() {
          
          let tagHtml = [];
          tags.forEach((el) => {
            if (el !== undefined) {
              if (el.includes("Corporate")) {
                tagHtml.push(
                  <Link to="/Corporate" className="tag corporatePage">
                    {" "}
                    Корпоратив
                  </Link>
                );
              } else if (el.includes("Festival")) {
                tagHtml.push(
                  <Link to="/Festival" className="tag festivalPage">
                    {" "}
                    Фестиваль
                  </Link>
                );
              } else if (el.includes("Promotion")) {
                tagHtml.push(
                  <Link to="/Promotion" className="tag promotionPage">
                    {" "}
                    Промоакція
                  </Link>
                );
              } else if (el.includes("Trampoline")) {
                tagHtml.push(
                  <Link to="/Trampoline" className="tag TrampolinePage">
                    {" "}
                    Надувні гірки та батути
                  </Link>
                );
              } else if (el.includes("Child-party")) {
                tagHtml.push(
                  <Link to="/Child-party " className="tag child-partyPage">
                    {""}
                    Дитяче свято
                  </Link>
                );
              } else if (el.includes("Food")) {
                tagHtml.push(
                  <Link to="/Food " className="tag foodPage">
                    {""}
                    Кейтеринг
                  </Link>
                );
              }else if (el.includes("Carousel")) {
                tagHtml.push(
                  <Link to="/Carousel " className="tag CarouselPage">
                    {""}
                    Карусель та електро...
                  </Link>
                );
              
              }else if (el.includes("MegaGame")) {
                tagHtml.push(
                  <Link to="/MegaGame " className="tag MegaGamePage">
                    {""}
                    Мега ігри
                  </Link>
                );
              
              }
              
            
          }});
         
          return tagHtml;
          }
       
        function complact() {
          let complact = [];
          let complBlock = ` `;
          if (complactation !== undefined) {
            
          
          complactation.forEach((el) => {
            if (el !== "" && el !== undefined && el !== " ") {
              complact.push(<li>{el}</li>);

              complBlock = (
                <div className="complactation">
                  <p>Комплектація</p>
                  <ul className="complact-list">{complact}</ul>
                </div>
              );
            } else if (el == "" || el == undefined || el == " ") {
            }
          });
        }
        
          return complBlock;
        }

        function varningBlock() {
          let varningHtml = (
            <div className="important">
              <div className="important-label">ВАЖЛИВО</div>
              <div className="important-text">{varning}</div>
            </div>
          );
          if (varning == "" || varning == " " || varning == undefined) {
            varningHtml = ``;
          }

          return varningHtml;
        }
       
       
        function quantity() {
          let quantityHtnm 
          if (quantityvar == { } || quantityvar == " " || quantityvar == undefined) {
            quantityHtnm = ` `;
          }
          else{
            quantityHtnm=(
            <div className="quantity">
                <div className="quantity-card  ">
                  <div className="number orange">{quantityvar.One.for}</div>
                  <p>{'Кількість ' + quantityvar.One.name}</p>
                </div>
                <div className="quantity-card  ">
                  <div className="number purple">{quantityvar.Two.for}</div>
                  <p>{'Кількість ' + quantityvar.Two.name}</p>
                </div>
                <div className="quantity-card  ">
                  <div className="number green">{quantityvar.Three.for}</div>
                  <p>{'Кількість ' + quantityvar.Three.name}</p>
                </div>
            </div>
            );
          }
          return quantityHtnm;
        }
        page.push(
          <div>
            <Swiper props={{albom: albom,
                            video:video,
                            modal:props.id.modal }} />

            <div className="page-text-part">
              <h1 className="label">{name}</h1>
              <div className="min-order">
                Мінімальне замовлення <span> {price}</span>
              </div>

              <div id="tegs" className="tegs">
                {tagsTranslate()}
              </div>
              <div className="description">
                <div className="decription-title">Опис розваги</div>
                <div className="text">{descriptions}</div>
              </div>
              {complact()}
              {varningBlock()}
              
                {quantity()}
              
              
            </div>
          </div>
        );
      } else {
      }
    }
  );
  return <div>{page}</div>;
}
