import React from 'react'
import './LocalBussinessBadge.css'
const LocalBussinessBadge = ({image,heading,body}) => {
  return (
    <>
    <div className="LocalBussinessBadge">
        <img src={image} alt="image" />
        <div className="BadgeContent">
            <h2>{heading}</h2>
            <h6>{body}</h6>
        </div>
    </div>
    </>
  )
}

export default LocalBussinessBadge