import React from 'react'
import { Link } from 'react-router-dom'

function Footer () {
  return (
    <>
      <div className='footer'>
        <div>
          <footer><Link className='footer-links' to='/'>Home</Link></footer>
        </div>
        <div>
          <footer><Link className='footer-links' to='/merchandise'>Merchandise</Link></footer>
        </div>
        <div>
          <footer><Link className='footer-links' to='/contact'>Contact</Link></footer>
        </div>
      </div>
    </>
  )
}
export default Footer
