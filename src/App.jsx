import React from "react"
import { Routes, Route } from 'react-router-dom'

// components
import Homepage from "./assets/components/home"
import Navbar from './assets/components/navbar'
import Destination from './assets/components/destination'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Homepage /> }/>
        <Route path="/destination" element={ <Destination /> }/>
      </Routes>
    </div>
  )
}

export default App
