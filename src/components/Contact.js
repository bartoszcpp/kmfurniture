import React from "react"
import { StaticQuery, graphql } from "gatsby"
import ContactForm from "./ContactForm"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"

const Contact = ({ data }) => {
  const adres = data.wordpressPage.acf
  return (
    <>
      <div className="contactContainer">
        <div className="container">
          <div className="row">
            <div className="col-6 formularz">
              <ContactForm />
            </div>
            <div className="col-6 daneKontaktowe">
              <h3>KM Furniture</h3>
              <p className="font-weight-bold">Adres</p>
              <p>{adres.ulica}</p>
              <p>{adres.kod_pocztowy_i_miejscowosc}</p>
              <br />
              <p className="font-weight-bold">E-mail</p>
              <p>{adres.e_mail}</p>
              <br />
              <p className="font-weight-bold">Telefon</p>
              <p>{adres.telefon}</p>
              <FontAwesomeIcon className="socialIcon" icon={faFacebook} />
              <FontAwesomeIcon className="socialIcon" icon={faInstagram} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default function MyHeader(props) {
  return (
    <StaticQuery
      query={graphql`
        {
          wordpressPage(title: { eq: "Home" }) {
            acf {
              e_mail
              kod_pocztowy_i_miejscowosc
              telefon
              ulica
            }
          }
        }
      `}
      render={data => <Contact data={data} {...props} />}
    />
  )
}
