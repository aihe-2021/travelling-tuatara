import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Landing'
import Footer from './Footer'
import Jill from './Jill'
import Brian from './Brian'
import Media from './Media'
import Art from './Art'

function App () {
  return (
    <>

      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/jill' element={<Jill />} />
          <Route path='/brian' element={<Brian />} />
          <Route path='/media' element={<Media />} />
          <Route path='/art' element={<Art />} />
        </Routes>
        <Footer />
      </Router>

    </>
  )
}

export default App
