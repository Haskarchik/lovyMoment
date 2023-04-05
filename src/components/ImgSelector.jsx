import React from "react";
import Child from "../img/Child-party-card.png";
import promotion from "../img/Promotion-card.png";
import festival from "../img/Festival-card.png";
import corporate from "../img/Corporate-card.png";
import trampoline from "../img/trampline-card.png";
import game from "../img/game-card.png";
import food from "../img/Food-card.png";
import carousel from "../img/carousel-card.png";

export const ImgSelectors = ({ id }) => {
  switch (id) {
    case "child":
      return <img src={Child} alt="Картинка" />;
    case "promotion":
      return <img src={promotion} alt="Картинка" />;
    case "festival":
      return <img src={festival} alt="Картинка"/>;
    case "corporate":
      return <img src={corporate} alt="Картинка"/>;
    case "trampoline":
      return <img src={trampoline} alt="Картинка"/>;
    case "game":
      return <img src={game} alt="Картинка"/>;
    case "food":
      return <img src={food} alt="Картинка"/>;
    case "carousel":
      return <img src={carousel} alt="Картинка"/>;

    default:
      return <svg></svg>;
  }
};
