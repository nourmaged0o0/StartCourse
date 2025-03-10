import Home from "./pages/home"
import { BrowserRouter, Route,Routes } from "react-router-dom"
import Scoreboard from "./pages/Scoreboard"
import { useState,useEffect } from "react";
import axios from "axios";
function App() {
  
 
  
  return (
    <>
    
    <Routes>

    <Route path="/" element={<Home/>}/>
    <Route path="/scoreboard/:groupId" element={<Scoreboard/>}/>
     
    </Routes>
    
    </>
  )
}

export default App
