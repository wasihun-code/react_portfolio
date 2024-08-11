import React from 'react'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className='flex flex-col gap-y-32 mr-6 ml-6 my-4 font-body'>
      <Navbar />
        <Outlet />
      <Footer />
    </div>
  )
}

export default App

