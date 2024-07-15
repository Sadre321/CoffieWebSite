import React from 'react'
import { Link } from 'react-router-dom'

const HomePageNav = () => {
  return (
    <>
    <header className="flex justify-between items-center p-2 m-2">
      <p className="text-4xl font-thin">
        Simge Coffee
      </p>
      
      <div>
        <Link to={"/login"}>
            <i className="fa-regular fa-user text-2xl font-thin pl-4" />
        </Link>
      </div>
    </header>
    </>
  )
}

export default HomePageNav