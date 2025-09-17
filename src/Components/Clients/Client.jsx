import React from 'react'
import './Client.css'
import Logo1 from '../../assets/clients/client1.png'
import Logo2 from '../../assets/clients/client2.png'
import Logo3 from '../../assets/clients/client3.png'
import Logo4 from '../../assets/clients/client4.png'
import Logo5 from '../../assets/clients/client5.png'
import Logo6 from '../../assets/clients/client6.png'
const Client = () => {
  return (
   <>
   <div className='Client'>
        <h3>Our Clients</h3>
        <h6>We have been working with some Fortune 500+ clients</h6>

        <div className='ClientLogos'>
            <img src={Logo1} alt="Logo1" />
            <img src={Logo2} alt="Logo2" />
            <img src={Logo3} alt="Logo3" />
            <img src={Logo4} alt="Logo4" />
            <img src={Logo5} alt="Logo5" />
            <img src={Logo6} alt="Logo6" />
            <img src={Logo3} alt="Logo3" />
        </div>
   </div>
   </>
  )
}

export default Client