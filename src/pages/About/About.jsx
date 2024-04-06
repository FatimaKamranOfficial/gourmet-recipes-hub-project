
import React from 'react'
import styles from './styles.css'
import aboutimg from '../images/aboutimage.png'
import { FaHeart } from "react-icons/fa6";

const About = () => {
  return (
    <div className='about'>
      <h1 className='about-h1'>About <span>Gourmet Recipes Hub</span></h1>

      <div className="aboutinfo">
        <img src={aboutimg} alt="" />

        <div className='aboutinfo-p'>
          <p>Gourmet Recipes Hub is an online recipe searching website designed to experience fine dining from the comfort of your home. We provide recipes on all cuisines along with the ingredient list, elaborated steps and estimated cooking time to complete a gourmet dish</p>

          <p>We hope that you enjoy good cooking experience with your loved ones  <FaHeart className='hearts'/></p>

        </div>

      </div>

    </div>
  )
}

export default About
