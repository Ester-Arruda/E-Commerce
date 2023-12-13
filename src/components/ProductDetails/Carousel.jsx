import React, { useState } from 'react';
import styles from './ProductDetails.module.css';

export default function Carousel({ images, onImageClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const imageArray = Array.isArray(images) ? images : [];

  const showNextImages = () => {
    setCurrentIndex((prevIndex) => prevIndex + 4);
  };

  const showPrevImages = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 4));
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel}>
        {imageArray.slice(currentIndex, currentIndex + itemsPerPage).map((image, index) => (
          <div
            key={index}
            className={styles.carouselItem}
            onClick={() => onImageClick(image)}
          >
            <img
              className={styles.img}
              src={image}
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <div className={styles.navigationButtons}>
        <button className={styles.button} onClick={showPrevImages} disabled={currentIndex === 0}>
          Anterior
        </button>
        <button className={styles.button} onClick={showNextImages} disabled={currentIndex + itemsPerPage >= imageArray.length}>
          Próximo
        </button>
      </div>
    </div>
  );
}