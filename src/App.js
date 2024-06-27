import React from 'react'
import Navbar from './components/product/Navbar'
import MainRoutes from './routes/MainRoutes'
import Footer from './components/product/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <MainRoutes/>
      <Footer/>
    </div>
  )
}

export default App
