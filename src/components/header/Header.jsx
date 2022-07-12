import React from "react";
import HeaderLabel from "./HeaderLabel";
import NavBar from "./NavBar";
import header from "../../styles/header.module.css";

export default function Header() {
  return (
    <div className={header.header}>
      <div className={header.container}>
        <NavBar display={header.nav_line_display}></NavBar>
        <HeaderLabel></HeaderLabel>
      </div>
    </div>
  );
}
