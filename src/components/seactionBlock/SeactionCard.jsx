import React from "react";
import seactionBlockStyles from "../../styles/seactionBlock.module.css";

import { ImgSelectors } from "../ImgSelector";
import { NavLink } from "react-router-dom";
const SeactionCard = (props) => {
  return (
    <NavLink to={props.card.link}>
      <div className={props.card.tag + props.card.FilterCard}>
        <ImgSelectors id={props.card.img} />
        <div className={seactionBlockStyles.card_label}>
          <div className={seactionBlockStyles.text}>{props.card.sename}</div>
          <div className={seactionBlockStyles.card_title + props.card.titleClass}>
            {props.card.name}
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default SeactionCard;
