
import React from 'react'
import styles from './styles.css'
import RecipieCard from './RecipieCard'

const Recipies = () => {

  const [allRecipe, setAllRecipe] = React.useState([])

  const [recipe, setRecipe] = React.useState("chicken rice")

  const [search, setSearch] = React.useState("")


  React.useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_KEY}&query=${recipe}&addRecipeInformation=${true}&addRecipeInstructions=${true}&number=9`)
      .then(res => res.json())
      // .then(myRecipie => console.log(myRecipie))
      .then(data => setAllRecipe(data.results))
  }, [recipe])


  function updateSearch(event) {
    setSearch(event.target.value)
  }

  function getSearch(event) {
    event.preventDefault()
    setRecipe(search)
    setSearch("")
  }

  const myRecipes = allRecipe.map(item => {
    return (
      
      <RecipieCard

        key={item.id}
        id={item.title}
        image={item.image}
        title={item.title}

      />
      

    )

  })


  return (
    <div className='recipies'>

      <h1>Gourmet Recipies <span>Search Engine</span></h1>

      <form className="recipies-form" onSubmit={getSearch}>
        <input type="text" onChange={updateSearch} placeholder='Search Recipies...'></input>
        <button>Explore Recipies</button>
      </form>

      <div className='card'>
        {myRecipes}
      </div>


    </div>
  )
}

export default Recipies
