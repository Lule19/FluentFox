import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Imports from Galerija2 (first 8 images)
import image20261 from "../asets/20261.jpg";
import image20262 from "../asets/20262.jpg";
import image20263 from "../asets/20263.jpg";
import image20264 from "../asets/20264.jpg";
import image20266 from "../asets/20266.jpg"; 

import image1 from '../asets/1.jpg';
import image2 from '../asets/2.jpg';
import image3 from '../asets/3.jpg';

// First 8 images from Galerija2
const images = [
  image20261, image20262, image20263, image20264, image20266, 
  image1, image2, image3
];

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  // Funkcija za otvaranje galerije
  const openGallery = (index) => {
    setCurrentImageIndex(index);
    document.body.style.overflow = 'hidden'; 
  };

  // Funkcija za zatvaranje galerije
  const closeGallery = () => {
    setCurrentImageIndex(null);
    document.body.style.overflow = 'auto'; 
  };

  // Funkcija za sledeću sliku
  const goToNextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  // Funkcija za prethodnu sliku
  const goToPrevImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, []);

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
  }, [currentImageIndex, goToNextImage, goToPrevImage]);

  return (
    <div className='font'>
    <div className="container mt-5">
      <div className="text-center mb-5">
        <h2 className="section-title text-uppercase">Posebni momenti sa naših časova</h2>
      </div>
      <div className="row">
        {images.map((image, index) => (
          <motion.div 
            key={index} 
            className="col-md-3 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="card shadow-sm border-0 overflow-hidden" style={{ height: '300px', width: '100%', borderRadius: '15px' }}>
              <motion.img
                src={image}
                className="card-img-top"
                alt={`Slika ${index + 1}`}
                onClick={() => openGallery(index)}
                whileHover={{ scale: 1.05 }}
                style={{ cursor: 'pointer', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
              />
            </div>
          </motion.div>
        ))}
      </div>
      </div>

      {/* Modern Lightbox Overlay */}
      <AnimatePresence>
        {currentImageIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox" 
            style={lightboxStyles} 
            onClick={closeGallery}
          >
            {/* Close Button */}
            <motion.button 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={closeGallery} 
              style={closeButtonStyles}
              whileHover={{ scale: 1.1 }}
            >
              <i className="fas fa-times"></i>
            </motion.button>
            
            {/* Previous Button */}
            <motion.button 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={(e) => { e.stopPropagation(); goToPrevImage(); }} 
              style={prevButtonStyles}
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}
            >
              <i className="fas fa-chevron-left"></i>
            </motion.button>

            {/* Image Container */}
            <motion.div 
              className="lightbox-content" 
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              style={{ position: 'relative', maxWidth: '90%', maxHeight: '90vh' }}
            >
              <motion.img
                key={currentImageIndex} // Key ensures animation runs when image changes
                src={images[currentImageIndex]}
                alt={`Slika ${currentImageIndex + 1}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                style={{
                  maxWidth: '100%',
                  maxHeight: '85vh',
                  objectFit: 'contain',
                  display: 'block',
                  margin: 'auto',
                  borderRadius: '10px',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                }}
              />
            </motion.div>

            {/* Next Button */}
            <motion.button 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={(e) => { e.stopPropagation(); goToNextImage(); }} 
              style={nextButtonStyles}
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}
            >
              <i className="fas fa-chevron-right"></i>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
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
  backgroundColor: 'rgba(0, 0, 0, 0.92)', // Darker background
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1050,
  backdropFilter: 'blur(5px)', // Blurs the background
};

const buttonStyles = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  border: 'none',
  color: '#fff',
  fontSize: '2rem',
  cursor: 'pointer',
  zIndex: 1060,
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'background-color 0.3s',
};

const prevButtonStyles = {
  ...buttonStyles,
  left: '30px',
};

const nextButtonStyles = {
  ...buttonStyles,
  right: '30px',
};

const closeButtonStyles = {
  position: 'absolute',
  top: '30px',
  right: '30px',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  border: 'none',
  color: '#fff',
  fontSize: '1.5rem',
  cursor: 'pointer',
  zIndex: 1060,
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'background-color 0.3s',
};

export default Gallery;
