import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';



const Navbar = ({setSearch}) => {

  const [active, setActive] = useState(false);

  const colourchnage=()=>{

    setActive(true)
    

  }


  return (
    <div className='w-full  flex gap-150 pt-5 pl-8 p-5 bg-black'>

      <div className='flex  gap-0  '>
        <input 
        onChange={(e)=>setSearch(e.target.value)}
        className='bg-white border-l-2 w-xl rounded-l-lg h-10' type="text" />

        <button className=' hover:bg-amber-700 bg-orange-300 rounded-r-lg w-15  '>Search</button>


      </div>

      <Link to={'/movie'}><button  onClick={colourchnage}
       className={` w-15 h-8 p-2 rounded-l transition ${active ? "bg-blue-400" :"bg-white "}
        `}

      >Movie</button></Link>





    </div>
  )
}

export default Navbar
