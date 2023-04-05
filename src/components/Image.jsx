import React from "react";

export default function Image({ link }) {
  return <img src={process.env.PUBLIC_URL + link} alt="Картинка Розваги"/>;
}
