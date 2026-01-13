import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Footer from './Footer';



const Navbar = ({setSearch}) => {

  const [active, setActive] = useState("");
  const [value,setValue] = useState("")

  const onclick=()=>{

    setSearch(value);
  }

  const colourchange=()=>{

    setActive("movie")
    

  }
  const colourchange2=()=>{
    setActive("home")
  }

  const colourchange3=()=>{
    setActive("favourite")
  }


  return (
    <div className='w-full  flex justify-between pt-5 pl-8 p-5 bg-black'>

      <div className='flex  gap-0  '>
        <input 
        onChange={(e)=>setValue(e.target.value)}
        className='bg-white border-l-2 outline-0 w-xl p-3 rounded-l-lg h-10' type="text" />

        <button onClick={onclick} className=' hover:bg-amber-700 bg-orange-300 rounded-r-lg w-15  '>Search</button>


      </div>

      <div className='gap-4 flex overflow-hidden  '>

      <Link to={'/movie'}><button  onClick={colourchange}
       className={` w-20 h-10 p-2 rounded-xl  transition ${active ==="movie"? "bg-blue-400" :"bg-white "}
        `}

      >Movie</button></Link>



        <Link to={'/'}><button  onClick={colourchange2}
       className={` w-20 h-10 p-2 rounded-xl  transition ${active ==="home"? "bg-blue-400" :"bg-white "}
        `}

      >Home</button></Link>


      <Link to={'/favourite'}><button  onClick={colourchange3}
       className={` w-20 h-10 p-2 rounded-xl ${active==="favourite" ?"bg-blue-400" : "bg-white"} transition"}
        `}

      >Favourite</button></Link>


      </div>





    </div>

    



  )
}

export default Navbar
