import React, { useState, useEffect, useCallback } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';

// Putanje ka slikama unutar 'src/assets'
import image1 from '../asets/1.jpg';
import image2 from '../asets/2.jpg';
import image3 from '../asets/3.jpg';
import image4 from '../asets/4.jpg';
import image5 from '../asets/5.jpg';
import image6 from '../asets/6.jpg';
import image7 from '../asets/7.jpg';
import image8 from '../asets/8.jpg';
import image9 from "../asets/9.jpg";
import image10 from "../asets/10.jpg";

import image11 from '../asets/11.jpg';
import image12 from '../asets/12.jpg';
import image13 from '../asets/13.jpg';
import image14 from "../asets/14.jpg";
import image15 from "../asets/15.jpg";

import image16 from "../asets/16.jpg";

import image20 from "../asets/slikaOdrasli1.jpg";
import image21 from "../asets/slikaOdrasli2.jpg";

import image22 from "../asets/izlog.jpg";
import image23 from "../asets/ucionica.jpg";

// New images
import image20261 from "../asets/20261.jpg";
import image20262 from "../asets/20262.jpg";
import image20263 from "../asets/20263.jpg";
import image20264 from "../asets/20264.jpg";
import image20266 from "../asets/20266.jpg"; 


// Lista slika
const images = [
  image20261, image20262, image20263, image20264, image20266, // New images at the top
  image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, 
  image11, image12, image13, image14, image15, image16, image20, image21, image22, image23
];

const Gallery2 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  // Funkcija za otvaranje galerije
  const openGallery = (index) => {
    setCurrentImageIndex(index);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };

  // Funkcija za zatvaranje galerije
  const closeGallery = () => {
    setCurrentImageIndex(null);
    document.body.style.overflow = 'auto'; // Enable scrolling
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
    <div className="container mt-5">
      <div className="row">
        {images.map((image, index) => (
          <motion.div 
            key={index} 
            className="col-md-3 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
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
              <div style={{
                position: 'absolute',
                bottom: '-40px',
                left: '0',
                right: '0',
                textAlign: 'center',
                color: 'white',
                fontSize: '1rem',
                fontFamily: 'Poppins, sans-serif'
              }}>
                {currentImageIndex + 1} / {images.length}
              </div>
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

export default Gallery2;
