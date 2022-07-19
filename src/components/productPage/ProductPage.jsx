import React from "react";
import { CATALOG } from "../../constants/Catalog.constant";
import { Link } from "react-router-dom";
import Swiper from "../swiper/Swiper";
import "../../styles/entirementsPage.css";

const pageName = window.location.pathname.slice(1);
export default function ProductPage() {
  let page = [];

  CATALOG.forEach(
    ({ name,albom, img, price, tags, id, descriptions, complactation, varning }) => {
      if (id === pageName) {
        function tagsTranslate() {
          let tagHtml = [];
          tags.forEach((el) => {
            if (el !== undefined) {
              if (el.includes("corporate")) {
                tagHtml.push(
                  <Link to=" " className="tag corporatePage">
                    {" "}
                    Корпоратив
                  </Link>
                );
              } else if (el.includes("festival")) {
                tagHtml.push(
                  <Link to=" " className="tag festivalPage">
                    {" "}
                    Фестиваль
                  </Link>
                );
              } else if (el.includes("promotion")) {
                tagHtml.push(
                  <Link to=" " className="tag promotionPage">
                    {" "}
                    Промоакція
                  </Link>
                );
              } else if (el.includes("city-day")) {
                tagHtml.push(
                  <Link to=" " className="tag city-dayPage">
                    {" "}
                    День міста
                  </Link>
                );
              } else if (el.includes("child-party")) {
                tagHtml.push(
                  <Link to=" " className="tag child-partyPage">
                    {" "}
                    Дитяче свято
                  </Link>
                );
              }
            }
          });
          return tagHtml;
        }

        function complact() {
          let complact = [];
          let complBlock = ` `;

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
        page.push(
          <div>
            <Swiper props={albom} />

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
              <div className="quantity">
                <div className="quantity-card players ">
                  <div className="number player">2</div>
                  <p>Кількість гравців</p>
                </div>
                <div className="quantity-card trampoline ">
                  <div className="number jump">4</div>
                  <p>Кількість батутів</p>
                </div>
              </div>
            </div>
          </div>
        );
      } else {
      }
    }
  );
  return <div>{page}</div>;
}
