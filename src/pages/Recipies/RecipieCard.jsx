

import React from 'react'
import { Link } from 'react-router-dom'



const RecipieCard = (props) => {


  return (
    <Link to={`/recipies/${props.id}`}>

      <div key={props.id} className='recipie-card'>

        <div className='recipie-card-info'>

          <img src={props.image} alt='' />
          <h3>{props.title}</h3>
          <button>View Recipie</button>

        </div>


      </div>

    </Link>
  )

}

export default RecipieCard
