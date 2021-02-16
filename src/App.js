import React from "react"
import { Switch, Route } from 'react-router-dom'
import Home from './Pages/Home/Home.js'
import ShoeIndex from './Pages/Shoe/ShoeIndex.js'
import CubeIndex from './Pages/Cubes/CubeIndex.js'
import "./index.css"

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/cubes' component={CubeIndex} />
      <Route path='/shoe' component={ShoeIndex} />
    </Switch>
  )
}

export default App
