
import React from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi"
import { MdOutlineRestaurantMenu } from "react-icons/md"

const Header = () => {

    const [toggle, setToggle] = React.useState(false)

    return (

        <header>
            <div className='logo'>
                <Link to='/'><h2>Gourmet Recipes Hub</h2></Link>
            </div>

            <nav>

                <Link to='/about'>About</Link>
                <Link to='/recipies'>Recipes</Link>

            </nav>

            <div className='nav-mobile'>

                <GiHamburgerMenu color="black" fontSize={27} onClick={() => setToggle(true)} />

                {toggle &&

                    <div className='nav-overlay'>
                        <MdOutlineRestaurantMenu fontSize={27} className='overlay-close' onClick={() => setToggle(false)} />
                        <div className='nav-mobile-links'>

                            <Link to='/about' onClick={() => setToggle(false)}>About</Link>
                            <Link to='/recipies' onClick={() => setToggle(false)}>Recipies</Link>

                        </div>

                    </div>

                }

            </div>
        </header>




    )
}

export default Header
