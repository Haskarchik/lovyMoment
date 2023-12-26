import React from "react";
import callerStyle from "../../styles/caller.module.css";
import { SvgSelectors } from "../SvgSelectors";

export default function Caller() {
  return (
    <a className={callerStyle.mobile_call} href="tel:+38 (097) 937 16 91">
      <SvgSelectors id="heandset" />
    </a>
  );
}
