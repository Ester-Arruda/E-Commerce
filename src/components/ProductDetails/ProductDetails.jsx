import styles from './ProductDetails.module.css'
import React, { useState, useEffect } from 'react';
import { RatingProduct } from '../Rating/Rating'
import Carousel from './Carousel';
import SeeMore from '../SeeMore/SeeMore'

export function ProductDetails({ productId }) {

  const [product, setProduct] = useState([]);
  const [carouselImages, setCarouselImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const priceFormatted = `R$${(product.price || 0).toLocaleString('pt-BR', {
    minimumFractionDigits: 2, 
    maximumFractionDigits: 2 }
  )}`;
 
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch('src/components/ProductDetails/products.json');
      const data = await response.json();
      const foundProduct = data.find(product => product.id === productId);

      if (foundProduct) {
        setCarouselImages(foundProduct.img);
        setProduct(foundProduct);
      } 
    };
    fetchProduct();
  }, [productId])

  useEffect(() => {
    if (carouselImages.length > 0 && !selectedImage) {
      setSelectedImage(carouselImages[0]);
    }
  }, [carouselImages, selectedImage]);
  
  const handleImageClick = (image) => {
    setCarouselImages((prevImages) => [...prevImages, selectedImage]);
    setSelectedImage(image);
  };
  
  return (
    <section className={styles.containerSection}>
      <div className={styles.container}>
        <div className={styles.containerImgProduct}>
          <div>
            <img className={styles.imgProduct} src={selectedImage} />
          </div>
          <div>
            <Carousel images={carouselImages} onImageClick={handleImageClick} />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.boxTitleProduct}>
            <h2 className={styles.titleProduct}>
              {product.title}
            </h2>
          </div>
          <div>
            <RatingProduct evaluation={product.evaluation} valueReadOnly={true}/>
          </div>
          <div className={styles.boxPriceProduct}>
            <p className={styles.priceProduct}>
              {priceFormatted}
            </p>
          </div>
          <div className={styles.boxDescriptionProduct}>
            <p className={styles.descriptionProduct}>
              {typeof product.description === 'string' ? (
                <SeeMore text={product.description} range={"600"} />
              ) : (
                'Descrição não disponível'
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}