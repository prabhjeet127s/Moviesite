import React, {  useEffect } from 'react'
import  {data}  from '../../data'

const Moviecard = ({search}) => {


console.log(search,"search");


    

    
  useEffect(()=>{
    console.log(data)

  
  }),[]

  console.log({search})
    
    return (


        



        

        <div className='flex  flex-col items-center gap-10 p-7 '>

            


            








        
            {data.filter((data)=>data.Title.toLowerCase().includes(`${search}`)).map((everycard) => (
                <div className="flex w-200 bg-gray-100 rounded-l  ">

                   <img
                src={everycard.Poster}
                alt={everycard.Title}
                className="w-42 h-48  rounded"
            />

            
            <div className="flex-1 ml-4 flex flex-col justify-between">
                <div>
                    <h2 className="text-xl font-semibold">{everycard.Title}</h2>
                    <p className="text-gray-700 mt-2 text-sm">
                        {everycard.Plot}
                    </p>
                    <p className="mt-3 font-medium">{everycard.Ratings[0].Value}</p>
                </div>

                
                <div className="flex p-6 justify-end">
                    <button
                        className="px-4 p-3 py-1 bg-blue-500 text-white rounded
                       hover:bg-blue-600 transition"
                    >
                        Favourite
                    </button>
                </div>
            </div>
                    </div>




            ))}
            
                    </div>



    )
}

export default Moviecard
