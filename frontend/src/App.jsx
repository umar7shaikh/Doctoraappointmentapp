import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './Components/Navbar'
const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/doctors' element={<Doctors />} /> 
        <Route path='/doctors/:speciality' element={<Doctors />} /> 
        <Route path='/login' element={<Login/>} /> 
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-appointment' element={<MyAppointments />} />
        <Route path='/my-appointment/:docid' element={<MyAppointments />} />
      </Routes>
      
    </div>
  )
}

export default App


