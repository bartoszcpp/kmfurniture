import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import scrollTo from "gatsby-plugin-smoothscroll"

const Footer = () => {
  return (
    <footer className="footer">
      <img className="logo" src="/logoWhite.webp" alt="logo" /> <br />
      <FontAwesomeIcon className="socialIcon" icon={faFacebook} />
      <FontAwesomeIcon className="socialIcon" icon={faInstagram} /> <br />
      <a href="javascript:void(0)" onClick={() => scrollTo("#product")}>
        PRODUKTY
      </a>
      <a href="javascript:void(0)">O NAS</a>
      <a href="javascript:void(0)" onClick={() => scrollTo("#contact")}>
        KONTAKT
      </a>
      <br />
      <p className="author">studio-web.pl</p>
    </footer>
  )
}

export default Footer
