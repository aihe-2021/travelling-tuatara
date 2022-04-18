import React from 'react'

function Jill () {
  return (
    <>

      <div className='header'>
        <img className='banner-image' src='/images/banner.jpeg'/>
        <div className='centered'><h1>The Travelling Tuatara</h1></div>
      </div>
      <div className="jill">
        <div className="content">
          <div className="content-overlay"></div>
          <img className='image-jill' src='/images/jill.jpeg'/>
          <div className="content-details fadeIn-bottom">
            <h1 className="content-title">Jill Walker</h1>
          </div>
        </div>
      </div>
      <div className='jill-about'>
        <h1>Jill Walker</h1>
        <h3>(Q.S.M)</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h2>Links</h2>
        <ul className='list-style'>
          <li>
            <a href='https://www.inprofile.co.nz/inprofile/jill'><h4 className="links-underline-animation">Jill Walker In Profile</h4></a>
          </li>
          <li>
            <a href='https://gg.govt.nz/file/24877'><h4 className="links-underline-animation">QSM</h4></a>
          </li>
          <li>
            <a href='https://www.nzherald.co.nz/rotorua-daily-post/news/our-people-jill-walker/O2IRNMD55KLFUXSUPM4CTPCIYM/'><h4 className="links-underline-animation">Our People: Jill Walker</h4></a>
          </li>
          <li>
            <a href='https://anchor.fm/arts-village/episodes/Episode-06-with-Angela-Frank--Jill-Walker-e1aar67'><h4 className="links-underline-animation">The Arts Village People</h4></a>
          </li>
          <li>
            <a href='http://file.stuff.co.nz/legacy-assets/stuff/asset/191006.pdf'><h4 className="links-underline-animation">Waikato Times</h4></a>
          </li>
        </ul>
      </div>

    </>
  )
}
export default Jill
