import React from "react"
import Header from "../components/Header"
import Background from "../components/Background"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import ProductContainer from "./ProductContainer"

const HomePage = () => {
  return (
    <div className="ownContainer">
      <Header />
      <Background />
      <ProductContainer />
      <div className="main">
        <div className="plant">
          <img src="/plant.webp" alt="" />
        </div>
        <div className="tymczasowyUSUN"></div>
        <Contact />
        <div className="tymczasowyUSUN"></div>
        <div className="tymczasowyUSUN"></div>
        <div className="tymczasowyUSUN"></div>
        <div className="tymczasowyUSUN"></div>
      </div>
      <Footer />
    </div>
  )
}

export default HomePage
