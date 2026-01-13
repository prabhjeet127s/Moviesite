import React from 'react'

const Favourite = ({ fav }) => {

    console.log(fav)


    return (
        <div className='flex flex-col items-center gap-10 p-7'>

            {fav.map((everycard) => (




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


                        
                    </div>
                </div>












            ))}













        </div>
    )
}

export default Favourite
