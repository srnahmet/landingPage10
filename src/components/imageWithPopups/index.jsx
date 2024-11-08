import React from 'react';
import './ImageWithPopups.css';

function ImageWithPopups() {
  return (
    <div className="image-container">
      <img src={`${process.env.PUBLIC_URL}/images/imageWithPopups/map.png`} alt="Background" className="background-image" />

      <h1 className="centered-title">11,658,467</h1>
      <h2 className="centered-title-2">Shoes Collected</h2>

      <div className="popup">
        <img src={`${process.env.PUBLIC_URL}/images/imageWithPopups/popup.png`} alt="Popup Content" className="popup-image" />

        <div className="popup-extension">
          <p className="extension-text">Emma Simpson collected one pair of Cool Shoes.</p>
          <div className="arrow-down"></div> 
        </div>
      </div>
    </div>
  );
}

export default ImageWithPopups;
