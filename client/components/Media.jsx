import React from 'react'

function Media () {
  return (
    <>
      <div className='header'>
        <img className='banner-image' src='/images/stereo.jpg'/>
        <div className='centered'><h1>The Travelling Tuatara</h1></div>
      </div>
      <div className="media">
        <div className="content">
          <div className="content-overlay"></div>
          <img className='image-media' src='/images/tuatara-bathtub.jpeg'/>
          <div className="content-details fadeIn-bottom">
            <h1 className="content-title">Media</h1>
          </div>
        </div>
      </div>
      <div className='media-links'>
        <h1>Media Links</h1>
        <h3 className='media_headers'>Youtube</h3>
        <ul>
          <li>
            <a href='https://youtu.be/jG6Aftzvxmg'><h4 className="links-underline-animation">Helicopter</h4></a>
          </li>
          <li>
            <a href='https://youtu.be/zwEUti5DatQ'><h4 className="links-underline-animation">Little Fish</h4></a>
          </li>
          <li>
            <a href='https://youtu.be/MZcd7aWpEk0'><h4 className="links-underline-animation">Green Frogs</h4></a>
          </li>
          <li>
            <a href='https://youtu.be/OPvLJ2mrdfY'><h4 className="links-underline-animation">Wilma the Worm</h4></a>
          </li>
          <li>
            <a href='https://youtu.be/wNlLvu1xKyo'><h4 className="links-underline-animation">Music and Intereactive</h4></a>
          </li>
          <li>
            <a href='https://youtu.be/Cppi8w1ltsY'><h4 className="links-underline-animation">Come Here</h4></a>
          </li>
        </ul>
        <h3 className='media_headers'>Articles</h3>
        <ul>
          <li>
            <a href='https://www.nzherald.co.nz/rotorua-daily-post/news/travelling-tuataras-take-the-honours-video/OLBYLHQBIW7U7YGOCFCVJXE2A4/'><h4 className="links-underline-animation">Travelling Tuataras the the honours</h4></a>
          </li>
          <li>
            <a href='https://nz.locale.online/the-travelling-tuataras-6392817.html'><h4 className="links-underline-animation">About: The Travelling Tuatara</h4></a>
          </li>
          <li>
            <a href='https://www.nzepc.auckland.ac.nz/features/whetu_moana/b_potiki.asp'><h4 className="links-underline-animation">Tony by Brian Potiki</h4></a>
          </li>
          <li>
            <a href='https://www.glartent.com/XX/Unknown/125603954140140/The-Travelling-Tuataras'><h4 className="links-underline-animation">Glartent: The Travelling Tuatara</h4></a>
          </li>
        </ul>
        <h3 className='media_headers'>Facebook</h3>
        <div className='facebook-div'>
          <a href='https://www.facebook.com/thetravellingtuataras'><img className='facebook'src="/images/icons8-facebook-48.png"/></a>
        </div>
      </div>
    </>
  )
}
export default Media
