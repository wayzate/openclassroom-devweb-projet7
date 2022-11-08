import React from "react"

const BigBanner = ({ image, title }) => (
  <div className="thumb">
    <img src={image} alt="" className="thumb__img" />
    <div className="thumb__overlay" />
    <h2 className="thumb__title">{title}</h2>
  </div>
)

export default BigBanner
