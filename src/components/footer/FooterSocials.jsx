import React from 'react'
import { SvgSelectors } from '../SvgSelectors'

export default function FooterSocials() {
  return (
    <div className="footer-socials">
    <div className="footer-socials-text footer-text">
      або пишіть нам в
    </div>
    <ul className="footer-socials-list">
      <li>
        <a href="https://wa.me/380980692622">
        <SvgSelectors id={'watsap'}/>Whatsapp
        </a>
      </li>
      <li>
        <a href="viber://add?number=380980692622">
        <SvgSelectors id={'viber'}/>Viber
        </a>
      </li>
      <li>
        <a href="https://t.me/lovymomentlviv">
        <SvgSelectors id={'telegram'}
          />Telegram
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/lovymomentlviv/">
        <SvgSelectors id={'instagram'} />
          Instagram </a>
      </li>
    </ul>
  </div>
  )
}
