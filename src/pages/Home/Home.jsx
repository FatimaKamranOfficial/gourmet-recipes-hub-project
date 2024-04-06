

import React from 'react'
import homeimg from '../images/homeimg3.png'
import styles from './styles.css'
import TypewriterComponent from 'typewriter-effect'
import { FaHeart } from "react-icons/fa6";


const Home = () => {


  return (
    <div className='home'>
      <div className='home-content'>
        <h1 className='home-h1'>Welcome to <span>Gourmet Recipes Hub</span></h1>

        <p className='home-p'>

          <div className='home-p-1'>

            Explore Million of Online Recipes from the comfort of your home on any type of cuisine :

            <TypewriterComponent

              options={
                {
                  loop: true,
                  delay: 50
                }
              }

              onInit={(typewriter) => {
                typewriter.typeString(" Chinese")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString(" Italian")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString(" Turkish")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString(" Pakistani")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString(" Indian")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString(" Mediterranian")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString(" Japanese")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString(" and many more ...")
                  .pauseFor(2000)
                  .deleteAll()
                  .start();

              }}

            />


          </div>

          <div className='home-p-2'>
            that is curated perfectly for you by top chefs from all around the globe with <FaHeart className='heart' /> for your Fine Dining Experience

          </div>


        </p>


      </div>

      <img src={homeimg} alt="homeimg" className='home-img' />

    </div>
  )
}

export default Home
