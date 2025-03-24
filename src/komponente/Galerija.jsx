import React, { useState, useEffect } from 'react';

// Putanje ka slikama unutar 'src/assets'
import image1 from '../asets/1.jpg';
import image2 from '../asets/2.jpg';
import image3 from '../asets/3.jpg';
import image4 from '../asets/4.jpg';
import image5 from '../asets/5.jpg';
import image6 from '../asets/6.jpg';
import image7 from '../asets/7.jpg';
import image8 from '../asets/8.jpg';
import image9 from '../asets/9.jpg';
import image10 from '../asets/10.jpg';

import image16 from "../asets/16.jpg";


import image20 from "../asets/slikaOdrasli1.jpg";
import image21 from "../asets/slikaOdrasli2.jpg";


// Lista slika
const images = [image1, image2, image16, image5, image3, image20, image10 ,image21];

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  // Funkcija za otvaranje galerije
  const openGallery = (index) => {
    setCurrentImageIndex(index);
  };

  // Funkcija za zatvaranje galerije
  const closeGallery = () => {
    setCurrentImageIndex(null);
  };

  // Funkcija za sledeću sliku
  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Funkcija za prethodnu sliku
  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Navigacija putem tastature
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (currentImageIndex === null) return;

      if (e.key === 'ArrowRight') goToNextImage();
      if (e.key === 'ArrowLeft') goToPrevImage();
      if (e.key === 'Escape') closeGallery();
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [currentImageIndex]);

  return (
    <div className='font'>
    <div className="container mt-5">
      <h1 style={{ color: 'rgba(39,38,98,255)' }} className="text-center mb-4">Posebni momenti sa nasih časova</h1>
      <div className="row">
        {images.map((image, index) => (
          <div key={index} className="col-md-3 mb-4">
            <div className="card" style={{ height: '400px', width: '100%' }}>
              <img
                src={image}
                className="card-img-top"
                alt={`Slika ${index + 1}`}
                onClick={() => openGallery(index)}
                style={{ cursor: 'pointer', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        ))}
      </div>
      </div>

      {/* Lightbox galerija */}
      {currentImageIndex !== null && (
        <div className="lightbox" style={lightboxStyles} onClick={closeGallery}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
          <img
              src={images[currentImageIndex]}
              alt={`Slika ${currentImageIndex + 1}`}
              style={{
                maxWidth: '90%',
                maxHeight: '80vh',
                objectFit: 'contain',
                display: 'block',
                margin: 'auto'  // Obezbeđuje centriranje slike
              }}
            />
            <button onClick={goToPrevImage} style={prevButtonStyles}>&lt;</button>
            <button onClick={goToNextImage} style={nextButtonStyles}>&gt;</button>
            <button onClick={closeGallery} style={closeButtonStyles}>X</button>
          </div>
        </div>
      )}
    </div>
  );
};

// Stilovi za lightbox
const lightboxStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const buttonStyles = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'transparent',
  border: 'none',
  color: '#fff',
  fontSize: '2rem',
  cursor: 'pointer',
  zIndex: 1001,
};

const prevButtonStyles = {
  ...buttonStyles,
  left: '20px',
};

const nextButtonStyles = {
  ...buttonStyles,
  right: '20px',
};

const closeButtonStyles = {
  position: 'absolute',
  top: '20px',
  right: '20px',
  backgroundColor: 'transparent',
  border: 'none',
  color: 'red',
  fontSize: '2rem',
  cursor: 'pointer',
  zIndex: 1001,
};

export default Gallery;
