import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <footer className="footer">
      <img className="logo" src="/logoWhite.webp" alt="logo" /> <br />
      <FontAwesomeIcon className="socialIcon" icon={faFacebook} />
      <FontAwesomeIcon className="socialIcon" icon={faInstagram} /> <br />
      <a href="/">PRODUKTY</a>
      <a href="/">O NAS</a>
      <a href="/">KONTAKT</a>
      <br />
      <p className="author">studio-web.pl</p>
    </footer>
  )
}

export default Footer
