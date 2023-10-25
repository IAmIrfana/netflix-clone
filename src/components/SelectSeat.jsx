import  { useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { FiFileMinus, FiFilePlus } from 'react-icons/fi';
import Checkout from './Checkout';

// const SelectSeat = () => {
// eslint-disable-next-line react/prop-types
export const SelectSeat = ({ setToggleSeat }) => {
  const availabilities = [
    { avilable: true, id: 1 }, // seat 1
    { avilable: false, id: 2 }, // seat 2
    { avilable: true, id: 3 }, // seat 3
    { avilable: false, id: 4 }, // seat 4
    { avilable: true, id: 5 },
    { avilable: false, id: 6 },
    { avilable: true, id: 7 },
    { avilable: true, id: 8 },
    { avilable: false, id: 9 },
    { avilable: true, id: 10 },
    { avilable: true, id: 11 },
    { avilable: true, id: 12 }, // seat 1
    { avilable: false, id: 13 }, // seat 2
    { avilable: true, id: 14 }, // seat 3
    { avilable: false, id: 15 }, // seat 4
    { avilable: true, id: 16 },
    { avilable: false, id: 17 },
    { avilable: true, id: 18 },
    { avilable: true, id: 19 },
    { avilable: false, id: 20 },
    { avilable: true, id: 22 },
    { avilable: true, id: 23 },
    { avilable: true, id: 24 },
    { avilable: true, id: 25 }, // seat 1
    { avilable: false, id: 26 }, // seat 2
    { avilable: true, id: 27 }, // seat 3
    { avilable: false, id: 28 }, // seat 4
    { avilable: true, id: 29 },
    { avilable: false, id: 30 },
    { avilable: true, id: 31 },
    { avilable: true, id: 32 },
    { avilable: false, id: 33 },
    { avilable: true, id: 34 },
    { avilable: true, id: 35 },


  ];
  const [selectedId, setSelectId] = useState(0)
  const [bgBooked,setBgBooked]=useState(false)





  const btnToggle = (selectedId) => {
    setSelectId(selectedId)
    setBgBooked(!bgBooked)
  }
  const [toggleCheck, setToggleCheck] = useState(false)

  return (
    <div className=' top-10  z-40 absolute  bg-black   '>
      {toggleCheck && <div className='w-full bg-black/75 absolute z-20 h-full'></div>}
      <div className='text-2xl flex justify-between m-7'>
        <h1 className='font-semibold'>Buy Tickets
        </h1>
        <button onClick={() => setToggleSeat(false)}><BsArrowLeft /></button>
      </div>
      <div>
        <img className='w-[70vh] m-auto' src="Frame 6.png" alt="" />
      </div>
      <div className="flex flex-wrap w-[400px]  my-10 m-auto gap-5">
        {availabilities?.map((isAvailable, index) => (
          <button onClick={() => btnToggle(isAvailable.id)}key={index}
            className={`w-[40px] h-[40px]  text-red-500 text-2xl border-red-500 border-2 text-center ${(selectedId ===isAvailable.id) && bgBooked? "bg-red-500" : ""} `}

          >
          </button>
        ))}
      </div>
      <div className='flex justify-around'>
        <div className='text-3xl font-bold'>
          <h1>        Selected Seats
          </h1>
          <h2 className='text-center'>1</h2>
        </div>
        <div className='text-3xl'>
          <FiFilePlus />
          <FiFileMinus />
        </div>
      </div>
      <div className='mx-28 m-10'>
        <button className=' bg-red-600 w-[65vh] h-[10vh] rounded-2xl font-bold text-xl ' onClick={() => setToggleCheck(true)}> Next</button>

      </div>
      <div className="flex justify-center">
        {toggleCheck && <Checkout setToggleCheck={setToggleCheck} />}
      </div>


    </div>

  )
}

export default SelectSeat
