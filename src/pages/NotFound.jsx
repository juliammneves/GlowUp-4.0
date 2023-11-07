import React from 'react'
import not from '../images/404.png'
import Navbar from '../components/Navbar'

function NotFound() {
  return (
    <>
      <Navbar />
      <div className="NotFound">
        <img src={not} alt="" />
      </div>
    </>
  )
}

export default NotFound