
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Moviecard from './Components/Moviecard'
import { useState } from 'react'
import Favourite from './Components/Favourite'
import Footer from './Components/Footer'
import { data } from '../data'




function App() {

  const [search, setSearch] = useState("");




  const [fav, setFav] = useState([])

  const [page, setPage] = useState(1)

  const cardperpage = 3;
  const totalcard = Math.ceil(data.length / cardperpage)

  console.log(totalcard)







  const clickfav = (movie) => {
    if (fav.some(item => item.Title == movie.Title)) {
      setFav(fav.filter(item => item.Title != movie.Title))
    }

    else setFav([...fav, movie])
  }










  return (
    <>
      <div className='bg-blue-50 w-full h-full'>

        <Navbar setSearch={setSearch} />




      </div>

      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/movie' element={<Moviecard totalcard={totalcard} cardperpage={cardperpage} search={search} page={page} setPage={setPage} fav={fav} clickfav={clickfav} />} />

        <Route path='/favourite' element={<Favourite fav={fav} />} />



      </Routes>





    </>
  )
}

export default App
