import React from "react"

import {
  redStarSvg,
  greyStarSvg,
} from '../../../assets'

const Rating = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5]

  return (
    <div className="rating">
      {/* Loop to display star by rating */}
      {stars.map((star) => (rating >= star ? (
        <img
          key={star.toString()}
          className="rating__icon"
          src={redStarSvg}
          alt=""
        />
      ) : (
        <img
          key={star.toString()}
          className="rating__icon"
          src={greyStarSvg}
          alt=""
        />
      )))}
    </div>
  )
}

export default Rating
