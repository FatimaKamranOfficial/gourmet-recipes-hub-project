
import React from 'react'
import { Link, useParams } from 'react-router-dom'

const RecipieDisplay = () => {

  const params = useParams()

  const [display, setDisplay] = React.useState([])

  const [toggle, setToggle] = React.useState(1)

  function updateToggle(ids) {
    setToggle(ids)
  }


  React.useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${params.id}&apiKey=${process.env.REACT_APP_KEY}&addRecipeInformation=${true}&instructionsRequired=${true}&number=1`)
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(data => setDisplay(data.results))
  }, [params.id])

  console.log(display)
  const myrecipe = display.map(item => {


    return (
      <div key={item.id} className='display-recipe'>

        <div className="left">
          <img src={item.image} alt="" />
        </div>

        <div className="right">

          <h2>{item.title}</h2>

          <div className="btns">
            <button onClick={() => updateToggle(1)} >Instructions</button>
            <button onClick={() => updateToggle(2)} >Ingredients</button>
            <button onClick={() => updateToggle(3)} >Cooking Time</button>
            {/* <a href={item.recipe.url} target="_blank"><button onClick={() => updateToggle(4)} >Recipie Info</button></a> */}
          </div>

          <div className="display">

            <div className={toggle === 1 ? "active" : "content"}>

              <ol>
                {item.analyzedInstructions.map(inst => (
                  inst.steps.map(s => <li>{s.step}</li>)
                ))}
              </ol>
            </div>

            <div className={toggle === 2 ? "active" : "content"}>

              <ol>
                {item.analyzedInstructions.map(ingr => (
                  ingr.steps.map(ing => (ing.ingredients.map(i => <li>{i.name}</li>)))
                ))}
              </ol>
            </div>

            <div className={toggle === 3 ? "active" : "content"}>
              <p>Cooking Time: {item.readyInMinutes} minutes</p>
            </div>


          </div>

        </div>

      </div>


    )



  })

  return (

    <div>
      {myrecipe}
    </div>

  )

}


export default RecipieDisplay


