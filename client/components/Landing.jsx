import React from 'react'
import { Link } from 'react-router-dom'

function Landing () {
  return (
    <>

      <div className="center">
        <img className="center_image" src='/images/tt-banner.jpeg'/>
      </div>
      <div className="container1">
        <div className="content">
          <div className="content-overlay"></div>
          <img className='image' src='/images/header.jpeg'/>
          <div className="content-details fadeIn-bottom">
            <h1 className="content-title">About</h1>
            <Link to='/jill'><p className="hover-underline-animation">Jill Walker</p></Link>&nbsp;&nbsp;&nbsp;<Link to='/brian'><p className="hover-underline-animation">Brian Potiki</p></Link>
          </div>
        </div>
      </div>
      <div className="container2">
        <div className="content">
          <div className="content-overlay"></div>
          <img className='image' src='/images/painting.jpeg'/>
          <div className="content-details fadeIn-bottom">
            <h1 className="content-title">Art</h1>
            <Link to='/art' style={{ textDecoration: 'none' }}><p className="hover-underline-animation">Travelling Tuatara Creations</p></Link>
          </div>
        </div>
      </div>
      <div className="container3">
        <div className="content">
          <div className="content-overlay"></div>
          <img className='image' src='/images/records.jpg'/>
          <div className="content-details fadeIn-bottom">
            <h1 className="content-title">Media</h1>
            <Link to='/media' style={{ textDecoration: 'none' }} ><p className="hover-underline-animation">Find various media links</p></Link>
          </div>
        </div>
      </div>
      <div className="container4">
        <div className="content">
          <div className="content-overlay"></div>
          <img className='image' src='/images/brian-canoeing.jpeg'/>
          <div className="content-details fadeIn-bottom">
            <h1 className="content-title">Testimonials</h1>
            <Link to='/testimonials' style={{ textDecoration: 'none' }}><p className="hover-underline-animation">Testimonials from previous clients</p></Link>
          </div>
        </div>
      </div>

    </>
  )
}

export default Landing
