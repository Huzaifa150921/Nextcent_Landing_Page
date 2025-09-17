import React from 'react'
import './MarketingCard.css'
import MarketingButton from '../../UIElements/Buttons/TertiaryIconRightNormalButton/TertiaryIconRight.jsx'

const MarketingCard = ({image,body}) => {
  return (
    <div className="MarketingCard">
      <img className="MarketingImage" src={image} alt="marketing" />
      <div className="MarketingContent">
        <h6>{body}</h6>
        <MarketingButton text="Read more" />
      </div>
    </div>
  )
}

export default MarketingCard
