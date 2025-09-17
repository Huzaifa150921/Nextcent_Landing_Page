import React from "react";
import "./Footer.css";
import FooterIcon1 from '../../assets/Footer/Footer1.png'
import FooterIcon2 from '../../assets/Footer/Footer2.png'
import FooterIcon3 from '../../assets/Footer/Footer3.png'
import FooterIcon4 from '../../assets/Footer/Footer4.png'
import FooterLogo from '../../assets/FooterLogo.png'

const Footer = () => {
  return (
    <div className="Footer">
      <div className="FooterGrid">

        {/* Left Section */}
        <div className="FooterLeft">
          <img src={FooterLogo} alt="FooterLogo" />
          <p className="FooterLogoContent">
            Copyright © 2020 Nexcent ltd.<br />All rights reserved
          </p>
          <div className="FooterSocials">
            <img src={FooterIcon1} alt="Footer1" />
            <img src={FooterIcon2} alt="Footer2" />
            <img src={FooterIcon3} alt="Footer3" />
            <img src={FooterIcon4} alt="Footer4" />
          </div>
        </div>

        {/* Company */}
        <div className="FooterColumn FooterCompany">
          <h4>Company</h4>
          <ul>
            <li>About us</li>
            <li>Blog</li>
            <li>Contact us</li>
            <li>Pricing</li>
            <li>Testimonials</li>
          </ul>
        </div>

        {/* Support */}
        <div className="FooterColumn FooterSupport">
          <h4>Support</h4>
          <ul>
            <li>Help center</li>
            <li>Terms of service</li>
            <li>Legal</li>
            <li>Privacy policy</li>
            <li>Status</li>
          </ul>
        </div>

        {/* Subscribe */}
        <div className="FooterColumn FooterSubscribe">
          <h4>Stay up to date</h4>
          <div className="FooterInputWrapper">
            <input type="email" placeholder="Your email address" />
            <button>➤</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
