import React from "react";
import Child from "../img/Child-party-card.png";
import birthday from "../img/Birthday-card.png";
import promotion from "../img/Promotion-card.png";
import festival from "../img/Festival-card.png";
import corporate from "../img/Corporate-card.png";
import trampoline from "../img/trampline-card.png";
import game from "../img/game-card.svg";
import food from "../img/popcorn-card.svg";
import carousel from "../img/carousel-card.svg";

export const ImgSelectors = ({ id }) => {
  switch (id) {
    case "child":
      return <img src={Child} />;
    case "birthday":
      return <img src={birthday} />;
    case "promotion":
      return <img src={promotion} />;
    case "festival":
      return <img src={festival} />;
    case "corporate":
      return <img src={corporate} />;
    case "trampoline":
      return <img src={trampoline} />;
    case "game":
      return <img src={game} />;
    case "food":
      return <img src={food} />;
    case "carousel":
      return <img src={carousel} />;

    default:
      return <svg></svg>;
  }
};
