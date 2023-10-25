import './App.css'
import { useEffect, useState } from "react"

import Intro from './components/intro'
import Footer from './components/Footer'
import {Header,Home,Loginpage} from './paths'
// import Moviecard from './components/Moviecard'
// import Moviedetails from './components/Moviedetails'
// import Ticketpage from './components/Ticketpage'
// import {SelectSeat} from './components/SelectSeat'
// import Checkout from './components/Checkout'
// import Carddetails from './components/Carddetails'
import { images } from './Utiliity'
// import Payment from './components/Payment'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Moviedetails from './components/Moviedetails'
import Watchlist from './components/Watchlist'

function App() {
  console.log(images[0].image)
  const [showIntro, setshowIntro] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setshowIntro(false);

    }, 4000)
    return () => clearTimeout(timer)

  }, [])
  const navigate=useNavigate("")
  useEffect(() => {


    navigate("/login");
}, [navigate]);


  return (
    <>
      <div className='h-[100vh]  relative'>
      {showIntro && <Intro/>}


      {!showIntro && <Header/>}


        {/* -----------------routing start------------ */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/moviedetails' element={<Moviedetails />} />
          <Route path='/login' element={<Loginpage/>}/>
          <Route path='/watchlist' element={<Watchlist/>}/> 
        </Routes>

        {/* ------------routing end--------- */}

        {!showIntro && <Footer/>}

        {/* <Moviedetails/> */}

        {/* <SelectSeat/> */}
        {/* <Checkout/> */}
        {/* <Carddetails/> */}
        {/* <Payment/> */}





      </div>

    </>

  )
}

export default App
