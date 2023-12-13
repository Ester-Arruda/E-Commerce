import styles from './RelatedProducts.module.css'
import React, { useState, useEffect } from 'react';

export function RelatedProducts() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch('src/components/RelatedProducts/relatedProducts.json');
      const data = await response.json();
      setProducts(data);
    };
    fetchProduct();
  }, [])
  
  return(
    <section className={styles.containerSection}>
      <div className={styles.containerProduct}>
        <div className={styles.boxTitle}>
          <h3 className={styles.title}>Produtos Relacionados</h3>
        </div>
        <div className={styles.containerGrid}>
        {products.map((product) => (
          <ListRelatedProducts key={product.id} {...product} />
        ))}
      </div>
      </div>
    </section>
  )
}

function ListRelatedProducts({name, img, price}) {
  const priceFormatted = `R$${(price || 0).toLocaleString('pt-BR', {
    minimumFractionDigits: 2, 
    maximumFractionDigits: 2 }
  )}`;
  
  return(
    <div className={styles.containerItem}>  
      <img src={img} className={styles.imgRelated}/>
      <p className={styles.nameRelated}>{name}</p>
      <p className={styles.priceRelated}>{priceFormatted}</p>
    </div>
  )
}