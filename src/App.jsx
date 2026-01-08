
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Moviecard from './Components/Moviecard'
import {  useState } from 'react'


function App() {

  const [search,setSearch]=useState("");

  

  return (
    <>
      <div className='bg-blue-50 w-full h-full'>

        <Navbar  setSearch={setSearch}/>
        



      </div>

      <Routes>
        <Route path='/' element={<Home/>}/>

        <Route path='/movie' element={<Moviecard search={search}/>}/>
      </Routes>





    </>
  )
}

export default App
