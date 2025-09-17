import React from 'react'
import "./Community.css"
import CommunityCard from './CommunityCard/CommunityCard'
import CommunityImage1 from "../../assets/community/community1.png"
import CommunityImage2 from "../../assets/community/community2.png"
import CommunityImage3 from "../../assets/community/community3.png"
const Community = () => {
  return (
    <>
    <div className="Community">
        <h3>Manage your entire community</h3>
        <h3>in a single system</h3>
        <h6 className='CommunityBody'>Who is Nextcent suitable for?</h6>
        <div className='CommunityCards'>
            <CommunityCard image={CommunityImage1} heading1="Membership" heading2="Organisations" body="Our membership management software provides full automation of membership renewals and payments"/>
            <CommunityCard image={CommunityImage2} heading1="National" heading2="Associations" body="Our membership management software provides full automation of membership renewals and payments"/>
            <CommunityCard image={CommunityImage3} heading1="Clubs And" heading2="Groups" body="Our membership management software provides full automation of membership renewals and payments"/>
        </div>
    </div>
    </>
  )
}

export default Community