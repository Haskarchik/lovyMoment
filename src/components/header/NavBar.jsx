import React from "react";
import { SvgSelectors } from "../SvgSelectors";
import logo from "../../img/logo1.png";
import { Link } from "react-router-dom";
import header from "../../styles/header.module.css";

const NavBar = (props) => {
  return (
    <div className={header.nav_line + " " + props.display}>
      <Link to="/">
        <img src={logo} alt="Lovy Moment" className={header.logo} />
      </Link>
      <div className={header.header_contacts}>
        <ul className={header.socials}>
          <li key="watsap">
            <a href=" https://wa.me/380979371691">
              <SvgSelectors className={header.social_icon} id="watsap" />
            </a>
          </li>
          <li key="viber">
            <a href="viber://add?number=380979371691">
              <SvgSelectors className={header.social_icon} id="viber" />
            </a>
          </li>
          <li key="telegram">
            <a href="https://t.me/pavluyk">
              <SvgSelectors className={header.social_icon} id="telegram" />
            </a>
          </li>
          <li key="instagram">
            <a href="https://www.instagram.com/lovymomentlviv/">
              <SvgSelectors className={header.social_icon} id="instagram" />
            </a>
          </li>
        </ul>
        <div className={header.tel_number}>
          <SvgSelectors className={header.social_icon} id="heandset" />
          <a href="tel:+38 (097) 937 16 91">+38 (097) 937 16 91</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
