import React from "react"
import { Routes, Route } from 'react-router-dom'

// components
import Homepage from "./assets/components/home"
import Navbar from './assets/components/navbar'
import Destination from './assets/components/destination'
import Crew from './assets/components/crew';
import Technology from "./assets/components/technology"

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Homepage /> }/>
        <Route path="/destination" element={ <Destination /> }/>
        <Route path="/crew" element={ <Crew /> }/>
        <Route path="/technology" element={ <Technology /> }/>
      </Routes>
    </div>
  )
}

export default App
