import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'

const Checkout = () => {
    return (
        <div className='bg-black'>
            <div className='text-2xl flex justify-between m-7'>
                <h1 className='font-semibold'>Buy Tickets
                </h1>
                <button><BsArrowLeft /></button>
            </div>
            <div className='p-10 flex '>
                <img className='w-[30vh] h-[30vh] object-cover' src="data:image/jpeg;base64,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" alt="" />
                <div className='p-6'>
                    <h2 className='text-4xl font-bold text-gray-400'>Enola Holmes</h2>
                    <h3 className='text-3xl mt-2 font-semibold'>AMC Dine Block <br />37,Mumbai</h3>

                </div>
            </div>
            <div className='flex flex-col gap-5'>
                <h1 className='text-xl font-semibold ml-12'>Monday 17th June at 2 pm</h1>
                <div className='text-2xl font-bold ml-12  '>
                    <div className='flex flex-col gap-3'>
                        <h1>1.Number of Tickets </h1>
                        <h1 className='ml-4 text-xl text-gray-400'>1 Adult</h1>
                        <h1 className=''>2.Reserved Seating</h1>
                        <h1 className='ml-4 text-xl text-gray-400'>F4</h1>
                        <h1>3.Review</h1>

                    </div>
                </div>
                <div className='flex ml-16 gap-10 text-gray-400'>
                    <div  className='flex flex-col gap-4 font-semibold text-xl'>
                        Adult
                        <h1>Covenience Fee</h1>
                        <h1>Total</h1>
                    </div>
                    <div className='flex flex-col gap-3 font-semibold text-xl'>
                        <h1>                 1*Rs200 = Rs200
                        </h1>
                        <h1>Rs 54</h1>
                        <h1>Rs 254</h1>

                    </div>

                </div>

            </div>
            <div  className='mx-28 m-10'>
    <button className=' bg-red-600 w-[65vh] h-[10vh] rounded-2xl font-bold text-xl '> Check Out</button>

    </div>


        </div>
    )
}

export default Checkout