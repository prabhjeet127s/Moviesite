

import { data } from '../../data'
import Footer from './Footer';

const Moviecard = ({ totalcard, cardperpage,fav,search, clickfav,page ,setPage,}) => {

    

    

    

    const startindex=(page-1)*cardperpage;
    const endindex=startindex+cardperpage;

    const viewcard=data.slice(startindex,endindex);
    
    


  
    

    

    



    return (


        <div className='flex  flex-col items-center gap-10 p p-7 '>


            {viewcard.filter((viewcard) => viewcard.Title.toLowerCase().includes(`${search}`)).map((everycard) => (




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
                                onClick={() => {
                                    { clickfav(everycard) };
                                    

                                }
                                }

                            >
                                {fav.some(item=>item.Title===everycard.Title)
                                ? "unFavourite"
                            : "Favourite"}
                            </button>
                        </div>
                    </div>
                </div>






            ))}

            <Footer page={page} totalcard={totalcard} setPage={setPage}   />

        </div>



    )
}

export default Moviecard
