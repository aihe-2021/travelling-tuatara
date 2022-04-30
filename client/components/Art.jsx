import React, { useState, useCallback } from 'react'
import ImageViewer from 'react-simple-image-viewer'

function Art () {
  const [currentImage, setCurrentImage] = useState(0)
  const [isViewerOpen, setIsViewerOpen] = useState(false)
  const images = [
    '/images/art.jpeg',
    '/images/flowers.jpeg',
    '/images/painting.jpeg',
    '/images/jill-art.jpeg',
    '/images/tiki.jpeg',
    '/images/windsock.jpeg'
  ]

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index)
    setIsViewerOpen(true)
  }, [])

  const closeImageViewer = () => {
    setCurrentImage(0)
    setIsViewerOpen(false)
  }
  return (
    <>
      <div className='header'>
        <img className='banner-image' src='/images/painting.jpeg'/>
        <div className='centered'><h1>The Travelling Tuatara</h1></div>
      </div>

      <div className= 'art_content'>
        <div className='art_content_images'>
          {images.map((src, index) => (
            <img
              src={ src }
              onClick={ () => openImageViewer(index) }
              key={ index }
              style={{ margin: '10px' }}
              alt=""
            />
          ))}
        </div>

        {isViewerOpen && (
          <ImageViewer
            src={ images }
            currentIndex={ currentImage }
            disableScroll={ false }
            closeOnClickOutside={ true }
            onClose={ closeImageViewer }
          />
        )}
      </div>
    </>
  )
}
export default Art
