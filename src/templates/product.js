import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Header from "../components/Header"
import Background from "../components/Background"

const Product = ({ data }) => {
  const product = data.wordpressWcProducts
  return (
    <>
      <Header />
      <Background />
      <img
        className="img-fluid"
        src={product.images[0].src.source_url}
        alt=""
      />
      <p>{product.name}</p>
    </>
  )
}

Product.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Product

export const postQuery = graphql`
  ($id: Int!) {
    wordpressWcProducts(wordpress_id: { eq: $id }) {
      prices {
        price
      }
      name
      images {
        src {
          source_url
        }
      }
    }
  }
`
