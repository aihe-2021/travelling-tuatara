import React from 'react'

function Brian () {
  return (
    <>
      <div className='header'>
        <img className='banner-image' src='/images/sunset-lake.jpg'/>
        <div className='centered'><h1>The Travelling Tuatara</h1></div>
      </div>
      <div className="brian">
        <div className="content">
          <div className="content-overlay"></div>
          <img className='image-brian' src='/images/brian-poetry.jpeg'/>
          <div className="content-details fadeIn-bottom">
            <h1 className="content-title">Brian Potiki</h1>
          </div>
        </div>
      </div>
      <div className='brian-about'>
        <h1>Brian Potiki</h1>
        <h3>(Kai Tahu, Kati Mamoe, Waitaha)</h3>
        <p>Potiki, Brian (1953 - ) is a poet and playwright. He is also an experienced scriptwriter, songwriter and performer. Potiki's poems have been published in numerous magazines and in a Hawaiian-based anthology.
        Brian Potiki lives near Rotorua. He has toured schools teaching drama and he is a popular member of the Book Councils Writers in Schools programme. Potiki continues to tour extensively, performing and running workshops, often as The Travelling Tuataras with his partner, Jill Walker. He uses songs and dramatisations to bring his performances to life, as well as stories about Maui.

        Aotearoa, a book of his collected poems and songs was published in October 2003. He has also worked on a book about the play, 'Maranga Mai', a seminal work of Maori Theatre from 1980-81.

        In 2007 Potiki completed a cycle of history plays begun in 1990: Hiroki's Song, Boultbee, A Mutiny Stripped and Matupohue, set in the South Island. They were published as Te Wai Pounamu, Your Music Remembers Me: Four South Island History Plays (Steele Roberts, 2007).

        In 2010 Brian Potiki finished writing Hey Maori People, a book about Maori theatre in the 1980's. He is currently writing The Raw Man, a biography of writer Rowley Habib based on their thirty-year-long correspondence.
        </p>
        <h2>Links</h2>
        <ul className='list-style'>
          <li>
            <a href='https://www.komako.org.nz/person/820'><h4 className="links-underline-animation">Komako: Brian (King) Potiki</h4></a>
          </li>
          <li>
            <a href='http://www.poetlaureate.org.nz/2020/07/the-situation-brian-potiki.html'><h4 className="links-underline-animation">Poet Laureate: The Situation</h4></a>
          </li>
          <li>
            <a href='https://www.nzepc.auckland.ac.nz/features/whetu_moana/b_potiki.asp'><h4 className="links-underline-animation">Tony by Brian Potiki</h4></a>
          </li>
          <li>
            <a href='https://www.read-nz.org/writer/potiki-brian/'><h4 className="links-underline-animation">Read-NZ: Brian Potiki</h4></a>
          </li>
        </ul>
      </div>
    </>
  )
}
export default Brian
