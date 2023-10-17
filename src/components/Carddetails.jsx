import React from 'react'
import { AiFillCreditCard } from 'react-icons/ai'
import { BsArrowLeft } from 'react-icons/bs'

const Carddetails = () => {
  return (
    <div className='bg-black ml-5'>
      <div className='text-2xl flex justify-between m-7 ml-'>
        <h1 className='font-semibold'>Credit /Details card
        </h1>
        <button><BsArrowLeft /></button>
      </div>
      <div className='m-7'>
        <div>
          <h1 className='font-semibold text-xl'>Card Details</h1>
          <div className='flex border-2 border-red-700 w-[300px] rounded p-2 mt-1'>
            <AiFillCreditCard className='text-xl' />
            <input className='bg-black w-[300px]' type="text" />

          </div>

        </div>
        <div className='flex gap-10 mt-10'>
          <div>
            <h1 className='font-semibold text-xl'>              Expiration Month
            </h1>
            <select name="" id="" className='bg-black border-2 border-red-700 w-[120px] p-1 mt-2'>
              <option value=""></option>

              <option value="">jan</option>
              <option value="">feb</option>
              <option value="">mar</option>
              <option value="">apr</option>
              <option value="">may</option>
              <option value="">june</option>
              <option value="">july</option>
              <option value="">aug</option>
              <option value="">sep</option>
              <option value="">oct</option>
              <option value="">nov</option>
              <option value="">dec</option>

            </select>

          </div>
          <div>
            <h1 className='font-semibold text-xl'>              Expiration Year
            </h1>
            <select name="" id="" className='bg-black border-2 border-red-700 w-[120px] p-1 mt-2'>
              <option value=""></option>

              <option value="">2024</option>
              <option value="">2025</option>
              <option value="">2026</option>
              <option value="">2027</option>
              <option value="">2028</option>
              <option value="">2029</option>
              <option value="">2030</option>
              <option value="">2031</option>
              <option value="">2032</option>

            </select>

          </div>
        </div>
        <div className='mt-10'>
      <h1 className='font-semibold text-xl'>Billing Zip Code
            </h1>
            <div>
            <input className='bg-black w-[120px] border-2 border-red-700 p-1 mt-2' type="text"  />

            </div>

      </div>
      <div className='mt-10 flex gap-10'>
      <div>

      <h1 className='font-semibold text-xl'>Security Code
            </h1>
            <input className='bg-black w-[120px] border-2 border-red-700 p-1 mt-2' type="text"  />

            </div>
            <div>
            <h1 className='font-semibold text-xl text-gray-400 mt-10'>Send Code
            </h1>

            </div>

      </div>
      <div  className=' mt-10'>
    <button className=' bg-red-600 w-[65vh] h-[10vh] rounded-2xl font-bold text-xl '> Pay</button>

    </div>




      </div>

    </div>
  )
}

export default Carddetails