import React from 'react'
import "./Marketing.css"
import MarketingCard from './MarketingCard/MarketingCard'
import MarketingImage1 from "../../assets/marketing/marketing1.png"
import MarketingImage2 from "../../assets/marketing/marketing2.png"
import MarketingImage3 from "../../assets/marketing/marketing3.png"
const Marketing = () => {
  return (
    <>
    <div className="Marketing">
        <div className='MarketingAdjustment'>

        <h2 className='MarketingHeading'>Caring is the new marketing</h2>
        <h6 className='MarketingBody'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.</h6>
        </div>
        <div className='MarketingCardFlex'>
            <MarketingCard image={MarketingImage1} body="Creating Streamlined Safeguarding Processes with OneRen"/>
            <MarketingCard image={MarketingImage2} body="What are your safeguarding responsibilities?"/>
            <MarketingCard image={MarketingImage3} body="Revamping the Membership Model with Triathlon Australia"/>
        </div>
    </div>
    </>
  )
}

export default Marketing