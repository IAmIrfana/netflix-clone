import './App.css'
import { useEffect, useState } from "react"

import Intro from './components/intro'
import Header from './components/header'
import Footer from './components/Footer'
import Loginpage from './components/Loginpage'
import Slidebar from './components/Slidebar'
// import Moviecard from './components/Moviecard'
import Movierow from './components/Movierow'
// import Moviedetails from './components/Moviedetails'
// import Ticketpage from './components/Ticketpage'
// import {SelectSeat} from './components/SelectSeat'
// import Checkout from './components/Checkout'
// import Carddetails from './components/Carddetails'
import { images, cards, row1, row2 } from './Utiliity'
// import Payment from './components/Payment'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Moviedetails from './components/Moviedetails'
import Home from './pages/Home'

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
}, []);


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
