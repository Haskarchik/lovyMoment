import React from 'react'

export default function FooterInfo() {
  return (
    <div className="footer-info">
    <div className="footer-infp-label">
      Телефонуйте <span> нам </span>
    </div>
    <a href="tel:+38 (098) 069 26 22" className="phone-number">
      +38 (098) 069 26 22</a
    >
    <div className="footer-info-text footer-text">
      Ми приймаємо дзвінки кожного дня <br />
      з 10:00–21:00
    </div>
  </div>
  )
}
