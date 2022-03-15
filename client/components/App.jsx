import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Landing'
import Footer from './Footer'

function App () {
  return (
    <>

      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
        </Routes>
        <Footer />
      </Router>

    </>
  )
}

export default App
