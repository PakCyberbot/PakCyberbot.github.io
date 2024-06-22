import React, { useState } from 'react';
import "./qualifications.css";

const importImages = ( category ) => {
  const images = [];
  // Assuming your images are stored in the 'images' folder
  const imageContext = require.context(`../props/certs/`, true, /\.(png|jpg|jpeg|gif|svg)$/);
  imageContext.keys().forEach((imagePath) => {
    if (imagePath.includes(category)) {

      const imageName = imagePath.split('/').pop().replace(/\.\w+$/, '').replace(/^\d+_/,''); // Extract the image name
      const importedImage = imageContext(imagePath);

      images.push({ img: imageContext(imagePath), name: imageName });
    }
  });

  return images;
};

const Qualifications = ({ viewType }) => {
  const [isPopupOpen, setPopupOpen] = useState(false);


  return(
        <div className="qualifications-container">
          
        {importImages(viewType).map((cert, index) => (
          <div className="Certs" key={index}>
            <img src={cert.img}/>
            <h1>{cert.name}</h1>
          </div>
        ))}
      </div>
)};

export default Qualifications;
