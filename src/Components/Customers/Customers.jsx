import React from 'react'
import './Customer.css'
import CustomerImage from "../../assets/pic/pic4.png"
import ImageFlex1 from "../../assets/customers/customer1.png"
import ImageFlex2 from "../../assets/customers/customer2.png"
import ImageFlex3 from "../../assets/customers/customer3.png"
import ImageFlex4 from "../../assets/customers/customer4.png"
import ImageFlex5 from "../../assets/customers/customer5.png"
import ImageFlex6 from "../../assets/customers/customer6.png"
import CustomerButton from "../UIElements/Buttons/TertiaryIconRightNormalButton/TertiaryIconRight.jsx"

const Customers = () => {
  return (
    <>
    <div className="Customers">
        <div className='CustomerAdjustement'>
            <img src={CustomerImage} alt="CustomerImage" />
            <div className='CustomerContent'>
                <h6 className='CustomerText1'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</h6>
                <h6 className='CustomerText2'>Tim Smith</h6>
                <h6 className='CustomerText3'>British Dragon Boat Racing Association</h6>
                <div className='CustomerImagesFlex'>
                    <img src={ImageFlex1} alt="CustomerImage1" />
                    <img src={ImageFlex2} alt="CustomerImage2" />
                    <img src={ImageFlex3} alt="CustomerImage3" />
                    <img src={ImageFlex4} alt="CustomerImage4" />
                    <img src={ImageFlex5} alt="CustomerImage5" />
                    <img src={ImageFlex6} alt="CustomerImage6" />
                    <CustomerButton text="Meet all customers"/>


                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Customers