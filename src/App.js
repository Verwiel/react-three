import React from "react"
import { Switch, Route } from 'react-router-dom'
import Home from './Pages/Home/Home.js'
import Shoe from './Pages/Shoe/Shoe.js'
import "./index.css"

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/shoe' component={Shoe} />
    </Switch>
  )
}

export default App
