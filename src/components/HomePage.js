import React from "react"
import Header from "../components/Header"
import Background from "../components/Background"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import ProductContainer from "./ProductContainer"
import ButtonUp from "./ButtonUp"

const HomePage = () => {
  return (
    <>
      <main className="ownContainer">
        <Header count={2} />
        <ButtonUp />
        <Background />
        <ProductContainer />
        <div className="main">
          <div className="plant">
            <img src="/plant.webp" alt="" />
          </div>
          <div className="tymczasowyUSUN"></div>
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default HomePage
