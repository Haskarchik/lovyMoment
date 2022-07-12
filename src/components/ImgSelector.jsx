import React from "react";
import Child from "../img/Child-party-card.png";
import birthday from "../img/Birthday-card.png";
import promotion from "../img/Promotion-card.png";
import festival from "../img/Festival-card.png";
import corporate from "../img/Corporate-card.png";
import city from "../img/City-day-card.png";

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
    case "city":
      return <img src={city} />;

    default:
      return <svg></svg>;
  }
};
