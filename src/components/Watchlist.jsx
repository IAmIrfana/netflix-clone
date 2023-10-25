import { AiFillStar, AiOutlineClockCircle } from 'react-icons/ai'
import { BsArrowLeft } from 'react-icons/bs'
import { Link, } from 'react-router-dom'

const Watchlist = () => {

  return (
    <div className='p-5 mt-10'>
        <div className='text-3xl'>
     <Link to={`/`}>
     <button><BsArrowLeft /></button></Link>   
        <h1 className='font-bold'>Your Watchlis</h1>

        </div>
        <div className='flex gap-6 mt-4 w-[100vh]'>
            <img className='h-[40vh] object-contain' src="src/assets/watchlist1.jpg" alt="" />
            <div className='mt-5'>
               <h1 className='font-bold text-2xl'>Persuasion (2022) </h1>
               <div className='flex gap-2 my-5'>
               <button className="bg-gray-700 p-1 flex rounded-xl "><AiFillStar className="text-yellow-500 mt-1"/>
6.2</button>
        <button className="bg-gray-700  p-1 rounded-xl flex"><AiOutlineClockCircle className="mt-1"/>109-110 Min</button>

               </div>

                <p className='pr-6 text-xl'>Persausion is a 2022 American romantic drama film directed by Carrie Cracknel from a screenplay by Ron Bass and Alice Victoria  Winslow , based on the novel....</p>
</div>
        </div>
        <div className='flex gap-6 mt-10 w-[100vh]'>
            <img className='h-[50vh]  object-contain' src="src/assets/watchlist3.jpg" alt="" />
            <div className='mt-5'>
               <h1 className='font-bold text-2xl'> Ghostbusters: <br />Afterlife (2022)</h1>
               <div className='flex gap-2 my-5'>
               <button className="bg-gray-700 p-1 flex rounded-xl "><AiFillStar className="text-yellow-500 mt-1"/>
6.2</button>
        <button className="bg-gray-700  p-1 rounded-xl flex"><AiOutlineClockCircle className="mt-1"/>109-110 Min</button>

               </div>

                <p className='pr-6 text-xl'>Ghostbusters:Afterlife is a 2021 American romantic drama film directed by Carrie Cracknel from a screenplay by Ron Bass and Alice Victoria  Winslow , based on the novel....</p>
</div>
        </div>
        <div className='flex gap-6 mt-10 w-[100vh]'>
            <img className='h-[40vh] object-contain' src="src/assets/watchlist4.jpg" alt="" />
            <div className='mt-5'>
               <h1 className='font-bold text-2xl'> The Weekend Away (2022)</h1>
               <div className='flex gap-2 my-5'>
               <button className="bg-gray-700 p-1 flex rounded-xl "><AiFillStar className="text-yellow-500 mt-1"/>
6.2</button>
        <button className="bg-gray-700  p-1 rounded-xl flex"><AiOutlineClockCircle className="mt-1"/>109-110 Min</button>

               </div>

                <p className='pr-6 text-xl'>The Weekend Away is a 2022 American romantic drama film directed by Carrie Cracknel from a screenplay by Ron Bass and Alice Victoria  Winslow , based on the novel....</p>
</div>
        </div>


    </div>
  )
}

export default Watchlist