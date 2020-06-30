import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Header from "../components/Header"
import Background from "../components/Background"
import Footer from "../components/Footer"
import OneOfProductContainer from "../components/OneOfProductContainer"

const Product = ({ data }) => {
  const product = data.wordpressWcProducts
  return (
    <>
      <main>
        <Header count={1} />
        <Background />
        <div className="plant">
          <img src="/plant.webp" alt="" />
        </div>
        <OneOfProductContainer
          image={product.images[0].src.source_url}
          name={product.name}
          price={product.prices.price}
        />
      </main>
      <Footer count={1} />
    </>
  )
}

Product.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Product

export const postQuery = graphql`
  query($id: Int!) {
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
