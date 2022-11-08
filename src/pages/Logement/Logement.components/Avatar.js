import React from "react"

const Avatar = ({ host }) => {
  const isHostSplited = host.name.split(" ")
  const [name, lastname] = isHostSplited

  return (
    <div className="avatar">
      <div className="avatar__name">
        <p className="avatar__firstname">{name.trim()}</p>
        <p className="avatar__lastname">{lastname.trim()}</p>
      </div>

      <img src={host.picture} alt="" className="avatar__picture" />
    </div>
  )
}

export default Avatar
