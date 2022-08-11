import React from "react"
import { Routes, Route } from 'react-router-dom'

// components
import Homepage from "./components/home"
import Navbar from './components/navbar'
import Destination from './components/destination'
import Crew from './components/crew';
import Technology from "./components/technology"

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
