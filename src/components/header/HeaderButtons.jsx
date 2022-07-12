import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { SvgSelectors } from "../SvgSelectors";
import logo from "../../img/logo1.png";
import header from "../../styles/header.module.css";
import notificationStyle from "../../styles/notification.module.css";

import copy from "copy-to-clipboard";

export default function HeaderButtons() {
  function copyLink() {
    const notification = document.getElementById("notification");
    
      copy(window.location.href);

      notification.className += " " + notificationStyle.notification_active;
    
    setTimeout(() => {
      notification.className -= notificationStyle.notification_active;
      notification.className = notificationStyle.notification;
    }, 3000);
  }

  return (
    <div className={header.header_buttons}>
      <div className={header.header_back}>
        <Link to="/">
          <SvgSelectors id={"arrow"}></SvgSelectors>
        </Link>
      </div>
      <Link to="/">
        <img className={header.buttons_img} src={logo} alt="" />
      </Link>
      <NavLink
        to=""
        id="header-link"
        className={header.header_link}
        onClick={copyLink}
      >
        <SvgSelectors id={"link"}></SvgSelectors>
      </NavLink>
    </div>
  );
}
