import React from "react"
import {
  Link,
} from "react-router-dom"

import {
  banner,
  products,
} from '../../assets'
import {
  Herobanner,
  Thumbnails,
} from './Home.components'

const Home = () => {
  return (
    <div className="home">
      <div className="home__banner">
        <Herobanner image={banner} title="Chez vous, partout et ailleurs" />
      </div>
      {" "}
      <section className="home__products">
        {products.map((product) => {
          return (
            <article key={product.id}>
              <Link to={`/products/${product.id}`}>
                <Thumbnails image={product.cover} title={product.title} />
              </Link>
            </article>
          )
        })}
      </section>
    </div>
  )
}

export default Home
