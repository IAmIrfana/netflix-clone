import React from 'react'
import Slidebar from '../components/Slidebar'
import Movierow from '../components/Movierow'
import { cards, row1, row2 } from '../Utiliity'

const Home = () => {
  return (
    <div>

    <Slidebar />
    <div>
      <h1 className="text-2xl font-semibold p-3">Now Streaming</h1>

      <Movierow rowdata={cards} />
    </div>
    <div>
      <h1 className="text-2xl font-semibold p-3">Opening This Week</h1>

      <Movierow rowdata={row1} />
    </div>
    <div>
      <h1 className="text-2xl font-semibold p-3">Coming Soon</h1>

      <Movierow rowdata={row2} />
    </div>  
  </div>
  )
}

export default Home