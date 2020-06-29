import React from "react"

const OneOfProductContainer = props => {
  const { image, name, price } = props
  return (
    <>
      <div className="row">
        <div className="col-md-7">
          <img className="img-fluid imgOfProduct" src={image} alt="" />
        </div>
        <div className="col-md-5 infoProduct">
          <h3>{name}</h3>
          <h4>Cena: {price} zł</h4>
        </div>
      </div>
    </>
  )
}

export default OneOfProductContainer
