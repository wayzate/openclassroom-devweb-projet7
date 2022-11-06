import React from "react"
import {
  Link,
} from "react-router-dom"

import {
  banner,
  logements,
} from '../../assets'
import {
  BigBanner,
  AppartmentCard,
} from './Home.components'

const Home = () => (
  <div className="home">
    <div className="home__banner">
      <BigBanner image={banner} title="Chez vous, partout et ailleurs" />
    </div>
    {" "}
    <section className="home__logements">
      {logements.map(({ id, cover, title }) => (
        <article key={id}>
          <Link to={`/logements/${id}`}>
            <AppartmentCard image={cover} title={title} />
          </Link>
        </article>
      ))}
    </section>
  </div>
)

export default Home
