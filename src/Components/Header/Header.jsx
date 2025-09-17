import React, { useState, useEffect } from 'react'
import './Header.css'
import Logo from '../../assets/Logo.png'
import LoginButton from '../UIElements/Buttons/TertiaryMediumButton/TertiaryMedium.jsx'
import SignUpButton from '../UIElements/Buttons/PrimaryMediumButton/PrimaryMedium.jsx'
import Navbar from '../Navbar/Navbar.jsx'
import { Menu, X, Moon, Sun } from "lucide-react"
import FooterLogo from '../../assets/FooterLogo.png';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)


  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }
  }, [isDarkMode])

  return (
    <>
      <div className='Header'>
        <img src={isDarkMode? FooterLogo:Logo} alt="logo" className='HeaderLogo'/>

     
        <div className='DesktopNav'>
          <Navbar/>
        </div>

        <div className='HeaderButtonFlex DesktopNav'>
       
          <button 
            className="ThemeToggle"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {isDarkMode ? <Moon size={22} color='#fff'/> : <Sun size={22} color="#000"/>}
          </button>

          <LoginButton text="Login"/>
          <SignUpButton text="Sign up"/>
        </div>

    
        <div className="Hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} color={isDarkMode ? '#fff':'#000'}/> : <Menu size={28} color={isDarkMode ? '#fff':'#000'}/>}
        </div>
      </div>

 
      {isOpen && (
        <div className="MobileMenu">
          <Navbar/>
          <div className='HeaderButtonFlex MobileButton'>
           
            <button 
              className="ThemeToggle"
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              {isDarkMode ? <Moon size={22} color='#fff'/> : <Sun size={22} color="#000"/>}
            </button>

            <LoginButton text="Login"/>
            <SignUpButton text="Sign up"/>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
