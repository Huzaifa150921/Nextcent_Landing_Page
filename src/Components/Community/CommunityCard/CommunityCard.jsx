import React from 'react'
import './CommunityCard.css'

const CommunityCard = ({image,heading1,heading2,body}) => {
  return (
  <>
  <div className='CommunityCard'>
    <img src={image}  />
    <div className='CommunityCardHeading'>
        <h4>{heading1}</h4>
        <h4>{heading2}</h4>
    </div>
    <h6>{body}</h6>
  </div>
  </>
  )
}

export default CommunityCard