import styles from './SellerInfo.module.css'
import React, { useState, useEffect } from 'react';
import { RatingProduct } from '../Rating/Rating'

export function SellerInfo({ sellerId }) {
  const [seller, setseller] = useState([]);

  useEffect(() => {
    const fetchSeller = async () => {
      const response = await fetch('src/components/SellerInfo/seller.json');
      const data = await response.json();
      const sellerFound = data.find(sellers => sellers.id === sellerId);
      if (sellerFound) setseller(sellerFound);
    };
    fetchSeller();
  }, [sellerId])

  
  return(
    <section className={styles.containerSection}>
      <div className={styles.container}>
        <div className={styles.containerSeller}>
          <span className={styles.seller}>Vendedor(a): {seller.name}</span>
        </div>
        <div className={styles.containerSeller}>
          <span className={styles.seller}>Email: {seller.email}</span>
        </div>
        <div className={styles.containerSeller}>
          <span className={styles.seller}>Telefone: {seller.phone}</span>
        </div>
        <div className={styles.containerSeller}>
          <RatingProduct evaluation={seller.evaluation} valueReadOnly={true}/>
        </div>
      </div>
    </section>
  )
}