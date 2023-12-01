import React from 'react';
import './index.css';
import Layout from './components/Layout'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Recipies from './pages/Recipies/Recipies'
import RecipieDisplay from './pages/Recipies/RecipieDisplay'

import { BrowserRouter , Routes , Route , Link } from 'react-router-dom';

const App = () => {
  // <script src="../"></script>
  return (

    <BrowserRouter>

      <Routes>

        <Route element={<Layout />}>

          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/recipies' element={<Recipies />}/>
          <Route path='/recipies/:id' element={<RecipieDisplay />}/>

        </Route>

      </Routes>
    
    </BrowserRouter>
  )
}

export default App