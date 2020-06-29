import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import ImgProduct from "./ImgProduct"

function slugify(string) {
  const a =
    "àáâäæãåāăąąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;"
  const b =
    "aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------"
  const p = new RegExp(a.split("").join("|"), "g")

  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, "") // Trim - from end of text
}

const ProductContainer = ({ data }) => {
  const products = data.allWordpressWcProducts.edges.map(({ node }) => {
    let slug = slugify(node.name)
    console.log(node)
    return (
      <div className="col-sm-4 imgProduct" key={slug}>
        <Link to={slug}>
          <ImgProduct
            image={node.images[0].src.source_url}
            slug={slug}
            price={node.prices.price}
            name={node.name}
          />
          <div className="nameOfProduct">
            <h4>{node.name}</h4>
          </div>
          <p>{node.prices.price} zł</p>
        </Link>
      </div>
    )
  })
  return (
    <div className="products">
      <div className="container" id="product">
        <h2>NASZE PRODUKTY</h2>
        <div className="row">{products}</div>
      </div>
    </div>
  )
}

export default function MyHeaderd(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          allWordpressWcProducts {
            edges {
              node {
                id
                name
                images {
                  src {
                    source_url
                  }
                }
                wordpress_id
                prices {
                  price
                }
              }
            }
          }
        }
      `}
      render={data => <ProductContainer data={data} {...props} />}
    />
  )
}
