import React from 'react'
import './LocalBussiness.css'
import LocalBussinessBadge from './LocalBussinessBadge/LocalBussinessBadge'
import BadgeIcon1 from "../../assets/help/help1.png"
import BadgeIcon2 from "../../assets/help/help2.png"
import BadgeIcon3 from "../../assets/help/help3.png"
import BadgeIcon4 from "../../assets/help/help4.png"
const LocalBussiness = () => {
  return (
   <>
   <div className="LocalBussiness">
    <div className='LocalBussinessFlex'>
    <div className='LocalBussinessHeadings'>
    <h2 className='LocalBussinessHeading1'>Helping a local</h2>
    <h2 className='LocalBussinessHeading2'>business reinvent itself</h2>
    <h6 className='LocalBussinessBody'>We reached here with our hard work and dedication</h6>
    </div>

    <div>

    <div className='BussinessBadgeGroup1'>

    <LocalBussinessBadge image={BadgeIcon1} heading="2,245,341" body="Members"/>
    <LocalBussinessBadge image={BadgeIcon2} heading="46,238" body="Clubs"/>
    
    </div>
    <div className='BussinessBadgeGroup2'>
    <LocalBussinessBadge image={BadgeIcon3} heading="828,867" body="Event Bookings"/>
    <LocalBussinessBadge image={BadgeIcon4} heading="1,926,436" body="Payments"/>
    </div>
    </div>
   </div>
    </div>
   </>
  )
}

export default LocalBussiness