import React from 'react'
import { useEffect } from 'react'

export default function Footer({totalcard,page,setPage}) {

    




  return (
    <div>


      <div className='gap-6 p-3.5 h-auto w-auto flex justify-around  text-white'>
        <button className='border-1 h-10 w-10 rounded-xl hborder-solid border-black bg-black '
        onClick={()=>{setPage(page-1)}} disabled={page===1}
        >{"<"}</button>
        <button  className='border-1 h-10 w-10 rounded-xl hborder-solid border-black bg-black ' >{page}</button>
        <button className='border-1 h-10 w-10 rounded-xl hborder-solid border-black bg-black ' 
        onClick={()=>setPage(page+1)} disabled ={page==totalcard}
        >{">"}</button>
      </div>
      
    </div>
  )
}
