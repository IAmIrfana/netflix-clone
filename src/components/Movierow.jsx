import React from 'react'
import Moviecard from './Moviecard'
import { cards, row1 } from '../Utiliity'

const Movierow = (rowdata) => {
    console.log(rowdata.rowdata)
  return (
    <div className='flex gap-2 rounded-md'>
        {rowdata.rowdata?.map((item,ine)=>  <Moviecard key={ine} image={item}/> )}
       {/* <Moviecard/>
       <Moviecard/>
       <Moviecard/> */}
    </div>
  )
}

export default Movierow