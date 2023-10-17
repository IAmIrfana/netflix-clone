import React from 'react'
import { AiFillCheckCircle, AiFillHome } from 'react-icons/ai'

const Payment = () => {
  return (
    <div className=''>
        <div className='flex flex-col items-center justify-center h-screen'>
            <div>
                <AiFillCheckCircle className='text-8xl text-red-700 '/>
            </div>
            <div>
                <h1 className='text-5xl font-bold'>Payment Successful</h1>

            </div>
            <div>
            <h1 className='font-bold'>download ticket <span className='text-blue-400 font-bold'><a href="https:yxyz.movieshort">(https:yxyz.movieshort)</a></span></h1>

            </div>
            <div className='font-bold text-3xl flex gap-6 mt-10'>
                <AiFillHome/>
                <h1>CLose</h1>
            </div>
        </div>
    </div>
  )
}

export default Payment