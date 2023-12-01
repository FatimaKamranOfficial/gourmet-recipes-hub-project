
import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='footer'>

        <h3>Copyright &copy; GourmetRecipesHub.com All Rights Reserved</h3>
        <h3>Made by: Fatima Kamran</h3>

        <div className='footer-icons'>

            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaInstagram className='icon' />
            <FaSnapchat className='icon' />

        </div>
      
    </footer>
  )
}

export default Footer
