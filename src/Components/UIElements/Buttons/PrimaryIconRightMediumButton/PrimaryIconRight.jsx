import React from 'react'
import './PrimaryIconRight.css'
import RightArrow from '../../../../assets/RightArrow.png'
const PrimaryIconRight = ({text}) => {
  return (
    <button className='BtnPrimaryRight'>{text} <img src={RightArrow} alt="Right_Arrow" /></button>
  )
}

export default PrimaryIconRight