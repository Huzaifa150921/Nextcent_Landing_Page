import React from 'react'
import './PixelGrade.css'
import PixelGradeButton from '../UIElements/Buttons/PrimaryNormalButton/PrimaryNormal.jsx'
const PixelGrade = ({image,heading1,heading2,body}) => {
  return (
    <>
    <div className="PixelGrade">
        <img src={image} alt="iamge" />
        <div className="PixelGradeContent">
            <h2>{heading1}</h2>
            <h2>{heading2}</h2>
            <h6>{body}</h6>
            <PixelGradeButton text="Learn More"/>
        </div>
    </div>
    </>
  )
}

export default PixelGrade