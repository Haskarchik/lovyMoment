import React from "react";
import notification from "../../styles/notification.module.css";

export default function Notification() {
  //const copiLink = document.getElementById('header-link');
  //const notification = document.querySelector('.notification');
  //
  //
  //copiLink.addEventListener("click", function() {
  //  let link = window.location.href;
  //  notification.classList.add("notification._active");
  //  navigator.clipboard.writeText(link);
  //
  //    setTimeout(() => {
  //      notification.classList.remove('_active')
  //  }, 3000);
  //});

  return <div id="notification" className={notification.notification}>Посилання скопійовано</div>;
}
