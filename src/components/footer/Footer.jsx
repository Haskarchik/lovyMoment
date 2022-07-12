import React from "react";
import FooterInfo from "./FooterInfo";
import FooterSocials from "./FooterSocials";
import '../../styles/footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-row">
          <FooterInfo />
          <FooterSocials />
        </div>
      </div>
    </div>
  );
}
