import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Blog from './Blog'
import CargaPelicula from './CargaPelicula'

function App() {
  return (
    
    <BrowserRouter>

     <Routes>
        <Route path="/" exact element={<CargaPelicula />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="*" element={<CargaPelicula />}/>
      
     </Routes>
    
    </BrowserRouter>
    
  )
}

export default App