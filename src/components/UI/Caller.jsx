import React from "react";
import callerStyle from "../../styles/caller.module.css";
import { SvgSelectors } from "../SvgSelectors";

export default function Caller() {
  return (
    <a className={callerStyle.mobile_call} href="tel:+38 (098) 069 26 22">
      <SvgSelectors id="heandset" />
    </a>
  );
}
