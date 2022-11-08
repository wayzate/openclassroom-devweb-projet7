import React from 'react'
import { useParams } from "react-router-dom"
import {
  logements,
} from '../../assets'

import {
  Rating,
  Avatar,
  Slider,
  Tags,
  Collapse,
} from './Logement.components'

const Logement = () => {
  const { logementId } = useParams()
  const logement = logements.find(({ id }) => id === logementId)
  const {
    title,
    location,
    rating,
    host,
    equipments,
    description,
    pictures,
  } = logement

  return (
    <div className="logement">
      <div className="logement__content">
        <div className="logement__informations">
          <h1 className="logement__title">{title}</h1>
          <p className="logement__location">{location}</p>
          <div className="logement__tags">
            {logement.tags.map((tag, index) => (
              <Tags key={index} getTag={tag} />
            ))}
          </div>
        </div>
        <div className="logement__rating-and-host">
          <Rating rating={rating} />
          <Avatar host={host} />
        </div>
      </div>
      <div className="logement__dropdowns">
        <Collapse title="Description" content={description} />
        <Collapse title="Équipement" content={equipments} />
      </div>
    </div>
  )
}

export default Logement
