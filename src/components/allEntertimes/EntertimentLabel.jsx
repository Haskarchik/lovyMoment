import React from "react";
import allEntirementsStyle from '../../styles/allEntertiments.module.css'

export default function EntertimentLabel(props) {

  return (
    <div>
      <div className={allEntirementsStyle.entertiment_label}>
        <h2>
          Усі <span>розваги</span>
        </h2>
        <div className={allEntirementsStyle.counter}>{props.counter}</div>
      </div>
    </div>
  );
}
