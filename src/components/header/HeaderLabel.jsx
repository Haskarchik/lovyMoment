import React from "react";
import header from "../../styles/header.module.css";

const HeaderLabel = () => {
  return (
    <div>
      <div key='header_title' className={header.header_title}>
        <h1>Розваги для свята</h1>
      </div>
      <div key='header_button' className={header.header_button}>
        <a key='scroll_to' className={header.scroll_to} href="#entertiment">
          Список розваг
        </a>
      </div>
    </div>
  );
};

export default HeaderLabel;
