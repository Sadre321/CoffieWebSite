import React from 'react'
import Navbar from '../Components/Navbar'
import AsideBar from '../Components/AsideBar'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer'

const Admin = () => {
  return (
    <>
        <Navbar/>         
        {/* AsideBar content */}
        {/* admin content */}
      <div className="flex ">
        {/* left  content */}
        <AsideBar/>
        {/* right content */}
        <div className="basis-11/12 bg-gray-100">
          <div className="p-10 h-full">
            <div className="h-full bg-white rounded p-7">
              <Outlet/> 
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
    )
}

export default Admin