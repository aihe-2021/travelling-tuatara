import React from 'react'

function Landing () {
  return (
    <>
      <div className="center">
        <img className="center_image" src='/images/tt-banner.jpeg'/>
      </div>
      <div className='background'>
        <div className='background_div1'>
          <img className='background_image' src='/images/header.jpeg'/>
          <div className="Link_Text"><h1>Centered</h1></div>
        </div>
        <div className='background_div2'>
          <img className='background_image' src='/images/tt-logo.jpeg'/>
          <div className="Link_Text"><h1>Centered</h1></div>
        </div>
        <div className='background_div3'>
          <img className='background_image' src='/images/art.jpeg'/>
          <div className="Link_Text"><h1>Centered</h1></div>
        </div>
        <div className='background_div4'>
          <img className='background_image' src='/images/forest.jpeg'/>
          <div className="Link_Text"><h1>Centered</h1></div>
        </div>
      </div>
    </>
  )
}

export default Landing
